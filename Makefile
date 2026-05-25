.PHONY: help up-dev up-prod clean migrate-dev migrate-prod migration-dev migration-prod superuser-dev superuser-prod check-dev check-prod backend-test-dev backend-test-prod frontend-test

help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

env: ## Create .env file if it doesn't exist
	@if [ ! -f .env ]; then \
		echo "Creating .env file..."; \
		printf "POSTGRES_DB=ootb_db\n" > .env; \
		printf "POSTGRES_USER=ootb_dev\n" >> .env; \
		printf "POSTGRES_PASSWORD=ootb_2026\n" >> .env; \
		printf "DATABASE_URL=postgres://ootb_dev:ootb_2026@db:5432/ootb_db\n" >> .env; \
		printf "DEBUG=True\n" >> .env; \
		printf "ALLOWED_HOSTS=localhost,127.0.0.1,backend, *\n" >> .env; \
		printf "DJANGO_SETTINGS_MODULE=core.settings\n" >> .env; \
		printf "SECRET_KEY=django-insecure-du@=ttc8hp*snf^og$mt_zywso3s713sq+_m=8yrma3cf=8s54\n" >> .env; \
		printf "\n" >> .env; \
		printf "# Production settings\n" >> .env; \
		printf "\n" >> .env; \
		printf "# ALLOWED_HOSTS=ootb.com,www.ootb.com\n" >> .env; \
		printf "# DEBUG=False\n" >> .env; \
		printf "\n" >> .env; \
	else \
		echo ".env file already exists."; \
	fi
	@echo "Environment variables:"
	@cat .env

start-dev: ## Start dev workflow with strict database readiness check
	@echo "Starting Docker containers in background..."
	docker compose -f compose.dev.yaml up --build -d 
	@echo "Waiting for PostgreSQL and Django backend to be fully ready..."
	@until docker compose -f compose.dev.yaml exec backend python manage.py check > /dev/null 2>&1; do \
		echo "Backend not ready yet... checking again in 2 seconds"; \
		sleep 2; \
	done
	@echo "Backend is ready! Running migrations and setup..."
	$(MAKE) migration-dev
	$(MAKE) migrate-dev
	$(MAKE) superuser-dev
	$(MAKE) populate-dev
	@echo "Setup complete! Attaching to container logs..."
	docker compose -f compose.dev.yaml logs -f

# start-dev: sync-dev ## Start dev workflow with strict database readiness check
# 	@echo "Starting Docker containers in background..."
# 	docker compose -f compose.dev.yaml up --build -d
# 	@echo "Waiting for PostgreSQL and Django backend to be fully ready..."
# 	@until docker compose -f compose.dev.yaml exec backend python manage.py check > /dev/null 2>&1; do \
# 		echo "Backend not ready yet... checking again in 2 seconds"; \
# 		sleep 2; \
# 	done
# 	@echo "Backend is ready! Running migrations and setup..."
# 	$(MAKE) migration-dev
# 	$(MAKE) migrate-dev
# 	$(MAKE) superuser-dev
# 	$(MAKE) populate-dev
# 	@echo "Setup complete! Attaching to container logs..."
# 	docker compose -f compose.dev.yaml logs -f

sync-dev:
	cd srcs/frontend && npm install && cd ../../ && cd srcs/backend && uv sync && cd ../../

up-dev: ## Start development environment
	docker compose -f compose.dev.yaml up
	$(MAKE) migrate-dev

# up-dev: ## Start development environment
# 	docker compose -f compose.dev.yaml up --build
# 	$(MAKE) migrate-dev

up-prod: ## Start production environment
	docker compose -f compose.prod.yaml up --build

clean: ## Stop and remove all containers, volumes, and orphans
	docker compose -f compose.dev.yaml down -v --remove-orphans
	docker compose -f compose.prod.yaml down -v --remove-orphans

migrate-dev: ## Run database migrations in development environment
	docker compose -f compose.dev.yaml exec backend python manage.py migrate

migrate-prod: ## Run database migrations in production environment	
	docker compose -f compose.prod.yaml exec backend python manage.py migrate

migration-dev: ## Create new database migrations in development environment
	docker compose -f compose.dev.yaml exec backend python manage.py makemigrations

migration-prod: ## Create new database migrations in production environment
	docker compose -f compose.prod.yaml exec backend python manage.py makemigrations

superuser-dev: ## Create a superuser in development environment
	docker compose -f compose.dev.yaml exec backend python manage.py createsuperuser

superuser-prod: ## Create a superuser in production environment
	docker compose -f compose.prod.yaml exec backend python manage.py createsuperuser

check-dev: ## Check for any issues in development environment
	docker compose -f compose.dev.yaml exec backend python manage.py check

check-prod: ## Check for any issues in production environment
	docker compose -f compose.prod.yaml exec backend python manage.py check

backend-test-dev: ## Run backend tests in development environment
	docker compose -f compose.dev.yaml exec backend pytest

backend-test-prod: ## Run backend tests in production environment
	docker compose -f compose.prod.yaml exec backend pytest

frontend-test: ## Run frontend tests
	cd srcs/frontend && npm run test

logs-backend-dev: ## Backend logs in development environment
	docker compose -f compose.dev.yaml exec backend tail -f /app/logs/django.log

logs-backend-prod: ## Backend logs in production environment
	docker compose -f compose.prod.yaml exec backend tail -f /app/logs/django.log

logs-pytest-dev: ## Pytest logs in development environment
	docker compose -f compose.dev.yaml exec backend cat /app/logs/pytest.log

logs-pytest-prod: ## Pytest logs in production environment
	docker compose -f compose.prod.yaml exec backend cat /app/logs/pytest.log

populate-dev: ## Populate database with sample data in development environment
	docker compose -f compose.dev.yaml exec backend python /scripts/seed_db.py


convert:
	node -e "
	const sharp = require('sharp');
	const fs = require('fs');
	const path = require('path');

	const dir = 'src/assets';
	const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

	Promise.all(files.map(f => {
	const input = path.join(dir, f);
	const output = path.join(dir, f.replace(/\.(png|jpg|jpeg)$/, '.webp'));
	return sharp(input).webp({ quality: 80 }).toFile(output).then(() => console.log(f, '→', output));
	})).then(() => console.log('Done!'));
	"