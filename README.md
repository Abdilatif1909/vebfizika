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
```

Django reads process environment variables and does not load `.env` automatically. `.env.example` is a reference for values to set in your shell or hosting control panel. For local PowerShell development, for example:

```powershell
$env:DJANGO_DEBUG = "True"
$env:DJANGO_SECRET_KEY = (python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")
$env:DJANGO_ALLOWED_HOSTS = "localhost,127.0.0.1"
python manage.py migrate
python manage.py runserver
```

## Frontend

```powershell
cd frontend
npm ci
npm run build
```

The Vite build is written to `frontend/dist/` and committed for cPanel deployment. Configure the frontend API base URL in `frontend/src/services/api.js` for the target deployment before building if the API is served from a different origin.

## Tests and checks

```powershell
python manage.py check
python manage.py test
```

## Ahost.uz deployment notes

The Passenger WSGI entry point is `passenger_wsgi.py`. On the hosting control panel, select Python 3.12, install `requirements.txt`, and set these environment variables:

- `DJANGO_DEBUG=False`
- `DJANGO_SECRET_KEY` to a newly generated, private value
- `DJANGO_ALLOWED_HOSTS=veb-fizika.uz,www.veb-fizika.uz`
- `DJANGO_CSRF_TRUSTED_ORIGINS=https://veb-fizika.uz,https://www.veb-fizika.uz`
- `CORS_ALLOWED_ORIGINS` to the frontend HTTPS origin(s), comma separated

Run `python manage.py migrate` and `python manage.py collectstatic` during deployment. `STATIC_ROOT` is `staticfiles/`; WhiteNoise serves collected assets through Passenger. User uploads are stored under `media/`; configure a separate Apache/cPanel mapping for that directory and keep uploads non-executable. Back up and transfer required uploads separately: they are intentionally excluded from Git. The current database uses SQLite; check Ahost.uz's persistent storage and database support before choosing it for production.

See [DEPLOY.md](DEPLOY.md) for the cPanel commands and HTTPS verification steps.

## Repository hygiene

`.env`, local databases, logs, virtual environments, frontend dependencies, and uploaded media are excluded by `.gitignore`. The built `frontend/dist/` is intentionally tracked for cPanel deploys. `.env.example` contains placeholders only. Do not commit production credentials or user data.

## Ahost cPanel HTTPS setup

Set these environment variables in the cPanel Python application settings:

- `DJANGO_DEBUG=False` and a private `DJANGO_SECRET_KEY` generated for production.
- `DJANGO_ALLOWED_HOSTS=veb-fizika.uz,www.veb-fizika.uz`.
- `DJANGO_CSRF_TRUSTED_ORIGINS=https://veb-fizika.uz,https://www.veb-fizika.uz`.
- `CORS_ALLOWED_ORIGINS` to the exact frontend HTTPS origin or origins.
- `DJANGO_SECURE_SSL_REDIRECT=False` while HTTPS is being verified. Enable it only after the HTTPS route through Passenger has been tested; cPanel may handle the redirect instead.
- `DJANGO_SESSION_COOKIE_SECURE=True` and `DJANGO_CSRF_COOKIE_SECURE=True` once HTTPS works. These default to `True` when `DJANGO_DEBUG=False`.
- `DJANGO_SECURE_HSTS_SECONDS=0` until HTTPS is stable. Then start with a short duration and increase gradually. Keep `DJANGO_SECURE_HSTS_INCLUDE_SUBDOMAINS=False` and `DJANGO_SECURE_HSTS_PRELOAD=False` unless every affected subdomain is ready.
- Keep `DJANGO_TRUST_X_FORWARDED_PROTO=False` unless Ahost confirms its trusted proxy sends `X-Forwarded-Proto: https`; only then set it to `True`.

Before enabling redirect or HSTS, install/enable AutoSSL for both `veb-fizika.uz` and `www.veb-fizika.uz`. Check each HTTPS URL in a browser for the correct hostname, valid dates, and a trusted certificate chain. Test the HTTPS page, login/session, and a CSRF-protected request. Then enable Django's redirect or cPanel's HTTP-to-HTTPS redirect and verify there is no redirect loop. Enable HSTS only after stable HTTPS operation on both domains.

After changing code or environment variables, restart the Python application with cPanel's **Restart** control (or Passenger's `tmp/restart.txt` procedure). After restart, verify the app, API, login, and static files. Check `curl -I http://veb-fizika.uz/` and `curl -I https://veb-fizika.uz/`; repeat for `www` if it is separately served. Confirm the expected redirect and, only after enabling HSTS, the `Strict-Transport-Security` response header.

### React/Vite production build on cPanel

The Django root URL serves the Vite-built SPA, while `/api/` and `/admin/` remain Django routes. Production JavaScript and CSS use `/static/frontend/`; `collectstatic` copies `frontend/dist/` into `staticfiles/frontend/`. The production build is committed, so Node.js/npm are not needed on the server. Rebuild the frontend locally when its source changes:

```sh
cd frontend
npm ci
npm run build
cd ..
git add -f frontend/dist
```

The frontend API default is same-origin `/api`. To use the Vite proxy in local development, set `DJANGO_DEV_SERVER` to your Django development server origin before `npm run dev` (for example, `http://127.0.0.1:8000`).
