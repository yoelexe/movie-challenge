import { SearchMovie } from "./search/SearchMovie";
import styles from "../movies/movies.module.css";

export const Movies = () => {
  return (
    <>
      <div className={styles.allMovies}>
        <h2 className={styles.title}>
          Search
        </h2>

          <div className={styles.searchWrap}>
            <SearchMovie />
          </div>
      </div>
    </>
  );
};
