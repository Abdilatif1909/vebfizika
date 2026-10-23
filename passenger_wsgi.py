import os
import sys

PROJECT_ROOT = "/home/vebfizik/vebfizika"

if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "web_django.settings")

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
