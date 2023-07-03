import { FilterMovie } from "./filter/FilterMovie";
import { SearchMovie } from "./search/SearchMovie";
import "./movies.css";

export const Movies = () => {
  return (
    <>
      <div className="all-movies">
        <h2
          style={{
            fontSize: "50px",
            fontWeight: "600",
            paddingBottom: "10px",
            paddingTop: "20px",
          }}
        >
          Search
        </h2>
        <div className="home_panelList-wrap">
          <div className="home_panel-wrap">
            <FilterMovie />
          </div>

          <div className="home_list-wrap">
            <SearchMovie />
          </div>
        </div>
      </div>
    </>
  );
};
