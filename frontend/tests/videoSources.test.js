import test from "node:test";
import assert from "node:assert/strict";

import { filterVideoSources, VIDEO_SOURCES } from "../src/pages/videos/videoSources.js";

test("YouTube playlist and channel sources have the requested safe external URLs", () => {
  assert.equal(VIDEO_SOURCES.length, 2);
  assert.deepEqual(VIDEO_SOURCES.map(({ title, action }) => [title, action]), [
    ["9-sinf fizika darslik yechimlari to'liq", "Playlistni ko'rish"],
    ["Fazliddinov Diyorbek uz", "Kanalga o'tish"],
  ]);
  assert.equal(VIDEO_SOURCES[0].url, "https://www.youtube.com/playlist?list=PLCKbwy6RHxeiDUtAICSEKMEbCNDnDrPWn");
  assert.equal(VIDEO_SOURCES[1].url, "https://www.youtube.com/@Fazliddinov_Diyorbek_uz_1");
  assert.ok(VIDEO_SOURCES.every(({ url }) => new URL(url).hostname === "www.youtube.com"));
});

test("source list filters by search and avoids an already listed URL", () => {
  const [playlist, channel] = VIDEO_SOURCES;

  assert.deepEqual(filterVideoSources(VIDEO_SOURCES, [], "kanal"), [channel]);
  assert.deepEqual(filterVideoSources(VIDEO_SOURCES, [{ url: playlist.url }], ""), [channel]);
});
