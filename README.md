# Vebfizika

Django REST Framework backend and React/Vite frontend for the Vebfizika learning platform.

## Requirements

- Python 3.12 (the project is prepared for Ahost.uz's Python 3.12.14 runtime)
- Node.js and npm for building the frontend

Install the Python packages and prepare the database:

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
python manage.py migrate
python manage.py runserver
```

Django reads configuration from process environment variables. It does not load `.env` automatically; set the values in your shell or hosting control panel. For local PowerShell development, for example:

```powershell
$env:DJANGO_DEBUG = "True"
$env:DJANGO_SECRET_KEY = (python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")
$env:DJANGO_ALLOWED_HOSTS = "localhost,127.0.0.1"
```

## Frontend

```powershell
cd frontend
npm ci
npm run build
```

The Vite build is written to `frontend/dist/`. Configure the frontend API base URL in `frontend/src/services/api.js` for the target deployment before building if the API is served from a different origin.

## Tests and checks

```powershell
python manage.py check
python manage.py test
```

## Ahost.uz deployment notes

The Django WSGI entry point is `web_django.wsgi:application`. On the hosting control panel, select Python 3.12, install `requirements.txt`, configure the WSGI entry point, and set these environment variables:

- `DJANGO_DEBUG=False`
- `DJANGO_SECRET_KEY` to a newly generated, private value
- `DJANGO_ALLOWED_HOSTS` to the site's domain names, comma separated
- `CORS_ALLOWED_ORIGINS` to the frontend origin(s), comma separated

Run `python manage.py migrate` and `python manage.py collectstatic` during deployment. `STATIC_ROOT` is `staticfiles/`; configure the host to serve that directory. User uploads are stored under `media/`. Back up and transfer required uploads separately: they are intentionally excluded from Git. The current database uses SQLite; check Ahost.uz's persistent storage and database support before choosing it for production.

The exact Python application setup and static/media routing depend on the Ahost.uz hosting plan. Confirm that the plan supports persistent Django WSGI applications and custom environment variables before following provider-specific panel steps.

## Repository hygiene

`.env`, local databases, logs, virtual environments, frontend dependencies/build output, and uploaded media are excluded by `.gitignore`. `.env.example` contains placeholders only. Do not commit production credentials or user data.
