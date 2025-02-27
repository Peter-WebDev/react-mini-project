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
    /* margin-bottom: 0.5rem; */
`;

const TagLine = styled.q`
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

const RatingNumber = styled.span`
    color: rgb(16, 196, 0);
`;

const VoteNumber = styled.span`
    color: rgb(214, 161, 14);
`;

const MoviePoster = styled.img`
    border-radius: 0.5rem;
`;

const Url = styled.a`
    text-decoration: none;
    color: rgb(78, 213, 228);

    &:hover,
    &:focus {
        text-decoration: underline;
    }
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

    // Fix for new Date since new Date can't be (undefined) or (null)
    const releaseDate: Date = new Date(movie?.release_date ?? "");

    if (isNaN(releaseDate.getTime())) {
        console.log("invalid Date");
    } else {
        console.log(releaseDate);
    }

    return (
        <>
            <ArticleContainer>
                <MovieContainer>
                {movie?.poster_path ? (
                    <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width="500" height="750" />
                ) : (
                    <Placeholder>
                        No poster available
                    </Placeholder>
                )}
                    <InfoContainer>
                        <Title>{movie?.title}</Title>
                        {movie?.tagline ? (
                            <TagLine>{movie?.tagline}</TagLine>
                        ) : (
                            <i>No tagline available</i>
                        )}
                        <Overview>{movie?.overview}</Overview>
                        <ReleaseDate>Release Date: {new Date(releaseDate).toLocaleDateString()}</ReleaseDate>
                        <Ratings>
                            <Rating>Rating: <RatingNumber>{movie?.vote_average.toFixed(1)}</RatingNumber>/10</Rating>
                            <Rating>Votes: <VoteNumber>{movie?.vote_count.toLocaleString()}</VoteNumber></Rating>
                        </Ratings>
                        {movie?.homepage && (
                            <Url href={movie.homepage} target="_blank" rel="noopener noreferrer">
                                Vistit the Movie's Homepage
                            </Url>
                        )} {!movie?.homepage && <i>Homepage not available</i>}
                    </InfoContainer>
                </MovieContainer>
            </ArticleContainer>
        </>
    )
}