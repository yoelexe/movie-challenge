/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import apiConfig from "../../../api/apiConfig";

export const FilterMovie = ({onSetFilteredMovie}) => {

  // const [movies, setMovies] = useState([]);
  /* const [sortBy, setSortBy] = useState("popularity.desc") */
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `${apiConfig.baseUrl}/discover/movie?with_genres=${genre}&api_key=${apiConfig.apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        onSetFilteredMovie(data.results);
      } catch (err) {
        console.log("Error", err)
      }
    }

    fetchMovies();
  }, [genre, onSetFilteredMovie])


  return (
    <div>
      {/* category */}
      {/* <h3>Section Filter</h3> */}

      <section className="flex flex-col	">
      <label>Escoger por género:</label>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="" selected disabled hidden>
          All genres
        </option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
      </select>
      </section>
      <ul>
        {/*
          movies.map((movie) => {
            <li key={movie.id}>{movie.title}</li>
          })
          */
        }
      </ul>
    </div>
  );
};
