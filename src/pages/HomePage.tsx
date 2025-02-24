import { Link } from "react-router";
import styled from "styled-components";
import CardList from "../components/CardList";

// Styled Components
const GenreContainer = styled(Link)<{ $categoryColor: string }>`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    text-decoration: none;
    border-bottom: 2px solid ${({ $categoryColor }) => $categoryColor};
    padding-bottom: 1rem;
`;

// Added categoryColor from CardList
const GenreTitle = styled.h2<{ $categoryColor: string }>`  // Add type for categoryColor
  display: inline-block;
  transition: color 0.3s ease;
  color: ${({ $categoryColor }) => $categoryColor}; // Set color based on prop

  &:hover {
    color: #FBFBFB;
  }
`;

const SeeMoreLink = styled.span`
    cursor: pointer;
    visibility: hidden; // Initially hidden

    ${GenreTitle}:hover & { // Show on GenreTitle hover
        visibility: visible;
    }
`

// Added from CardList
const CardListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;

    &:first-of-type {
        border-top: none;
    }
`;

// Array with id, genre name and color
const genres = [
    { id: 28, name: 'Action', color: 'rgb(240, 69, 21)'},
    { id: 35, name: 'Comedy', color: 'rgb(255, 255, 0)'},
    { id: 18, name: 'Drama', color: 'rgb(255, 182, 193)'},
    { id: 878, name: 'Science Fiction', color: 'rgb(0, 255, 255)'},
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