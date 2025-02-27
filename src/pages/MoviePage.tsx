import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import { fetchMovieDetails } from "../data/api";

//Styled components
const ArticleContainer = styled.article`
    padding: 2rem;
    background-color: rgb(44, 44, 44);
    border-radius: 0.5rem;
`;

const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
    gap: 2rem;
`;

const Placeholder = styled.div`
    width: 100%;
    height: auto;
    background-color: rgb(214, 220, 226);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(38, 39, 39);
`;

const InfoContainer = styled.header`
    display: flex;
    flex-flow: column;
    gap: 1rem;
`;

const Title = styled.h1`
    margin-bottom: 0.5rem;
`;

const TagLine = styled.p`
    font-style: italic;
    margin-bottom: 1rem;
`;

const ReleaseDate = styled.p`
    margin-bottom: 1rem;
`;

const Overview = styled.p`
    margin-bottom: 1rem;
`;

const Ratings = styled.div`
    display: flex;
    gap: 1.5rem;
`;

const Rating = styled.div`
    font-weight: 700;
`;

export default function MoviePage() {
    const { id } = useParams<{ id: string }>();

    const { data: movie, isLoading, error } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetchMovieDetails(id!),
        enabled: !!id,
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.error("Error fetching movie:", error.message)
        return <p>Error: Could not load movies.</p>
    }

    return (
        <>
            <ArticleContainer>
                <MovieContainer>
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width="342" height="513" />
                ) : (
                    <Placeholder>
                        No poster available
                    </Placeholder>
                )}
                    <InfoContainer>
                        <Title></Title>
                        <TagLine></TagLine>
                        <ReleaseDate></ReleaseDate>
                        <Overview></Overview>
                        <Ratings>
                            <Rating></Rating>
                            <Rating></Rating>
                        </Ratings>
                    </InfoContainer>
                </MovieContainer>
            </ArticleContainer>
        </>
    )
}