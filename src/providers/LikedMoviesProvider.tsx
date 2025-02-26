import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Movie } from "../data/api";

interface LikedMoviesValue {
    likedMovies: Movie[];
    toggleLikedMovie: (movie: Movie) => void;
    isMovieLiked: (movieId: number) => boolean;
}

const LikedMoviesContext = createContext({} as LikedMoviesValue);

export default function LikedMoviesProvider(props: PropsWithChildren) {
    const [likedMovies, setLikedMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const storedLikedMovies = localStorage.getItem('likedMovies');
        if (storedLikedMovies) {
            setLikedMovies(JSON.parse(storedLikedMovies));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
    }, [likedMovies]);

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

// eslint-disable-next-line react-refresh/only-export-components
export const useLikedMovies = () => useContext(LikedMoviesContext);