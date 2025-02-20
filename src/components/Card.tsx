import { Link } from "react-router";
import styled from "styled-components";
import { Movie } from "../data/api";

const CardImg = styled.img`
    max-width: 100%;
    display: block;
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
            <div>
                {props.movie.poster_path ? (
                    <CardImg src={props.movie.poster_path} alt={props.movie.title || "Poster"} />
                ) : (
                    <Placeholder>
                        No poster available
                    </Placeholder>
                )}
                <div>
                    <h3>Movie title</h3>
                    <p>Year</p>
                </div>
            </div>
        </Link>
    )
}