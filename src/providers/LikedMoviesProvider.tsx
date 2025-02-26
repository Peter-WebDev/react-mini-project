import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Movie } from "../data/api";

interface LikedMoviesValue {
    likedMovies: Movie[];
    toggleLikedMovie: (movie: Movie) => void;
    isMovieLiked: (movieId: number) => boolean;
}

const LikedMoviesContext = createContext({} as LikedMoviesValue);

export default function LikedMoviesProvider(props: PropsWithChildren) {
    const [likedMovies, setLikedMovies] = useState<Movie[]>([]);

    const toggleLikedMovie = (movie: Movie) => {
        if (isMovieLiked(movie.id)) {
            setLikedMovies(likedMovies.filter((m) => m.id !== movie.id));
        } else {
            setLikedMovies([...likedMovies, movie]);
        }
    };

    const isMovieLiked = (movieId: number) => {
        return likedMovies.some((movie) => movie.id === movieId);
    }

    return (
        <LikedMoviesContext.Provider value={{ likedMovies, toggleLikedMovie, isMovieLiked }}>
            {props.children}
        </LikedMoviesContext.Provider>
    );
}

export const useLikedMovies = () => useContext(LikedMoviesContext);