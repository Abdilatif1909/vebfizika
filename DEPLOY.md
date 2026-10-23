# Ahost cPanel + Passenger deploy

This project uses `passenger_wsgi.py` at the repository root. It imports
`web_django.settings`, and derives the project directory from its own file
location. In cPanel, select Python 3.12 and point the application to this
project directory and WSGI startup file.

## cPanel environment variables

Set these in the Python application's **Setup Python App** environment section.
The project reads process environment variables; it does not automatically
load a `.env` file. Keep real credentials in cPanel and out of Git.

```text
DJANGO_DEBUG=False
DJANGO_SECRET_KEY=<set-a-private-random-secret-in-cPanel>
DJANGO_ALLOWED_HOSTS=veb-fizika.uz,www.veb-fizika.uz
DJANGO_CSRF_TRUSTED_ORIGINS=https://veb-fizika.uz,https://www.veb-fizika.uz
CORS_ALLOWED_ORIGINS=https://veb-fizika.uz,https://www.veb-fizika.uz
DJANGO_SECURE_SSL_REDIRECT=False
DJANGO_SESSION_COOKIE_SECURE=False
DJANGO_CSRF_COOKIE_SECURE=False
DJANGO_SECURE_HSTS_SECONDS=0
DJANGO_SECURE_HSTS_INCLUDE_SUBDOMAINS=False
DJANGO_SECURE_HSTS_PRELOAD=False
DJANGO_TRUST_X_FORWARDED_PROTO=False
```

`DJANGO_SECRET_KEY` is required even for local development; do not use the
placeholder above as a real value. `DJANGO_DEBUG` defaults to `False`. For
local development, explicitly set `DJANGO_DEBUG=True`, a private development
key, and local hosts in your shell.

## HTTPS activation

1. Enable AutoSSL for both `veb-fizika.uz` and `www.veb-fizika.uz` in cPanel.
2. Open both `https://` URLs and confirm each has a valid certificate for the
   matching host, a trusted chain, and no browser certificate warning.
3. Test the homepage, a static CSS/JS asset, login/session behavior, and a
   CSRF-protected request over HTTPS.
4. Once HTTPS works end to end, set `DJANGO_SESSION_COOKIE_SECURE=True` and
   `DJANGO_CSRF_COOKIE_SECURE=True`. Then enable either cPanel's HTTP-to-HTTPS
   redirect or set `DJANGO_SECURE_SSL_REDIRECT=True` and check for redirect
   loops. Keep both mechanisms only if their interaction has been verified.
5. Enable HSTS only after HTTPS is stable on both domains. Start with a short
   value such as `DJANGO_SECURE_HSTS_SECONDS=300`, then increase it after
   monitoring. Leave include-subdomains and preload off unless every affected
   subdomain is HTTPS-ready.
6. Keep `DJANGO_TRUST_X_FORWARDED_PROTO=False` unless Ahost confirms the
   Passenger-facing trusted proxy sets `X-Forwarded-Proto` safely. Only then
   set it to `True`.

## Update the cPanel application

Before pulling, inspect `git status`. If the server checkout contains local
changes, stop and review them; do not reset or clean the working tree. Run:

```sh
cd /home/vebfizik/vebfizika
git status --short --branch
git pull origin main

source /home/vebfizik/virtualenv/vebfizika/3.12/bin/activate

pip install -r requirements.txt
python manage.py check
python manage.py migrate
python manage.py collectstatic --noinput

mkdir -p tmp && touch tmp/restart.txt
```

The Vite production build is committed under `frontend/dist/`; the server does
not need Node.js or npm. WhiteNoise serves collected files from `STATIC_ROOT`
(`staticfiles/`) through Passenger. User uploads remain in `MEDIA_ROOT`
(`media/`) and need a separate, non-executable Apache/cPanel mapping; they are
not included in Git. Keep a backup of the SQLite database and uploads before
production maintenance.

## Verify after restart

Check that the site, API, admin, and static files respond:

```sh
curl -I https://veb-fizika.uz/
curl -I https://veb-fizika.uz/api/
curl -I https://veb-fizika.uz/admin/
```

Confirm that the asset paths referenced by the homepage (under
`/static/frontend/assets/`) return `200`, and verify login and upload/download
flows. If HSTS is enabled, confirm the response includes
`Strict-Transport-Security`. Check the cPanel Passenger error log if any
request fails.
