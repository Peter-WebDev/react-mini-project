import { Link } from "react-router";
import { Movie } from "../data/api";

interface Props {
    movie: Movie;
}

export default function Card(props: Props) {
    return (
        <Link to={`movies/${props.movie.title}/${props.movie.id}`}>
            <div>
                <img src="" alt="" />
                <div>
                    <h3>Movie title</h3>
                    <p>Year</p>
                </div>
            </div>
        </Link>
    )
}