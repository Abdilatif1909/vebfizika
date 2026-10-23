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

## Ahost cPanel HTTPS setup

Set these environment variables in the cPanel Python application settings:

- `DJANGO_DEBUG=False` and a private `DJANGO_SECRET_KEY` generated for production.
- `DJANGO_ALLOWED_HOSTS=web-fizika.uz,www.web-fizika.uz`.
- `DJANGO_CSRF_TRUSTED_ORIGINS=https://web-fizika.uz,https://www.web-fizika.uz`.
- `CORS_ALLOWED_ORIGINS` to the exact frontend HTTPS origin or origins.
- `DJANGO_SECURE_SSL_REDIRECT=False` while HTTPS is being verified. Enable it only after the HTTPS route through Passenger has been tested; cPanel may handle the redirect instead.
- `DJANGO_SESSION_COOKIE_SECURE=True` and `DJANGO_CSRF_COOKIE_SECURE=True` once HTTPS works. These default to `True` when `DJANGO_DEBUG=False`.
- `DJANGO_SECURE_HSTS_SECONDS=0` until HTTPS is stable. Then start with a short duration and increase gradually. Keep `DJANGO_SECURE_HSTS_INCLUDE_SUBDOMAINS=False` and `DJANGO_SECURE_HSTS_PRELOAD=False` unless every affected subdomain is ready.
- Keep `DJANGO_TRUST_X_FORWARDED_PROTO=False` unless Ahost confirms its trusted proxy sends `X-Forwarded-Proto: https`; only then set it to `True`.

Before enabling redirect or HSTS, install/enable AutoSSL for both `web-fizika.uz` and `www.web-fizika.uz`. Check each HTTPS URL in a browser for the correct hostname, valid dates, and a trusted certificate chain. Test the HTTPS page, login/session, and a CSRF-protected request. Then enable Django's redirect or cPanel's HTTP-to-HTTPS redirect and verify there is no redirect loop. Enable HSTS only after stable HTTPS operation on both domains.

After changing code or environment variables, restart the Python application with cPanel's **Restart** control (or Ahost's documented Passenger `tmp/restart.txt` procedure). After restart, verify the app, API, login, and static files. Check `curl -I http://web-fizika.uz/` and `curl -I https://web-fizika.uz/`; repeat for `www` if it is separately served. Confirm the expected redirect and, only after enabling HSTS, the `Strict-Transport-Security` response header.
