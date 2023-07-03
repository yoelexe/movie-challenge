import { FiSearch, FiSliders } from "react-icons/fi";
import "./searchMovie.css";

// eslint-disable-next-line react/prop-types
export const SearchMovie = ({ value, changeInput }) => {
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
          <FiSliders />
        </button>
      </section>
      <section className="container-result">

      </section>
    </>
  );
}
