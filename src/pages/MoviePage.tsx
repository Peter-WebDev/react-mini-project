import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../data/api";

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
                    <PosterContainer>
                        <PosterImage />
                    </PosterContainer>
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