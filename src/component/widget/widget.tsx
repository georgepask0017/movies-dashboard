import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicModal from "../popup/popup";

export interface MovieViewModel {
  title: string;
  poster_path: string;
  overview: string;
  id: any;
}

export interface CreditsViewModel {
  cast_id: any;
  name: string;
  character: string;
}

function Widget() {
  const apiKey = "8166c415daae225e751570b50553e041";
  const apiBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;

  const imageUrl = "https://image.tmdb.org/t/p/original";

  // const creditsBaseUrl = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`;

  const request = axios.get(apiBaseUrl);

  // const requestCre = axios.get(creditsBaseUrl);

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

  console.log(popularMovies);

  return (
    <Box
      sx={{
        width: "20%",
        height: "25%",
        padding: "16px",
        flexWrap: "wrap",
        color: "secondary.main",
        backgroundColor: "text.primary",
        "&:hover": {
          backgroundColor: "error.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      className="App"
    >
      <h1>Top movies</h1>

      {popularMovies.map((item) => {
        if (item.poster_path === "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg") {
          return (
            <div className="itemContainer">
              <h4 className="itemname">{item.title}</h4>

              <img
                src={getMoviePosterUrl(item.poster_path)}
                className={"itemimage"}
              />
              <div>
                <Button variant="contained" onClick={onClick}>
                  Πάτησε με!
                </Button>
              </div>

              <div>
                <BasicModal
                  title={item.title}
                  overview={item.overview}
                  poster_path={item.poster_path}
                  id={item.id}
                />
              </div>
            </div>
          );
        }
        return (
          <div className="itemContainer">
            <h4 className="itemname">{item.title}</h4>

            <div>
              <BasicModal
                title={item.title}
                overview={item.overview}
                poster_path={item.poster_path}
                id={item.id}
              />
            </div>
          </div>
        );
      })}
    </Box>
  );
}
export default Widget;

// const API_KEY = "8166c415daae225e751570b50553e041"; // Replace with your TMDb API key

// function TopRatedMoviesWithCredits() {
//   const [topRatedMovies, setTopRatedMovies] = useState([]);

//   useEffect(() => {
//     // Fetch top-rated movies
//     axios
//       .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
//       .then((response) => {
//         setTopRatedMovies(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching top-rated movies:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Top Rated Movies with Credits</h1>
//       <ul>
//         {topRatedMovies.map((movie) => (
//           <MovieWithCredits key={movie.id} movie={movie} />
//         ))}
//       </ul>
//     </div>
//   );
// }
