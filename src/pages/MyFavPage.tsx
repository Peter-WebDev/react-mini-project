import styled from "styled-components";
import Card from "../components/Card";
import { Movie } from "../data/api";
import { useLikedMovies } from "../providers/LikedMoviesProvider";

// Same grid-setup as HomePage and MovieGenrePage
const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export default function MyFavPage() {
    const { likedMovies } = useLikedMovies();

    return (
        <>
            <h1>My list of favourite movies</h1>
            <p>Cinema experience at home, with perfect Popcorn+.</p>
            <CardListWrapper>
                {likedMovies.map((movie: Movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </CardListWrapper>
        </>
    );
}