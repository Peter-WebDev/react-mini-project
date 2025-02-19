// export default async function getMovieData() {
//   const response = await fetch("http://www.omdbapi.com/?apikey=2d529635&");
//   return response.json();
// }

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const mockedMovies: Movie[] = [
  {
    Title: "Star Trek",
    Year: "2009",
    imdbID: "tt0796366",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Star Trek Into Darkness",
    Year: "2013",
    imdbID: "tt1408101",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Star Trek Beyond",
    Year: "2016",
    imdbID: "tt2660888",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2FhNDI1YTYtNWI0OC00ZjYxLWJlYWEtN2ZiZjRmZDY1MWJjXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Star Trek: The Next Generation",
    Year: "1987–1994",
    imdbID: "tt0092455",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmNiNTQ2YzYtODBjYy00ZWMwLTlmNWMtYWE1NTQ2ZTYyZmMwXkEyXkFqcGc@._V1_SX300.jpg",
  },
];
