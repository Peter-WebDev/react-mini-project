import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import Card from "../components/Card";
import { fetchMoviesByGenrePaginated, Movie } from "../data/api";
import { getGenreNameById } from "../data/genres";

const CardListWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    gap: 1rem;
    margin-top: 3rem;
`;

const LoadMoreButton = styled.button`
  font-weight: 600;
  padding: 0.5em 1.75em;
  border: 0;
  border-radius: 0.5em;
  background-color: rgb(78, 213, 228);
  color: rgb(38, 39, 39);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
  display: block;
  margin: 2rem auto 0;

  &:hover,
  &:focus-visible {
    background-color: rgb(214, 220, 226);
    color: rgb(38, 39, 39);
  }

  &:disabled {
    background-color: rgb(204, 204, 204);
    cursor: not-allowed;
  }
`;

export default function MovieGenrePage() {
  const params = useParams();
  const categoryId = params.categoryId;
  const genreId = Number(categoryId); // Converts back numbers since useParams turned it into string
  
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
   } = useInfiniteQuery({
    queryKey: ['genre-page-movies-infinite', genreId],
    queryFn: ({ pageParam = 1 }) => fetchMoviesByGenrePaginated(genreId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: !!categoryId && /^\d+$/.test(categoryId),
    refetchOnWindowFocus: false,
  });

  const handleLoadMore = () => {
    fetchNextPage();
  }

  if (!categoryId) {
    return <p>Category ID is missing</p>;
  }

  // Small regex to check if the categoryId is a valid number
  if (!/^\d+$/.test(categoryId)) {
    return <h1>Invalid Category ID</h1>;
  }

  if (error) {
    console.error("Error fetching movies:", error.message)
    return <p>Error: Could not load movies.</p>
  }

  const allMovies = data?.pages.flatMap((page) => page.movies) || [];

  if (allMovies.length === 0) { // Added check for empty array
    return <p>No movies found for this category.</p>
  }

  // Set up genres in a separate genres.ts file
  const genreName = getGenreNameById(genreId);

  return (
    <>
      <h1>Movies in genre {genreName}</h1>
      <p>Popcorn and Movies, Perfected.</p>
      <CardListWrapper>
        {allMovies.map((movie: Movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </CardListWrapper>
      {hasNextPage && (
        <LoadMoreButton
          onClick={handleLoadMore}
          disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </LoadMoreButton>
      )}
    </>
  );
}