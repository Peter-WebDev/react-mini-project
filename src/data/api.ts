const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export type Movie = TmdbDiscoverResponse["results"][number];
export type MovieListProps = TmdbDiscoverResponse;

interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

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

export async function fetchMovieDetail(id: string): Promise<MovieDetails> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`,
    {
      headers: {
        Authorization: TMDB_API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error status: ${response.status}`);
  }

  const data: MovieDetails = await response.json();
  return data;
}

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

export async function fetchMoviesByGenrePaginated(
  genreId: number,
  pageParam = 1
): Promise<{ movies: Movie[]; nextPage: number | null }> {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&page=${pageParam}`,
    {
      headers: {
        Authorization: TMDB_API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error status: ${response.status}`);
  }

  const data = await response.json();

  // Determine if there is a next page (more movies) or not
  const nextPage = pageParam < data.total_pages ? pageParam + 1 : null;

  return {
    movies: data.results,
    nextPage,
  };
}
