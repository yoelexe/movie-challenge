import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import { FiCalendar, FiClock, FiHeart, FiStar, FiTag } from "react-icons/fi";
import apiConfig from "../../../api/apiConfig";

export const MoviesDetail = () => {
  const [information, setInformation] = useState([]);
  const [cast, setCast] = useState([]);

  let { moviesId } = useParams();

  const fetchInformation = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=49e8c67adf3bbd50a3fce82777bba341&language=en-US`
    );
    if (result.ok) {
      const data = await result.json();
      /* console.log(data.genres.map((hola) => hola.name).join(" ")) */
      setInformation(data);
    }
  };

  // backslash \ alt + 92

  const fetchCredits = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=49e8c67adf3bbd50a3fce82777bba341`
    )
      .then((response) => response.json())
      .then((data) => {
        const actors = data.cast.map((actor) => actor.name).slice(0, 5);
        setCast(actors);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const url = 'https://api.themoviedb.org/3/movie/movie_id?api_key=49e8c67adf3bbd50a3fce82777bba341'

  useEffect(() => {
    fetchInformation();
  });

  useEffect(() => {
    fetchCredits();
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
      {/*backdrop_path*/}
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

              <div className="flex flex-col my-8">
                <FiCalendar />

                <p>Date</p>
                <span>{information.release_date}</span>
                <FiStar />
                <p>Rating</p>
                <span>{information.vote_average} / 10</span>
                <FiClock />
                <p>Duration</p>
                <span>{toTime(information.runtime)}</span>
              </div>
            </div>
          </section>

          <section className="second-section">
            <h2 className="my-5">{information.title} </h2>
            <h3>The Sypnopsis</h3>
            <p>{information.overview}</p>
            {/* <span>{information.popularity}</span> */}
            <div className="flex items-center my-5">
              <button className="add-to-cart">
                <FiTag className="text-xl	mx-2" />
                <span>Booking</span>
              </button>
              <button className="favorite">
                <FiHeart />
              </button>
            </div>

            {/* <span>{information.genres.map((nombre) => nombre.name).join(" • ")}</span> */}
          </section>

          <section className="thrid-section">
            <h3>The Actors</h3>
            <p>{cast[0]}</p>
            <p>{cast[1]}</p>
            <p>{cast[2]}</p>
            <p>{cast[3]}</p>
            <p>{cast[4]}</p>
          </section>
        </div>
      </div>

      {/* <div className="video-detail"></div> */}
    </div>
  );
};
