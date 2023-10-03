import { Link } from 'react-router-dom';

export const Movies = ({ movies }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.film}>
            <Link to={`/movies/${movie.film}`}>
              {movie.name} ({movie.views})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};



