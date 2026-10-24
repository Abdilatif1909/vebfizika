import test from "node:test";
import assert from "node:assert/strict";

import { getFileTypeLabel, getResourceActionLink, isPreviewableResource, resolveMediaUrl } from "../src/services/api.js";

test("API-served document links keep their origin and do not add a second media prefix", () => {
  const row = { file: "/api/documents/12/file/?filename=Fizika%20o%27zbek.ppt" };

  assert.equal(resolveMediaUrl(row.file), row.file);
  assert.equal(getFileTypeLabel(row), "PPT");
  const downloadUrl = new URL(getResourceActionLink(row, "download"), "https://example.test");
  assert.equal(downloadUrl.pathname, "/api/documents/12/file/");
  assert.equal(downloadUrl.searchParams.get("filename"), "Fizika o'zbek.ppt");
  assert.equal(downloadUrl.searchParams.get("download"), "1");
  assert.equal(downloadUrl.pathname.includes("/media/media/"), false);
});

test("PDF theory links can preview and request an explicit download", () => {
  const row = { attachment: "/api/theory-lessons/7/file/?filename=ma%27ruza.pdf" };

  assert.equal(getFileTypeLabel(row), "PDF");
  assert.equal(isPreviewableResource(row), true);
  assert.equal(getResourceActionLink(row, "preview"), row.attachment);
  assert.equal(getResourceActionLink(row, "download"), `${row.attachment}&download=1`);
});

test("office documents are not sent to an inline preview", () => {
  assert.equal(isPreviewableResource({ file: "/api/documents/3/file/?filename=slides.pptx" }), false);
  assert.equal(isPreviewableResource({ file: "/api/documents/4/file/?filename=guide.docx" }), false);
});

test("absolute media URLs are preserved", () => {
  const url = "https://veb-fizika.uz/media/fayl%20nomi.pdf";
  assert.equal(resolveMediaUrl(url), url);
});
