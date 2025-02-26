import { Link } from "react-router";
import styled from "styled-components";
import { Movie } from "../data/api";

const CardWrapper = styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        transform: perspective(700px)
		scale(1.05)
		translate(0px,-5px);
	transform-origin: center center;
    }
`;

const CardContent = styled.div`
    padding: 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 10%,
        rgba(0, 0, 0, 0.9) 50%,
        rgba(0, 0, 0, 1) 100%);    
    color: white;
`;

const CardTitle = styled.h3`
    font-size: 1.2em;
`;

const CardYear = styled.p`
    font-size: 0.9em;
`;

const Placeholder = styled.div`
    width: 100%;
    height: auto;
    background-color: #d6dce2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #262727;
`;

interface Props {
    movie: Movie;
}

// Function to generate a slug from the title to lowercase and replace/remove
const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

export default function Card(props: Props) {

    const slug = generateSlug(props.movie.title); // Calling the slug function

    // Conditinal rendering instead to check if there is a poster or not
    return (
        <CardWrapper>
            <Link to={`movies/${slug}/${props.movie.id}`}>
                {props.movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title || "Poster"} />
                ) : (
                    <Placeholder>
                        No poster available
                    </Placeholder>
                )}
                <CardContent>
                    <CardTitle>{props.movie.title}</CardTitle>
                    <CardYear>{props.movie.release_date.slice(0, 4)}</CardYear> {/* Display only year from release date */}
                </CardContent>
            </Link>

            <LikeButton>
                <HeartIcon viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </HeartIcon>
            </LikeButton>
        </CardWrapper>
    )
}