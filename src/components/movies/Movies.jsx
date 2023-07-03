import { FiSearch, FiSliders } from "react-icons/fi";
import "./movieAll.css";

export const Movies = () => {
  return (
    <>
      <div className="container-all">
        <h2>Hola</h2>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <div className="search">
          <FiSearch className="icon-search" />
          <input
            className="search-all"
            type="search"
            placeholder="Search..."
          ></input>
        </div>
        <button>
          <FiSliders />
        </button>
      </div>
    </>
  );
};
