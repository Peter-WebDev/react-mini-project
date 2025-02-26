import { Link } from "react-router";
import styled from "styled-components";
import CardList from "../components/CardList";

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

// Array with id, genre name and color
const genres = [
    { id: 28, name: 'Action', color: 'rgb(240, 150, 123)'},
    { id: 35, name: 'Comedy', color: 'rgb(255, 255, 0)'},
    { id: 18, name: 'Drama', color: 'rgb(255, 182, 193)'},
    { id: 878, name: 'Science Fiction', color: 'rgb(130, 185, 155)'},
];


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
                        <CardList genreId={genre.id} initialNumberOfMovies={10} />
                    </CardListWrapper>
                </div>
            ))}
        </>
    );
}