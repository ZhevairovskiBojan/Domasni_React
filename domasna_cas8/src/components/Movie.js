import { useParams } from 'react-router-dom';
import {NotFound} from './NotFound'; 

export const Movie = ({ movies }) => {
  const { filmId } = useParams();
  const movie = movies.find((m) => m.film.toString() === filmId);

  if (!movie) {
    return <NotFound />;
  }

  return (
    <div>
      <h2>{movie.name}</h2>
      <p>Views: {movie.views}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};





