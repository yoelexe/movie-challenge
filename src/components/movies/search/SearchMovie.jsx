import { FiBookmark, FiHeart, FiSearch } from "react-icons/fi";
import "./searchMovie.css";
import apiConfig from "../../../api/apiConfig";
import { useEffect, useState } from "react";
import { CardMovie } from "./CardMovie";
// import { Modal } from "./Modal";
// import { CardMovie } from "./CardMovie";
// import { CardMovie } from "./CardMovie";

export const SearchMovie = () => {
  // const [query, setQuery] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleInput = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiConfig.apiKey}&query=${searchTerm}&include_adult=false&language=en-US&page=1`;

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

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="container-search">
        {/* <h2>Enter the name of the movie</h2> */}
        {/* fixed bg-white z-10 w-full*/}
        <div className="search ">
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
         <div>
         <button onClick={() => setOpenModal(!openModal)}>
          {/* <FiSliders /> */}
        </button>
        {/* <Modal>
          state={openModal}
          changeState={setOpenModal}
        </Modal> */}
         </div>
        <hr></hr>
      </section>
      <section className="container-result px-10 py-10">
        <div className="movies-result">
          {movies.map((movie) => (
            <div key={movie.id} className="article">
              <CardMovie imgSrc={movie?.poster_path} >
              <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
              {/* <p>{movie.overview}</p> */}
              <div className="space-x-4 mt-4">
                <button className="btn
                bg-[#050708]
                rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center">
                  <FiHeart />
                </button>

                <button className="btn bg-[#050708]
                rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center">
                  <FiBookmark />
                </button>
              </div>
              </CardMovie>
              
              {/* <p>{movie.overview}</p> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
