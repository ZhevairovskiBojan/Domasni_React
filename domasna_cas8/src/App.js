import './App.css';

import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { HomeMovies } from './components/HomeMovies';
import { Movies } from './components/Movies';
import { Movie } from './components/Movie'; 
import { NewMovie } from './components/newMovie'; 
import { NotFound } from './components/NotFound';

function App() {
  const [movies, setMovies] = useState([
    { film: 1, name: "Crawl", views: "2,900,000", genre: "Horror", rating: 7.2 },
    { film: 2, name: "The Wolf of Wall Street", views: "3,200,000", genre: "Comedy", rating: 8.2 },
    { film: 3, name: "The Black Book", views: "5,600,000", genre: "Drama", rating: 7.5 },
    { film: 4, name: "In Time", views: "5,700,000", genre: "Sci-Fi", rating: 6.7 },
    { film: 5, name: "Spy Kids: Armageddon", views: "6,700,000", genre: "Action", rating: 5.8 },
  ]);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/new">New Movie</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomeMovies />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="/movies/:filmId" element={<Movie movies={movies} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
