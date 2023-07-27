import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export interface MovieViewModel {
  title: string;
  poster_path: string;
}

function App() {
  const apiKey = "8166c415daae225e751570b50553e041"
  const apiBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  const imageUrl = "https://image.tmdb.org/t/p/original";

  const request = axios.get(apiBaseUrl);

  const [popularMovie, setPopularMovie] = useState({} as MovieViewModel);

  const getMoviePosterUrl = (posterPath: string) => {
    return imageUrl + posterPath;
  }

  useEffect(() => {
    const responseObj = request.then((response: any) => {
      const results = response.data.results[0];

      setPopularMovie(results);

      console.log(results);
    })
  }, [])

  return (
    <div className="App">
      <h1>Top movie</h1>
      <h2> {popularMovie.title} </h2>
      <img alt="text" src={getMoviePosterUrl(popularMovie.poster_path)} />
    </div>
  );
}

export default App;
