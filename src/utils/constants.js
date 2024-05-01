export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTBhMjZjODY4ZDRiMWZjMDU5YTYxMjU4ZmU2NzdmOCIsInN1YiI6IjY2MjEwYmM2OGE4OGIyMDE4NWNhNDJjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2dRbzhsjJvJp24AHXxvmPRKHNjxrDkLNCiexeTbcg-A",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { indetifier: "en", name: "English" },
  { indetifier: "hi", name: "Hindi" },
  { indetifier: "spanish", name: "Spanish" },
];

export const openAiKey = process.env.REACT_APP_OPENAI_KEY;
