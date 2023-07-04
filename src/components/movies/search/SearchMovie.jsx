import { FiSearch } from "react-icons/fi";
import "./searchMovie.css";
import apiConfig from "../../../api/apiConfig";
import { useEffect, useState } from "react";
// import { CardMovie } from "./CardMovie";

export const SearchMovie = () => {
  // const [query, setQuery] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleInput = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiConfig.apiKey}&query=${searchTerm}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInput();
  },);

  return (
    <>
      <section className="container-search">
        <h2>Search</h2>

        <div className="search">
          <FiSearch className="icon-search" onClick={handleInput} />
          <input
            className="search-all"
            type="text"
            placeholder="Search by..."
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
        {/* <button>
          <FiSliders/>
        </button> */}
        <hr></hr>
      </section>
      <section className="container-result ">
        <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            {/* <p>{movie.overview}</p> */}
            {/* Resto de los detalles de la película */}
          </div>
        ))}
        </div>
      </section>
    </>
  );
};
