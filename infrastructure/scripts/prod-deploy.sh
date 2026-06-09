#!/bin/bash

# Production Deployment Script for Out of the Box
# Runs on the remote server after files have been rsynced by Terraform

set -e
set -o pipefail

COMPOSE_FILE="compose.prod.yaml"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()         { echo -e "${BLUE}-----> $1${NC}"; }
log_success() { echo -e "${GREEN}✓ $1${NC}"; }
log_warning() { echo -e "${YELLOW}⚠ $1${NC}"; }
log_error()   { echo -e "${RED}✗ $1${NC}"; }

preflight_checks() {
    log "Running pre-flight checks..."

    if ! docker info >/dev/null 2>&1; then
        log_error "Docker is not running."
        exit 1
    fi

    if ! docker compose version >/dev/null 2>&1; then
        log_error "Docker Compose is not available."
        exit 1
    fi

    if [[ ! -f "${PROJECT_ROOT}/.env" ]]; then
        log_warning ".env not found — creating from defaults..."
        cd "${PROJECT_ROOT}" && make env
    fi

    log_success "Pre-flight checks passed"
}

cleanup() {
    log "Stopping existing containers..."
    cd "${PROJECT_ROOT}"
    docker compose -f ${COMPOSE_FILE} down --remove-orphans || true
    log_success "Cleanup complete"
}

deploy() {
    log "Building and starting containers..."
    cd "${PROJECT_ROOT}"

    # Backend startup replaces dist/ in the shared volume from the baked image
    docker compose -f ${COMPOSE_FILE} up --build -d

    log "Waiting for backend to be healthy..."
    timeout=90
    while [ $timeout -gt 0 ]; do
        if docker compose -f ${COMPOSE_FILE} exec -T backend python manage.py check >/dev/null 2>&1; then
            log_success "Backend is healthy"
            break
        fi
        sleep 3
        timeout=$((timeout - 3))
    done

    if [ $timeout -le 0 ]; then
        log_error "Backend did not become healthy in time."
        docker compose -f ${COMPOSE_FILE} logs backend
        exit 1
    fi

    log "Reconciling migration history..."
    docker compose -f ${COMPOSE_FILE} exec -T backend python manage.py shell -c "
from django.db import connection
with connection.cursor() as cursor:
    cursor.execute(
        '''
        UPDATE django_migrations
        SET name = %s
        WHERE app = %s AND name = %s
        ''',
        [
            '0020_cinema_is_highlight_concertos_is_highlight_and_more',
            'events',
            '0019_cinema_is_highlight_concertos_is_highlight_and_more',
        ],
    )
"

    log "Running migrations..."
    docker compose -f ${COMPOSE_FILE} exec -T backend python manage.py migrate

    log "Collecting static files..."
    docker compose -f ${COMPOSE_FILE} exec -T backend python manage.py collectstatic --noinput

    log_success "Deployment complete"
}

main() {
    echo -e "${GREEN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║              Out of the Box — Production Deploy              ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"

    preflight_checks
    cleanup
    deploy

    echo -e "${GREEN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                    Deployment Complete!                     ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"

    echo "Application running at: https://outofthebox.eticalgarve.com"
    echo ""
    echo "Useful commands (run from outofthebox-deployment/):"
    echo "  Logs:         docker compose -f compose.prod.yaml logs -f"
    echo "  Superuser:    docker compose -f compose.prod.yaml exec backend python manage.py createsuperuser"
    echo "  Seed data:    docker compose -f compose.prod.yaml exec backend python /scripts/seed_db.py"
    echo "  Stop:         docker compose -f compose.prod.yaml down"
}

trap 'log_error "Script interrupted."; exit 1' INT TERM

main "$@"
