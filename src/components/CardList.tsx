import { useQuery } from "@tanstack/react-query";
import { fetchMoviesByGenre, Movie } from "../data/api";
import Card from "./Card";

interface CardListProps {
    genreId?: number;
    initialNumberOfMovies?: number;
    movies?: Movie[]; // movies props to handle both MovieGenrePage and HomePage
}

export default function CardList({ genreId, initialNumberOfMovies, movies }: CardListProps) {
    console.log("CardList movies:", movies); // Add this line HERE
    const { isLoading, error, data } = useQuery({
        queryKey: ['movies', genreId, initialNumberOfMovies],
        queryFn: genreId ? () => fetchMoviesByGenre(genreId, initialNumberOfMovies) : async () => [],
        enabled: !!genreId,
    });

    const moviesToDisplay = movies ?? data ?? [];
    console.log("moviesToDisplay:", moviesToDisplay); // Add this line HERE
    
    if (isLoading) return <p>Loading movies....</p>
    if (error) return <p>Error: {error.message}</p>
    if (!data) return <p>No movies found</p>

    return (
        <>
            {moviesToDisplay.map((movie: Movie) => (
                <Card key={movie.id} movie={movie} />
                ))}
        </>
    );
}