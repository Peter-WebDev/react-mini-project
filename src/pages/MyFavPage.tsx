import styled from "styled-components";
import Card from "../components/Card";
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
            <CardListWrapper>
                {likedMovies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </CardListWrapper>
        </>
    );
}