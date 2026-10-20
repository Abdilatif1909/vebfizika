from pathlib import Path

from django.utils.text import slugify

from simulations.models import Simulation
from subjects.models import Subject

FOLDER = Path(r"d:\Farrux aka\django-template\media\simulations\files\simulations\imported")
PREFIX = "simulations/files/simulations/imported/"


def run():
    files = sorted([path for path in FOLDER.iterdir() if path.is_file()], key=lambda item: item.name)
    relative_names = {f"{PREFIX}{path.name}" for path in files}

    subject = Subject.objects.filter(title__iexact="Fizika").first()
    if not subject:
        subject = Subject.objects.create(
            title="Fizika",
            slug="fizika",
            description="Simulatsiyalar uchun fizika fani.",
        )

    Simulation.objects.filter(resource_file__startswith=PREFIX).exclude(resource_file__in=relative_names).delete()

    used_slugs = set(Simulation.objects.values_list("slug", flat=True))
    results = []

    for index, path in enumerate(files, start=1):
        title = path.stem.strip()
        resource_name = f"{PREFIX}{path.name}"
        existing = Simulation.objects.filter(resource_file=resource_name).first()

        if existing:
            slug = existing.slug
        else:
            base_slug = slugify(title) or f"simulyatsiya-{index:02d}"
            slug = base_slug[:250]
            counter = 2
            while slug in used_slugs:
                suffix = f"-{counter}"
                slug = f"{base_slug[:max(1, 250 - len(suffix))]}{suffix}"
                counter += 1
            used_slugs.add(slug)

        defaults = {
            "subject": subject,
            "course": None,
            "module": None,
            "title": title,
            "slug": slug,
            "description": f"{title} flesh simulyatsiya fayli.",
            "embed_url": "",
            "launch_url": "",
            "config": {"imported": True, "type": path.suffix.lower()},
            "published": True,
        }

        simulation, created = Simulation.objects.get_or_create(resource_file=resource_name, defaults=defaults)
        changed_fields = []
        for field_name, value in defaults.items():
            if getattr(simulation, field_name) != value:
                setattr(simulation, field_name, value)
                changed_fields.append(field_name)
        if changed_fields:
            simulation.save(update_fields=changed_fields + ["updated_at"])

        results.append({"title": title, "created": created})

    return {
        "count": len(results),
        "titles": [item["title"] for item in results],
    }


if __name__ == "__main__":
    print(run())
