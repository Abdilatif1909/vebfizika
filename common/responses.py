from django.utils.cache import patch_vary_headers


def mark_private(response):
    response["Cache-Control"] = "private, no-store"
    patch_vary_headers(response, ["Authorization", "Cookie"])
    return response


class PrivateResponseMixin:
    def finalize_response(self, request, response, *args, **kwargs):
        response = super().finalize_response(request, response, *args, **kwargs)
        return mark_private(response)
