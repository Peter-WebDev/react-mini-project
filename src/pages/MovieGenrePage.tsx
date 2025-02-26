import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import CardList from "../components/CardList";
import { fetchMoviesByGenre, Movie } from "../data/api";

const CardListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    gap: 1rem;
    margin-top: 1rem;

    &:first-of-type {
        border-top: none;
    }
`;

export default function MovieGenrePage() {
  const params = useParams();
  const categoryId = params.categoryId;

  const genreId = Number(categoryId); // Converts back numbers since useParams turned it into string
  
  const [numberOfMoviesToLoad, setNumberOfMoviesToLoad] = useState(15);

  const { isLoading, error, data, refetch } = useQuery<Movie[]>({
    queryKey: ['genre-page-movies', genreId, numberOfMoviesToLoad],
    queryFn: () => fetchMoviesByGenre(genreId, numberOfMoviesToLoad),
    enabled: !!categoryId && /^\d+$/.test(categoryId)
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

  if (!data || data.length === 0) { // Added check for empty array
    return <p>No movies found for this category.</p>
  }

  return (
    <>
      <h1>Movies in genre {categoryId}</h1>
      {console.log("Data before render:", data)} {/* Add this line HERE */}
      <CardListWrapper>
        {data && data.length > 0 && <CardList movies={data} />} {/* Modify this line */}
      </CardListWrapper>
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
}