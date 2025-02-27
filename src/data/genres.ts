export interface Genre {
  id: number;
  name: string;
  color: string;
}

export const genres: Genre[] = [
  { id: 28, name: "Action", color: "rgb(240, 150, 123)" },
  { id: 35, name: "Comedy", color: "rgb(255, 255, 0)" },
  { id: 18, name: "Drama", color: "rgb(255, 182, 193)" },
  { id: 878, name: "Science Fiction", color: "rgb(130, 185, 155)" },
];

// Helper function to find a genre by ID
export function getGenreById(id: number): Genre | undefined {
  return genres.find((genre) => genre.id === id);
}

// Helper function to get genre color by ID
export function getGenreColorById(id: number): string {
  return getGenreById(id)?.color || "rgb(128, 128, 128)"; // Default to gray if not found
}

// Helper function to get genre name by ID
export function getGenreNameById(id: number): string {
  return getGenreById(id)?.name || "Unknown";
}
