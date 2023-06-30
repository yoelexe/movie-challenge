import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import {
  FiHeart, FiPlay
} from "react-icons/fi";

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
    min = min % 60
    return `${horas}h ${min}m`
  }

  return (
    <div className="principal">
      {/*backdrop_path*/}
      <div className="back-detail">
        <img
          src={`https://image.tmdb.org/t/p/original/${information.backdrop_path}`}
          alt={information.name}
        />
        <div className="segundo" >
          
        
          <div className="container-detail">
            {/* <section className="first-section">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w342/${information.poster_path}`}
              alt={information.name}
            />
          </div>
        </section> */}

            <section className="first-section">
            <h2>{information.title} </h2>
            <p>{information.overview}</p>
            {/* <span>{information.popularity}</span> */}
            <div className="flex justify-start items-center space-x-1">
            <a style={{display: 'flex', border: '1px solid white', borderRadius: '5px',
            justifyContent: 'space-around'}}
            className="w-20 items-center justify-center my-3 cursor-pointer"><FiPlay className="my-3"/>Hola</a>
              <button className="favorite"><FiHeart /></button>
            </div>
            </section>

            <section className="second-section">
            <span>Date: {information.release_date}</span>
              <span>Rating: {information.vote_average}</span>
              <span>Duration: {toTime(information.runtime)}</span>
              {/* <span>{information.genres.map((nombre) => nombre.name).join(" • ")}</span> */}
            
              
            </section>

            <section className="thrid-section">
              <h3>Cast and Crew</h3>
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
      </div>

      {/* <div className="video-detail"></div> */}
    </div>
  );
};
