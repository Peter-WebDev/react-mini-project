// utils/linkUtils.ts
import { Movie } from "../data/api";

export const generateMovieLink = (movie: Movie) => {
  const slug = movie.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `/movie/${slug}/${movie.id}`;
};
