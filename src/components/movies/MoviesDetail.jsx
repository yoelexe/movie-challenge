import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";

export const MoviesDetail = () => {
  const [information, setInformation] = useState([]);
  

  let { moviesId } = useParams();

  const fetchInformation = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=49e8c67adf3bbd50a3fce82777bba341&language=en-US`
    );
    if (result.ok) {
      const data = await result.json();
      setInformation(data);
    }
  };

  /* const fetchCredits = async () => {
    const consult = await fetch(`https://api.themoviedb.org/3/movie/298618?api_key=49e8c67adf3bbd50a3fce82777bba341&append_to_response=credits`);
    if(consult.ok){
      const data = await consult.json()
      console.log(data)
      // setCredits(data);

    }
  } */

  // const url = 'https://api.themoviedb.org/3/movie/movie_id?api_key=49e8c67adf3bbd50a3fce82777bba341'

  useEffect(() => {
    fetchInformation();
    
  });
  // consumir desde los parametros algunas variantes

  // let productSelected = movies.find(movie => movie.id === moviesId)
  // console.log(moviesId)

  return (
    <div>
      {/*backdrop_path*/}

      <div className="back-detail">
        <img
          src={`https://image.tmdb.org/t/p/original/${information.backdrop_path}`}
          alt={information.name}
        />
      </div>

      <div className="container-detail">
        <section className="first-section">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w342/${information.poster_path}`}
              alt={information.name}
            />
          </div>
          <h2>{information.title} </h2>
          
        </section>

        <section className="second-section">
        <p>{information.overview}</p>
          </section>

        <section className="thrid-section">thrid-section</section>
      </div>
    </div>
  );
};
