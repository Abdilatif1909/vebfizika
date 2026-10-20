from pathlib import Path

from django.utils.text import slugify

from documents.models import Document, DocumentCategory
from subjects.models import Subject

FOLDER = Path(r"d:\Farrux aka\django-template\media\documents\files\documents\imported")
PREFIX = "documents/files/documents/imported/"


def run():
    files = sorted([path for path in FOLDER.iterdir() if path.is_file()], key=lambda item: item.name)
    relative_names = {f"{PREFIX}{path.name}" for path in files}

    category, _ = DocumentCategory.objects.get_or_create(
        name="Dars hujjatlari",
        defaults={
            "slug": "dars-hujjatlari",
            "description": "Media papkasidan sinxronlangan dars hujjatlari.",
        },
    )
    if category.slug != "dars-hujjatlari" or not category.description:
        category.slug = "dars-hujjatlari"
        category.description = category.description or "Media papkasidan sinxronlangan dars hujjatlari."
        category.save(update_fields=["slug", "description", "updated_at"])

    subject = Subject.objects.filter(title__iexact="Fizika").first()

    Document.objects.filter(file__startswith=PREFIX).exclude(file__in=relative_names).delete()

    results = []
    used_slugs = set(Document.objects.values_list("slug", flat=True))

    for index, path in enumerate(files, start=1):
        title = path.stem.strip()
        file_name = f"{PREFIX}{path.name}"
        existing = Document.objects.filter(file=file_name).first()

        if existing:
            slug = existing.slug
        else:
            base_slug = slugify(title) or f"document-{index:02d}"
            slug = base_slug[:240]
            counter = 2
            while slug in used_slugs:
                suffix = f"-{counter}"
                slug = f"{base_slug[:max(1, 240 - len(suffix))]}{suffix}"
                counter += 1
            used_slugs.add(slug)

        defaults = {
            "title": title,
            "slug": slug,
            "description": f"{title} PDF hujjati.",
            "category": category,
            "subject": subject,
            "course": None,
            "module": None,
            "uploaded_by": None,
            "access_level": Document.AccessLevel.PUBLIC,
            "version": "manual-sync",
        }

        document, created = Document.objects.get_or_create(file=file_name, defaults=defaults)
        changed_fields = []
        for field_name, value in defaults.items():
            if getattr(document, field_name) != value:
                setattr(document, field_name, value)
                changed_fields.append(field_name)
        if changed_fields:
            document.save(update_fields=changed_fields + ["updated_at"])

        results.append({"title": title, "created": created, "file": file_name})

    return {
        "count": len(results),
        "titles": [item["title"] for item in results],
    }


if __name__ == "__main__":
    print(run())
