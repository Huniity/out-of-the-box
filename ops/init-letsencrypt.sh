#!/bin/bash
# First-time Let's Encrypt certificate bootstrap.
# Run this ONCE on the server before starting the full stack.
# Usage: ./ops/init-letsencrypt.sh your@email.com

set -e

DOMAIN="outofthebox.eticalgarve.com"
EMAIL="${1:?Usage: $0 <email>}"
CERT_PATH="/etc/letsencrypt/live/$DOMAIN"
COMPOSE_FILE="compose.prod.yaml"

echo "==> Bootstrapping Let's Encrypt for $DOMAIN"

# Step 1: create a dummy self-signed cert so nginx can start before real certs exist
if [ ! -f "$CERT_PATH/fullchain.pem" ]; then
    echo "==> Creating temporary self-signed cert so nginx can start..."
    docker compose -f "$COMPOSE_FILE" run --rm --entrypoint "" certbot \
        sh -c "mkdir -p '$CERT_PATH' && \
               openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
                 -keyout '$CERT_PATH/privkey.pem' \
                 -out '$CERT_PATH/fullchain.pem' \
                 -subj '/CN=localhost' 2>/dev/null"
fi

# Step 2: start nginx (needs the dummy cert above to pass ssl_certificate check)
echo "==> Starting nginx..."
docker compose -f "$COMPOSE_FILE" up -d nginx

# Step 3: get the real certificate via HTTP-01 webroot challenge
echo "==> Requesting real certificate from Let's Encrypt..."
docker compose -f "$COMPOSE_FILE" run --rm --entrypoint "" certbot \
    certbot certonly \
        --webroot \
        --webroot-path=/var/www/certbot \
        --email "$EMAIL" \
        --agree-tos \
        --no-eff-email \
        --force-renewal \
        -d "$DOMAIN"

# Step 4: reload nginx to pick up the real cert
echo "==> Reloading nginx..."
docker compose -f "$COMPOSE_FILE" exec nginx nginx -s reload

echo ""
echo "Done! Bring the full stack up with:"
echo "  docker compose -f $COMPOSE_FILE up -d"
