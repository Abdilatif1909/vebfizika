from pathlib import Path

from django.utils.text import slugify

from subjects.models import Subject
from theory.models import TheoryLesson, TheoryTopic

FOLDER = Path(r"d:\Farrux aka\django-template\media\theory\attachments\theory\imported")
PREFIX = "theory/attachments/theory/imported/"


def run():
    files = sorted(
        [path for path in FOLDER.iterdir() if path.is_file() and path.suffix.lower() == ".pdf"],
        key=lambda item: item.name,
    )
    relative_names = {f"{PREFIX}{path.name}" for path in files}

    subject = Subject.objects.filter(title__iexact="Fizika").first()
    if not subject:
        subject = Subject.objects.create(
            title="Fizika",
            slug="fizika",
            description="Nazariy bilimlar uchun fizika fani.",
        )

    topic, _ = TheoryTopic.objects.get_or_create(
        slug="nazariy-bilimlar",
        defaults={
            "subject": subject,
            "course": None,
            "title": "Nazariy bilimlar",
            "summary": "Nazariy bilimlar bo'limi uchun PDF materiallar.",
            "order": 1,
        },
    )
    topic_changed = False
    if topic.subject_id != subject.id:
        topic.subject = subject
        topic_changed = True
    if topic.title != "Nazariy bilimlar":
        topic.title = "Nazariy bilimlar"
        topic_changed = True
    if not topic.summary:
        topic.summary = "Nazariy bilimlar bo'limi uchun PDF materiallar."
        topic_changed = True
    if topic_changed:
        topic.save(update_fields=["subject", "title", "summary", "updated_at"])

    TheoryLesson.objects.filter(attachment__startswith=PREFIX).exclude(attachment__in=relative_names).delete()

    used_slugs = set(TheoryLesson.objects.values_list("slug", flat=True))
    results = []

    for index, path in enumerate(files, start=1):
        title = path.stem.strip()
        attachment_name = f"{PREFIX}{path.name}"
        existing = TheoryLesson.objects.filter(attachment=attachment_name).first()

        if existing:
            slug = existing.slug
        else:
            base_slug = slugify(title) or f"nazariy-bilimlar-{index:02d}"
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
            "topic": topic,
            "module": None,
            "author": None,
            "title": title,
            "slug": slug,
            "content": f"{title} nomli nazariy PDF material.",
            "estimated_minutes": 10,
            "order": index,
            "published": True,
        }

        lesson, created = TheoryLesson.objects.get_or_create(attachment=attachment_name, defaults=defaults)
        changed_fields = []
        for field_name, value in defaults.items():
            if getattr(lesson, field_name) != value:
                setattr(lesson, field_name, value)
                changed_fields.append(field_name)
        if changed_fields:
            lesson.save(update_fields=changed_fields + ["updated_at"])

        results.append({"title": title, "created": created})

    return {
        "count": len(results),
        "titles": [item["title"] for item in results],
    }


if __name__ == "__main__":
    print(run())
