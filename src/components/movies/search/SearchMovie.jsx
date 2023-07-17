import { FiSearch } from "react-icons/fi";
import styles from "./searchMovie.module.css";
import apiConfig from "../../../api/apiConfig";
import { useEffect, useState } from "react";
import { CardMovie } from "./CardMovie";
import { MovieList } from "./MovieList";
import { FilterMovie } from "../filter/FilterMovie";

export const SearchMovie = () => {
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

  return (
    <>
      <section className={styles.containerSearch}>
      <label className={styles.title}>Enter movie name</label>
        <div className={styles.search}>
          
          <FiSearch className={styles.iconSearch} />
          <input
            className={styles.searchAll}
            type="text"
            placeholder="Search by..."
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
        <FilterMovie
          apiKey={apiConfig.apiKey}
          onSetFilteredMovie={setFilteredMovie}
        ></FilterMovie>
      </section>
      <section className={styles.containerResult}>
        <div className={styles.moviesResult}>
          {movies.length > 0 && !filteredMovie ? (
            movies.map((movie) => (
              <div key={movie.id} className={styles.article}>
                <CardMovie
                  imgSrc={movie?.poster_path}
                  title={movie?.title}
                ></CardMovie>
              </div>
            ))
          ) : filteredMovie && !movies.length > 0 ? (
            filteredMovie.map((movie) => (
              <div key={movie.id} className={styles.article}>
                <CardMovie
                  imgSrc={movie?.poster_path}
                  title={movie?.title}
                ></CardMovie>
              </div>
            ))
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className={styles.article}>
                <CardMovie
                  imgSrc={movie?.poster_path}
                  title={movie?.title}
                ></CardMovie>
              </div>
            ))
          ) : filteredMovie ? (
            filteredMovie.map((movie) => (
              <div key={movie.id} className={styles.article}>
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
