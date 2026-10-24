export const VIDEO_SOURCES = [
  {
    id: "grade-9-solutions",
    title: "9-sinf fizika darslik yechimlari to'liq",
    description: "9-sinf fizika darsligi bo'yicha to'liq video yechimlar playlisti.",
    type: "Playlist",
    url: "https://www.youtube.com/playlist?list=PLCKbwy6RHxeiDUtAICSEKMEbCNDnDrPWn",
    action: "Playlistni ko'rish",
  },
  {
    id: "fazliddinov-diyorbek-channel",
    title: "Fazliddinov Diyorbek uz",
    description: "Fazliddinov Diyorbek uz YouTube kanalidagi video darslar.",
    type: "YouTube kanal",
    url: "https://www.youtube.com/@Fazliddinov_Diyorbek_uz_1",
    action: "Kanalga o'tish",
  },
];

export function filterVideoSources(sources, videos, query) {
  const existingUrls = new Set(videos.map((video) => video.url).filter(Boolean));
  const normalizedQuery = query.trim().toLowerCase();

  return sources.filter((source) => {
    if (existingUrls.has(source.url)) {
      return false;
    }
    return !normalizedQuery || [source.title, source.description, source.type].some((value) => value.toLowerCase().includes(normalizedQuery));
  });
}
