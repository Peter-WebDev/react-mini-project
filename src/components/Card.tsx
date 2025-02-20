import { Movie } from "../data/api";

interface Props {
    movie: Movie;
}

export default function Card(prop: Props) {
    return (
        <div>
            <img src="" alt="" />
            <div>
                <h3>Movie title</h3>
                <p>Year</p>
            </div>
        </div>
    )
}