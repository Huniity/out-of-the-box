# Out of the Box

Event management platform for the ETIC_Algarve festival. Django REST API backend, React frontend, PostgreSQL database — all containerised with Docker Compose.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite + TypeScript + Tailwind CSS v4 |
| Backend | Django 6 + Django REST Framework + drf-spectacular |
| Database | PostgreSQL 18 |
| Container | Docker Compose (dev + prod) |
| Prod server | Gunicorn + Nginx |
| DB admin | Adminer (dev only) |
| Tests | Vitest (frontend) · Pytest (backend) |

---

## Project Structure

```
out-of-the-box/
├── compose.dev.yaml        # Dev: backend + frontend + db + adminer
├── compose.prod.yaml       # Prod: backend + db + nginx
├── Makefile                # All workflow commands
├── env.example             # Environment variable template
├── scripts/
│   └── seed_db.py          # Database seed script
├── ops/
│   ├── backend/            # Dockerfiles (dev + prod)
│   └── nginx/              # nginx.conf (prod)
└── srcs/
    ├── backend/
    │   ├── core/           # Django project settings, urls, wsgi
    │   ├── apps/
    │   │   └── events/     # Main app: models, views, serializers, urls
    │   │       └── migrations/
    │   └── manage.py
    └── frontend/
        └── src/
            ├── assets/         # Images, SVGs, decorative elements
            ├── components/
            │   ├── buttons/    # PrimaryButton, SecondaryButton
            │   ├── core/       # Navbar, Footer, MarqueeBanner, etc.
            │   ├── dashboard/  # CRUD dashboard components + modals
            │   └── homepage/   # HeroGallery, Carousel, Path, etc.
            ├── hooks/          # usePageData, useAuthUser, crudDashboard
            ├── pages/          # One file per event type + Dashboard
            ├── styles/         # leaves.css, marquee.css, path.css
            ├── types/          # TypeScript interfaces
            └── utils/          # dashboard.ts, metrics.tsx
```

---

## Environment Variables

Run `make env` for environment variables.


For production, also set:
```env
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
SECRET_KEY=<strong-random-key>
CSRF_TRUSTED_ORIGINS=https://yourdomain.com
```

---

## Quick Start

### First-time setup (recommended)

```bash
git clone <repo-url>
cd out-of-the-box

make env          # creates .env from defaults
make start-dev    # builds containers, runs migrations, seeds DB, attaches logs
```

`start-dev` waits for the database to be healthy, runs migrations, creates a superuser prompt, seeds sample data, then tails all logs.

### Manual start (if already set up)

```bash
make up-dev       # build + start containers
make migrate-dev  # apply any pending migrations
```

### Development URLs

| Service | URL |
|---|---|
| React app (hot reload) | http://localhost:5173 |
| Django API | http://localhost:8000/api/ |
| API docs (Swagger) | http://localhost:8000/docs/ |
| Admin panel | http://localhost:8000/admin/ |
| Custom dashboard | http://localhost:5173/dashboard |
| Database UI (Adminer) | http://localhost:8080 |

---

## Make Commands

```bash
make help                # List all available commands

# Environment
make env                 # Create .env from defaults (skips if already exists)

# Dev workflow
make start-dev           # Full first-time setup: build, migrate, seed, logs
make up-dev              # Start dev containers (build + run)
make up-prod             # Start production containers
make clean               # Stop and remove all containers and volumes

# Migrations
make migration-dev       # Generate new migrations (dev)
make migrate-dev         # Apply migrations (dev)
make migration-prod      # Generate new migrations (prod)
make migrate-prod        # Apply migrations (prod)

# Users
make superuser-dev       # Create Django superuser (dev)
make superuser-prod      # Create Django superuser (prod)

# Database
make populate-dev        # Seed database with sample data

# Tests
make backend-test-dev    # Run pytest in dev container
make backend-test-prod   # Run pytest in prod container
make frontend-test       # Run Vitest

# Checks
make check-dev           # Django system check (dev)
make check-prod          # Django system check (prod)

# Logs
make logs-backend-dev    # Tail Django log (dev)
make logs-backend-prod   # Tail Django log (prod)
make logs-pytest-dev     # Show pytest output (dev)
make logs-pytest-prod    # Show pytest output (prod)
```

---

## API Reference

All endpoints are prefixed with `/api/`.

### Event resources — full CRUD

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/exposicoes/` | List exposições |
| `POST` | `/api/exposicoes/` | Create exposição |
| `GET` | `/api/exposicoes/{id}/` | Get exposição |
| `PATCH` | `/api/exposicoes/{id}/` | Update exposição |
| `DELETE` | `/api/exposicoes/{id}/` | Delete exposição |
| | `/api/palestras/` | Same pattern |
| | `/api/workshops/` | Same pattern |
| | `/api/projecoes/` | Same pattern |
| | `/api/concertos/` | Same pattern |
| | `/api/speed-hunting/` | Same pattern |
| | `/api/semana-labia/` | Same pattern |

`POST` and `PATCH` accept **`multipart/form-data`** when uploading an image, or **`application/json`** otherwise. Write operations require authentication (`IsAuthenticatedOrReadOnly`).

### Pages

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/pages/` | List all pages |
| `GET` | `/api/pages/{id}/` | Get page |
| `PATCH` | `/api/pages/{id}/` | Update page content |
| `GET` | `/api/page/` | Page count |
| `GET` | `/api/page/views/` | Total visitor count |

### Auth & metrics

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/auth/me/` | Current user info (401 if unauthenticated) |
| `POST` | `/api/auth/logout/` | End session |
| `GET` | `/api/speaker/` | Speaker (Palestras) count |
| `GET` | `/api/health/` | Health check |

### API docs

Interactive Swagger UI: `GET /docs/`
OpenAPI schema: `GET /api/schema/`

---

## Dashboard

The custom admin dashboard lives at `/dashboard` in the React app. It requires a Django staff or superuser account (redirects to `/admin/login/` if unauthenticated).

- **Overview tab** — page-level stats and editable page content (titles, descriptions, dates, CTA buttons)
- **Event tabs** — one per page type; supports create, view, edit, delete with live filters and pagination
- **Image uploads** — file picker in the event form sends `multipart/form-data`; files are stored under `MEDIA_ROOT` (`staticfiles/media/`)

To create a dashboard user:

```bash
make superuser-dev   # follow the prompts
```

Then log in at http://localhost:8000/admin/ first to obtain a session cookie, then navigate to http://localhost:5173/dashboard.

---

## Production Deployment

The prod stack (`compose.prod.yaml`) replaces the Vite dev server with a pre-built React bundle served by **Nginx**, and runs Django with **Gunicorn**.

```bash
# 1. Build the frontend bundle locally
cd srcs/frontend && npm run build
# (dist/ is copied into the backend image by the prod Dockerfile)

# 2. Set production env vars in .env

# 3. Start
make up-prod
make migrate-prod
make superuser-prod
```

Nginx listens on port 80, proxies `/api/` and `/admin/` to Gunicorn, and serves static + media files directly from the `static_files` volume.

---

## Testing

```bash
# Backend (pytest)
make backend-test-dev

# Frontend (Vitest)
make frontend-test
# or: cd srcs/frontend && npm run test
```

Backend test config: `srcs/backend/pytest.ini`
Frontend test setup: `srcs/frontend/src/tests/setup.js`

---

## Logs

Django application logs are written to `/app/logs/django.log` inside the container (rotated at 10 MB, 5 backups).

```bash
make logs-backend-dev    # tail live log (dev)
make logs-backend-prod   # tail live log (prod)
make logs-pytest-dev     # last pytest run output
```
