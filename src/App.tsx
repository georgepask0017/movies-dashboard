import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Box } from "@mui/material";

export interface MovieViewModel {
  title: string;
  poster_path: string;
  overview: string;
}

function App() {
  const apiKey = "8166c415daae225e751570b50553e041";
  const apiBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;

  const imageUrl = "https://image.tmdb.org/t/p/original";

  const request = axios.get(apiBaseUrl);

  const [popularMovies, setPopularMovies] = useState([] as MovieViewModel[]);

  const getMoviePosterUrl = (posterPath: string) => {
    return imageUrl + posterPath;
  };

  useEffect(() => {
    const responseObj = request.then((response: any) => {
      const slicedResults = response.data.results.slice(0, 5);
      setPopularMovies(slicedResults);
    });
  }, []);

  return (
    <Box
      sx={{
        mt: "2",
        width: "30%",
        height: "100%",
        padding: "16px",
        flexWrap: "wrap",
        color: "secondary.main",
        backgroundColor: "text.primary",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      className="App"
    >
      <h1>Top movies</h1>

      {popularMovies.map((item) => {
        return (
          <div className="itemContainer">
            <h6 className="itemname">{item.title}</h6>{" "}
            <img
              src={getMoviePosterUrl(item.poster_path)}
              className={"itemimage"}
            />
            <h6>{item.overview}</h6>
          </div>
        );
      })}
    </Box>
  );
}

export default App;
