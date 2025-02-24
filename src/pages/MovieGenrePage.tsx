import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { fetchMoviesByGenre, Movie } from "../data/api";

export default function MovieGenrePage() {
  const params = useParams();
  const categoryId = params.categoryId;


  if (!categoryId) {
    return <p>Category ID is missing</p>;
  }

  // Small regexpression to check if the categoryId is a valid number
  if (!/^\d+$/.test(categoryId)) {
    return <h1>Invalid Category ID</h1>;
  }

  const genreId = Number(categoryId);

  const [numberOfMoviesToLoad, setNumberOfMoviesToLoad] = useState(15);

  const { isLoading, error, data, refetch } = useQuery<Movie[], Error>({
    queryKey: ['movies', genreId, numberOfMoviesToLoad],
    queryFn: () => fetchMoviesByGenre(genreId, numberOfMoviesToLoad),
  });

  return (
    <>
      <h1>Movies in genre {categoryId}</h1>
    </>
  );
}