import { Link } from "react-router";
import styled from "styled-components";
import { Movie } from "../data/api";

const CardWrapper = styled.div`
    width: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }
`;

const CardContent = styled.div`
    padding: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
`;

const CardImg = styled.img`
    max-width: 100%;
    display: block;
`;

const CardTitle = styled.h2`
    font-size: 1.2em;
`;

const CardYear = styled.p`
    font-size: 0.9em;
    opacity: 0.8;
`;

const Placeholder = styled.div`
    width: 100%;
    height: 400px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
`;

interface Props {
    movie: Movie;
}

export default function Card(props: Props) {
    // Conditinal rendering instead to check if there is a poster or not
    return (
        <Link to={`movies/${props.movie.title}/${props.movie.id}`}>
            <CardWrapper>
                {props.movie.poster_path ? (
                    <CardImg src={props.movie.poster_path} alt={props.movie.title || "Poster"} />
                ) : (
                    <Placeholder>
                        No poster available
                    </Placeholder>
                )}
                <CardContent>
                    <CardTitle>Movie title</CardTitle>
                    <CardYear>Year</CardYear>
                </CardContent>
            </CardWrapper>
        </Link>
    )
}