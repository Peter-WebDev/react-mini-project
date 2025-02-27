import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import styled from "styled-components";
import Card from "../components/Card";
import { fetchMoviesByGenre, Movie } from "../data/api";
import { genres } from "../data/genres";

// Styled Components
const GenreContainer = styled(Link)<{ $categoryColor: string }>`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-top: 2rem;
    text-decoration: none;
    border-bottom: 2px solid ${({ $categoryColor }) => $categoryColor};
    padding-bottom: 0.5em;
`;

// Added categoryColor from CardList
const GenreTitle = styled.h2<{ $categoryColor: string }>`  // Add type for categoryColor
  display: inline-block;
  transition: color 0.4s ease-in-out;
  color: ${({ $categoryColor }) => $categoryColor}; // Set color based on prop

  ${GenreContainer}:hover &,
  ${GenreContainer}:focus-visible & {
    color: ${({ $categoryColor }) => `rgba(${$categoryColor.slice(4, -1)}, 0.8)`};
  }
`;

const SeeMoreLink = styled.p`
    cursor: pointer;
    visibility: hidden; // Initially hidden
    transition: color 0.4s ease-in-out;
    color: transparent;
    
    &::after {
        content: "≫";
        width: 0;
        height: 0;
        position: absolute;
        margin-left: 0.5em;
    }

    ${GenreContainer}:hover &,
    ${GenreContainer}:focus-visible & { // Show on GenreTitle hover
        visibility: visible;
        color: rgb(78, 213, 228);
    }
    
`;

// Added from CardList
const CardListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    gap: 1rem;
    margin-top: 1rem;

    &:first-of-type {
        border-top: none;
    }
`;

export default function HomePage() {
    return (
        <>
            <h1>Welcome to Popcorn+</h1>
            {genres.map(genre => (
                <div key={genre.id}>
                    <GenreContainer to={`/movies/${genre.id}`} $categoryColor={genre.color}>  {/* Link wraps title and "See More" */}
                        <GenreTitle $categoryColor={genre.color}>{genre.name}</GenreTitle>
                        <SeeMoreLink>Explore All {genre.name} Movies</SeeMoreLink>
                    </GenreContainer>
                    <CardListWrapper>
                        <GenreMovieList genreId={genre.id} initialNumberOfMovies={10} />
                    </CardListWrapper>
                </div>
            ))}
        </>
    );
}

interface GenreMovieListProps {
    genreId: number;
    initialNumberOfMovies: number;
  }
  
  function GenreMovieList({ genreId, initialNumberOfMovies }: GenreMovieListProps) {
    const { isLoading, error, data } = useQuery({
      queryKey: ["movies", genreId, initialNumberOfMovies],
      queryFn: () => fetchMoviesByGenre(genreId, initialNumberOfMovies),
    });
  
    if (isLoading) return <p>Loading movies....</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || data.length === 0) return <p>No movies found</p>;
  
    return (
      <>
        {data.map((movie: Movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </>
    );
  }