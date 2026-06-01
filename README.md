# Out of the Box

Event management platform for ETIC_Algarve. Django REST API backend, React frontend, PostgreSQL database — all containerised with Docker Compose.

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
│   ├── seed_db.py          # Dev database seed script
│   └── seed_db_prod.py     # Prod database seed script (pages data only)
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
        ├── public/
        │   ├── robots.txt      # SEO: crawler rules
        │   └── sitemap.xml     # SEO: all public routes
        └── src/
            ├── assets/         # Images, WebP doodles, decorative elements
            ├── api/contracts/  # TypeScript interfaces for API responses
            ├── components/
            │   ├── buttons/    # PrimaryButton, SecondaryButton
            │   ├── core/       # Navbar, Footer, HeroPageSection, PageStars, HeroPolaroid, etc.
            │   ├── dashboard/  # CRUD dashboard components + modals
            │   └── homepage/   # HeroGallery, Carousel, Path, etc.
            ├── hooks/          # usePageData, useAuthUser, crudDashboard
            ├── pages/          # One file per event type + Dashboard + Programacao
            ├── services/api/   # API call helpers (one per resource)
            ├── styles/         # leaves.css, marquee.css, path.css, stars.css
            ├── utils/          # dashboard.ts, meta.ts, metrics.tsx
            └── types/          # TypeScript interfaces
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in values, or run `make env` to generate one.

For production, set:

```env
SECRET_KEY=<strong-random-key>
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,localhost,127.0.0.1
CSRF_TRUSTED_ORIGINS=https://yourdomain.com
CORS_ALLOWED_ORIGINS=https://yourdomain.com
```

> **Note:** `ALLOWED_HOSTS` takes bare hostnames (no `https://`), comma-separated. `localhost` and `127.0.0.1` must be included for the Docker healthcheck to pass.

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
make restart             # Restart all running dev containers (no rebuild)
make rebuild             # Rebuild images, restart containers, run migrations
make sync-dev            # Sync local code changes without rebuilding containers
make clean               # Stop and remove containers — volumes are preserved
make purge               # ⚠️  Stop containers AND delete all volumes (prompts for confirmation)

# Prod workflow
make start-prod          # Full first-time prod setup: build, migrate, superuser, seed, logs
make up-prod             # Start production containers
make populate-prod       # Seed prod database with pages data

# Migrations
make migration-dev       # Generate new migrations (dev)
make migrate-dev         # Apply migrations (dev)
make migration-prod      # Generate new migrations (prod)
make migrate-prod        # Apply migrations (prod)

# Users
make superuser-dev       # Create a superuser interactively (dev)
make superuser-prod      # Create Django superuser (prod)

# Database
make populate-dev        # Seed database with sample data (dev)

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

# Assets
make convert             # Convert PNG/JPG assets to WebP
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
| | `/api/sunset-talks/` | Same pattern |
| | `/api/workshops/` | Same pattern |
| | `/api/cinema/` | Same pattern |
| | `/api/concertos/` | Same pattern |
| | `/api/speed-hunting/` | Same pattern |
| | `/api/semana-labia/` | Same pattern |

`POST` and `PATCH` accept **`multipart/form-data`** when uploading an image, or **`application/json`** otherwise. Write operations require authentication (`IsAuthenticatedOrReadOnly`).

### Homepage highlights

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/highlights/` | All active events with `is_highlight=True`, sorted by date |

Events from any category can be promoted to the homepage Carousel by setting `is_highlight = true` in the dashboard.

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
| `GET` | `/api/speaker/` | Speaker (Sunset Talks) count |
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
- **Highlights** — toggle `is_highlight` on any event to feature it in the homepage Carousel

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

# 2. Fill in production values in .env
#    Required: SECRET_KEY, DEBUG=False, ALLOWED_HOSTS, CSRF_TRUSTED_ORIGINS, CORS_ALLOWED_ORIGINS

# 3. First-time start (builds, migrates, creates superuser, seeds pages)
make start-prod
```

Nginx listens on port 80, proxies `/api/` and `/admin/` to Gunicorn, and serves static + media files directly from the `static_files` volume.

---

## SEO

- Per-page `<title>`, `<meta name="description">`, Open Graph, and Twitter Card tags are applied dynamically on route change via `src/utils/meta.ts`.
- `public/robots.txt` allows all crawlers and points to the sitemap.
- `public/sitemap.xml` lists all public routes with the production domain.
- The shared OG image is served from `/ootb_w26_900.webp` (stable URL, no content hash).

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
