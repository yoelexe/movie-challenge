import { FiSearch, FiSliders } from "react-icons/fi";
import "./searchMovie.css";
import apiConfig from "../../../api/apiConfig";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const SearchMovie = ({ value, changeInput }) => {

  const [query] = useState('');

  const [setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `${apiConfig.baseUrl}search/movie?api_key=${apiConfig.apiKey}&query=${query}&page1&include_adult=false`

    try{
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <section className="container-search">
        <h2>Search</h2>
        
        <div className="search">
          <FiSearch className="icon-search" />
          <input
            className="search-all"
            type="search"
            placeholder="Search by..."
            value={value}
            onChange={changeInput}
          ></input>
        </div>
        <button>
          <FiSliders onClick={searchMovies}/>
        </button>
        <hr></hr>
      </section>
      <section className="container-result">

      </section>
    </>
  );
}
