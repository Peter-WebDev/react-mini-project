import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchMoviesByGenre, Movie } from "../data/api";
import Card from "./Card";

const CardListWrapper = styled.div<{ $categoryColor: string }>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    gap: 1rem;
    border-top: 1px solid #ccc;
    margin-bottom: 1rem;

    &:first-of-type {
        border-top: none;
    }

    h2 {
        padding-bottom: 1rem;
        // Access props within style
        color: ${({ $categoryColor }) => $categoryColor};
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
        <CardListWrapper $categoryColor={categoryColor}>
            <h2>{categoryName}</h2>
            {data.map((movie: Movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </CardListWrapper>
    );
}