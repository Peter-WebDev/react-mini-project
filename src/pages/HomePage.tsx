import CardList from "../components/CardList";

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Popcorn+</h1>
            <CardList categoryName="Action" genreId={28} numberOfMovies={15} categoryColor="rgb(240, 69, 21)" />
            <CardList categoryName="Comedy" genreId={35} numberOfMovies={15} categoryColor="rgb(255, 255, 0)" />
            <CardList categoryName="Drama" genreId={18} numberOfMovies={15} categoryColor="rgb(255, 182, 193)" />
            <CardList categoryName="Science Fiction" genreId={878} numberOfMovies={15} categoryColor="rgb(0, 255, 255)" />
        </div>
    );
}