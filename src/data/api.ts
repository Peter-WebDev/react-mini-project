const TMDB_API_KEY = "d126caf17fbf5893b643772caf992b20";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovieByGenre(genreId: number) {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
  );

  console.log(response);

  const data: TmdbDiscoverResponse = await response.json();
  return data.results;
}

export type Movie = TmdbDiscoverResponse["results"][number];

interface TmdbDiscoverResponse {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string | null;
      genre_ids: number[]; // Array of genre IDs
      id: number;
      original_language: string;
      original_title: string;
      overview: string; // Synopsis
      popularity: number;
      poster_path: string | null;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  ];
  total_pages: number;
  total_results: number;
}
