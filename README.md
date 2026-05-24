# Out of The Box

Event management platform with Django backend and React frontend.

## Quick Start

### First Time Setup (After Cloning)
```bash
git clone <repo-url>
cd out-of-the-box

# 1. Create environment variables
make env

# 2. Start containers and apply migrations
make up-dev

# 3. Create admin user (in another terminal)
make superuser-dev
# Username: admin
# Password: (enter your choice)
```

### Development URLs
- **React App**: http://localhost:5173
- **Django API**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin/
- **Database UI**: http://localhost:8080 (Adminer)

### Production URLs
- **App**: http://localhost:8000
- **API**: http://localhost:8000/api/
- **Admin**: http://localhost:8000/admin/

## Commands

```bash
make help              # Show all available commands
make up-dev            # Start dev environment with hot reload
make up-prod           # Start production environment
make clean             # Stop and remove all containers
make migrate-dev       # Run database migrations (dev)
make superuser-dev     # Create admin user (dev)
```

## Project Structure

```
srcs/
  backend/       # Django REST API
  frontend/      # React app
ops/
  backend/       # Docker configurations
```

## Tech Stack

- **Backend**: Django + Django REST Framework
- **Frontend**: React + Vite
- **Database**: PostgreSQL
- **Containerization**: Docker Compose
- **Tests**: Vitest (Frontend) + Pytest (Backend)
- **Logs**: 

