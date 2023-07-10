import {FiSliders, FiSearch } from "react-icons/fi";
import "./searchMovie.css";
import apiConfig from "../../../api/apiConfig";
import { useEffect, useState } from "react";
import { CardMovie } from "./CardMovie";
import { Modal } from "../modal/Modal";
import { MovieList } from "./MovieList";
import { FilterMovie } from "../filter/FilterMovie";
// import { CardMovie } from "./CardMovie";
// import { CardMovie } from "./CardMovie";

export const SearchMovie = () => {
  // const [query, setQuery] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState(null);

  const handleInput = async () => {
    const url = `${apiConfig.baseUrl}search/movie?api_key=${apiConfig.apiKey}&query=${searchTerm}&include_adult=false&language=en-US&page=1`;

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
  });

  // la función para establecer la pelicula filtrada en el estado
  const handleSetFilteredMovie = (data) => {
    setFilteredMovie(data);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="container-search ">
        {/* <h2>Enter the name of the movie</h2> */}
        {/* fixed bg-white z-10 w-full*/}
        <div className="search ">
          <FiSearch
            className="icon-search"
            onClick={() => handleInput(searchTerm)}
          />
          <input
            className="search-all"
            type="text"
            placeholder="Search by..."
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
        <div>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <FiSliders /> All filters
          </button>
          {openModal && (
            <Modal
              closeModal={setOpenModal}
              onSetFilteredMovie={handleSetFilteredMovie}
            />
          )}
        </div>
        <FilterMovie
          apiKey={apiConfig.apiKey}
          onSetFilteredMovie={setFilteredMovie}
        ></FilterMovie>
        Total items: 10
        <hr></hr>
      </section>
      <section className="container-result px-10 py-10">
        <div className="movies-result">
          {movies.length > 0 && !filteredMovie ? (
            movies.map((movie) => (
              <div key={movie.id} className="article">
                <CardMovie
                  imgSrc={movie?.poster_path}
                  title={movie?.title}
                ></CardMovie>
              </div>
            ))
          ) : filteredMovie && !movies.length > 0 ? (
            filteredMovie.map((movie) => (
              <div key={movie.id} className="article">
                <CardMovie
                  imgSrc={movie?.poster_path}
                  title={movie?.title}
                ></CardMovie>
              </div>
            ))
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="article">
                <CardMovie
                  imgSrc={movie?.poster_path}
                  title={movie?.title}
                ></CardMovie>
              </div>
            ))
          ) : filteredMovie ? (
            filteredMovie.map((movie) => (
              <div key={movie.id} className="article">
                <CardMovie
                  imgSrc={movie?.poster_path}
                  title={movie?.title}
                ></CardMovie>
              </div>
            ))
          ) : (
            <MovieList></MovieList>
          )}
        </div>
      </section>
    </>
  );
};
