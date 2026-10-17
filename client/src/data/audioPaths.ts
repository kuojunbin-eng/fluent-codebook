const basePath = import.meta.env.BASE_URL;

export const audioPaths: Record<string, string> = {
  ...Object.fromEntries(
    ["es", "fr"].flatMap((language) =>
      Array.from({ length: 100 }, (_, index) => [
        `${language}_${String(index).padStart(2, "0")}`,
        `${basePath}audio/${language}_${String(index).padStart(2, "0")}.mp3`,
      ]),
    ),
  ),
};
