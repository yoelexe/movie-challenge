import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./movieDetail.module.css";
import { FiCalendar, FiClock, FiHeart, FiStar, FiTag } from "react-icons/fi";
import apiConfig from "../../../api/apiConfig";

export const MoviesDetail = () => {
  const [information, setInformation] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);

  let { moviesId } = useParams();

  const fetchInformation = () => {
    return fetch(`${apiConfig.baseUrl}/movie/${moviesId}?api_key=${apiConfig.apiKey}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status);
      }
      return response.json();
    })
    .then((data) => setInformation(data))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchInformation();
  });

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        `${apiConfig.baseUrl}/movie/${moviesId}?api_key=${apiConfig.apiKey}&language=en-US`
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchGenres();
  }, [moviesId]);

  useEffect(() => {
    const fetchActors = async () => {
      const response = await fetch(
        `${apiConfig.baseUrl}/movie/${moviesId}/credits?api_key=${apiConfig.apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setActors(data.cast.slice(0, 5));
      }
    };

    fetchActors();
  }, [moviesId]);

  const toTime = (min) => {
    let horas = Math.floor(min / 60);
    min = min % 60;
    return `${horas}h ${min}m`;
  };

  return (
    <div className="bg-black ">
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            information.backdrop_path || information.poster_path
          )})`,
        }}
      ></div>
      <div className={styles.movieContent}>
        <div className={styles.containerDetail}>
          <section className={styles.firstSection}>
            <div className={styles.moviePoster}>
              <div
                className={styles.movieImg}
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    information.poster_path || information.backdrop_path
                  )})`,
                }}
              ></div>

              <div className={styles.itemsofmovie}>
                <div>
                  <FiCalendar className={styles.icon} />
                  <p>Date</p>
                  <span>{information.release_date}</span>
                </div>
                <div>
                  <FiStar className={styles.icon}/>
                  <p>Rating</p>
                  <span>{information.vote_average} / 10</span>
                </div>
                <div>
                  <FiClock className={styles.icon} />
                  <p>Duration</p>
                  <span>{toTime(information.runtime)}</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.secondSection}>
            <h2 className="my-5">{information.title} </h2>
            <label>The Sypnopsis</label>
            <p>{information.overview}</p>
            <div className="flex items-center my-5">
              <button className={styles.addToCart}>
                <FiTag className="text-xl	mx-2" />
                <span>Booking</span>
              </button>
              <button className={styles.favorite}>
                <FiHeart />
              </button>
            </div>
            <label>Genre</label>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </section>

          <section className={styles.thridSection}>
            <h3>The Actors</h3>
            <ol>
              {actors.map((actor) => (
                <li key={actor.id}>{actor.name}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};
