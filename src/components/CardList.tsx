import { useQuery } from "@tanstack/react-query";
import { fetchMoviesByGenre, Movie } from "../data/api";
import Card from "./Card";

interface CardListProps {
    genreId?: number;
    initialNumberOfMovies?: number;
    movies?: Movie[]; // movies props to handle both MovieGenrePage and HomePage
}

export default function CardList({ genreId, initialNumberOfMovies, movies }: CardListProps) {
    // Only run the query iif genreId is provided and movies is not provided
    const { isLoading, error, data } = useQuery({
        queryKey: ['movies', genreId, initialNumberOfMovies],
        queryFn: () => fetchMoviesByGenre(genreId!, initialNumberOfMovies),
        enabled: !!genreId && !movies, // Only enable if genreId exists and movies doesn't
    });

    const moviesToDisplay = movies || data || [];
    
    if (isLoading && !movies) return <p>Loading movies....</p>
    if (error && !movies) return <p>Error: {error.message}</p>
    if (moviesToDisplay.length === 0) return <p>No movies found</p>

    return (
        <>
            {moviesToDisplay.map((movie: Movie) => (
                <Card key={movie.id} movie={movie} />
                ))}
        </>
    );
}