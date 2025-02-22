const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMoviesByGenre(
  genreId: number,
  numberOfMovies: number = 10
): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`,
    {
      headers: {
        Authorization: TMDB_API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error status: ${response.status}`);
  }

  const data: TmdbDiscoverResponse = await response.json();
  const movies = data.results as Movie[];
  return movies.slice(0, numberOfMovies);
}

export type Movie = TmdbDiscoverResponse["results"][number];
export type MovieListProps = TmdbDiscoverResponse;

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
