import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import { FiCalendar, FiClock, FiHeart, FiStar, FiTag } from "react-icons/fi";
import apiConfig from "../../../api/apiConfig";

export const MoviesDetail = () => {
  const [information, setInformation] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);

  let { moviesId } = useParams();

  const fetchInformation = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=${apiConfig.apiKey}&language=en-US`
    );
    if (result.ok) {
      const data = await result.json();
      setInformation(data);
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesId}?api_key=${apiConfig.apiKey}&language=en-US`
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchGenres();
  }, [moviesId]);

  // backslash \ alt + 92

  useEffect(() => {
    const fetchActors = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=${apiConfig.apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setActors(data.cast.slice(0, 5));
      }
    };

    fetchActors();
  }, [moviesId]);

  // const url = 'https://api.themoviedb.org/3/movie/movie_id?api_key=49e8c67adf3bbd50a3fce82777bba341'

  useEffect(() => {
    fetchInformation();
  });

  // consumir desde los parametros algunas variantes

  // let productSelected = movies.find(movie => movie.id === moviesId)
  // console.log(moviesId)

  const toTime = (min) => {
    let horas = Math.floor(min / 60);
    min = min % 60;
    return `${horas}h ${min}m`;
  };

  return (
    <div className="bg-black ">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            information.backdrop_path || information.poster_path
          )})`,
        }}
      ></div>
      <div className="movie-content">
        <div className="container-detail">
          <section className="first-section">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    information.poster_path || information.backdrop_path
                  )})`,
                }}
              ></div>

              <div className="itemsofmovie">
                <div>
                  <FiCalendar className="icon" />
                  <p>Date</p>
                  <span>{information.release_date}</span>
                </div>
                <div>
                  <FiStar className="icon" />
                  <p>Rating</p>
                  <span>{information.vote_average} / 10</span>
                </div>
                <div>
                  <FiClock className="icon" />
                  <p>Duration</p>
                  <span>{toTime(information.runtime)}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="second-section">
            <h2 className="my-5">{information.title} </h2>
            <label>The Sypnopsis</label>
            <p>{information.overview}</p>
            <div className="flex items-center my-5">
              <button className="add-to-cart">
                <FiTag className="text-xl	mx-2" />
                <span>Booking</span>
              </button>
              <button className="favorite">
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

          <section className="thrid-section">
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
