import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchMoviesByGenre, Movie } from "../data/api";
import Card from "./Card";

const CardListSection = styled.section<{ $categoryColor: string }>`
    h2 {
        // Access props within style
        color: ${({ $categoryColor }) => $categoryColor};
    }
    margin-block: 2rem;
`;

const CardListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;

    &:first-of-type {
        border-top: none;
    }
`;

interface MovieListProps {
    categoryName: string;
    genreId: number;
    numberOfMovies?: number;
    categoryColor: string;
}

export default function CardList({ categoryName, genreId, numberOfMovies, categoryColor }: MovieListProps) {
    const { isLoading, error, data } = useQuery({
        queryKey: ['movies', genreId, numberOfMovies],
        queryFn: () => fetchMoviesByGenre(genreId, numberOfMovies),
    });    
    
    if (isLoading) return <p>Loading {categoryName} movies....</p>
    if (error) return <p>Error: {error.message}</p>
    if (!data) return <p>No movies found for {categoryName}</p>

    return (
        <CardListSection $categoryColor={categoryColor}>
            <h2>{categoryName}</h2>
            <CardListWrapper>
                {data.map((movie: Movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </CardListWrapper>
        </CardListSection>
    );
}