import re
from pathlib import Path

from django.core.management import call_command
from django.test import SimpleTestCase, override_settings


BASE_DIR = Path(__file__).resolve().parent.parent


class ProductionStaticFilesTests(SimpleTestCase):
    def test_vite_assets_are_collected_and_served(self):
        index_html = (BASE_DIR / "frontend" / "dist" / "index.html").read_text(
            encoding="utf-8"
        )
        asset_urls = re.findall(
            r'(?:src|href)="(/static/frontend/assets/[^\"]+)"', index_html
        )
        self.assertTrue(asset_urls, "No Vite asset URLs found in frontend/dist/index.html")

        for asset_url in asset_urls:
            relative_path = asset_url.removeprefix("/static/")
            self.assertTrue(
                (BASE_DIR / "frontend" / "dist" / relative_path.removeprefix("frontend/")).is_file(),
                f"Vite asset referenced by index.html is missing: {asset_url}",
            )

        with override_settings(STATIC_ROOT=BASE_DIR / "staticfiles", DEBUG=False):
            call_command("collectstatic", interactive=False, verbosity=0)
            for asset_url in asset_urls:
                with self.subTest(asset_url=asset_url):
                    response = self.client.get(asset_url, HTTP_HOST="veb-fizika.uz")
                    self.assertEqual(response.status_code, 200)
