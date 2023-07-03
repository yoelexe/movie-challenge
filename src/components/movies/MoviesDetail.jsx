import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import { FiHeart, FiPlay } from "react-icons/fi";
import apiConfig from "../../api/apiConfig";

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
    /* if(consult.ok){
      const data = await consult.json()
      const data01 = data.cast.map((actor) => actor.name)
      const final = data01.slice(0, 5)
      console.log(final)
      // setCredits(data);

    } */
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
              
              <div className="flex flex-col">
              <span>Date: {information.release_date}</span>
            <span>Rating: {information.vote_average}</span>
            <span>Duration: {toTime(information.runtime)}</span>
              </div>
            </div>
          </section>

          

          <section className="second-section">
          <h2>{information.title} </h2>
          <h3>The Sypnopsis</h3>
          <p>{information.overview}</p>
            {/* <span>{information.popularity}</span> */}
            <div>
              <a
                style={{
                  display: "flex",
                  border: "1px solid white",
                  borderRadius: "5px",
                  justifyContent: "space-around",
                }}
                className="w-20 items-center justify-center my-3 cursor-pointer"
              >
                <FiPlay className="my-3" />
                Trailer
              </a>
              <button className="favorite">
                <FiHeart />
              </button>
            </div>
            
            {/* <span>{information.genres.map((nombre) => nombre.name).join(" • ")}</span> */}
          </section>

          <section className="thrid-section">
            <h3>The Actors</h3>
            {/* <p>{cast}<br/></p> */}
            {/* {
            cast.map((actor) => (
              <table key={actor.id}>
                <tr >
                <td>{actor.name[0]}</td>
              </tr>
              
              </table>
            ))
          } */}
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
