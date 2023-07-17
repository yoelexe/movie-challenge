import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";

export const Trending = () => {
  // const navigate = useNavigate();

  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=49e8c67adf3bbd50a3fce82777bba341";
    const res = await fetch(url);
    const data = await res.json();
    setTrending(data.results);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <section className="bg-[#262626] py-10 px-14">
      <div className="flex justify-between items-center">
      <h3 className="text-2xl font-medium text-white">Now In Cinemas</h3>
      <Link to={`/movies`} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer">See all</Link>
      </div>
      {/* grid card */}
      <div className=" grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {trending.map((trend) => (
        <div 
        className="bg-black my-3 rounded-2xl shadow-md shadow-gray-200 dark:shadow-black    duration-200 hover:-translate-y-1"
        key={trend.id}>
          <figure className="mx-5 my-5">
          <img
          className="cursor-pointer rounded-2xl"
         
            src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
            alt={trend.name}
          />
          {/*  onClick={() => navigate('movies')} */}
          </figure>
          <figcaption className="flex items-center justify-center flex-col">
            {/* text-cente mb-4 */}
          <p className="text-center  leading-relaxed text-[#F2C36B]">{trend.title}</p>
          <Link className="underline underline-offset-4 text-[#A65C32]" to={`/movies/${trend.id}`}>Ver detalle</Link>
          </figcaption>
          {/*
          Las rutas dinamicas se consumen a traves de un Hook
          */}
          
        </div>
        
      ))}
      </div>
    </section>
  );
};
