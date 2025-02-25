import { createContext, PropsWithChildren, useContext, useState } from "react";


const LikedMoviesContext = createContext({} as LikedMovieValue);

export default function LikedMoviesProvider(props: PropsWithChildren) {
    const [likedMovies, setLikedMovies] = useState<string[]>([]);

    const toggleLikedMovie = (id: string) => {
        if (likedMovies.includes(id)) {
            setLikedMovies(likedMovies.filter((movieId) => movieId !== id));
        } else {
            setLikedMovies([...likedMovies, id]);
        }
    };

    return (
        <LikedMoviesContext.Provider value={{ likedMovies, toggleLikedMovie }}>
            {props.children}
        </LikedMoviesContext.Provider>
    );
}

export const useLikedMovies = () => useContext(LikedMoviesContext);