import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import CardList from "../components/CardList";
import { fetchMoviesByGenre, Movie } from "../data/api";

export default function MovieGenrePage() {
  const params = useParams();
  const categoryId = params.categoryId;

  const genreId = Number(categoryId); // Converts back numbers since useParams turned it into string
  
  const [numberOfMoviesToLoad, setNumberOfMoviesToLoad] = useState(15);

  const { isLoading, error, data, refetch } = useQuery<Movie[], Error>({
    queryKey: ['movies', genreId, numberOfMoviesToLoad],
    queryFn: () => fetchMoviesByGenre(genreId, numberOfMoviesToLoad),
  });

  if (!categoryId) {
    return <p>Category ID is missing</p>;
  }

  // Small regexpression to check if the categoryId is a valid number
  if (!/^\d+$/.test(categoryId)) {
    return <h1>Invalid Category ID</h1>;
  }

  const handleLoadMore = () => {
    setNumberOfMoviesToLoad(prev => prev + 15);
    refetch();
  }

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    console.error("Error fetching movies:", error.message)
    return <p>Error: Could not load movies.</p>
  }

  if (!data) {
    return <p>No movies found for this category.</p>
  }

  return (
    <>
      <h1>Movies in genre {categoryId}</h1>
      <CardList movies={data} />
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
}