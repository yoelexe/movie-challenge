import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../../api/apiConfig";

export const Trending = () => {
  const [trending, setTrending] = useState([]);

  const getTrending = () => {
    return fetch(`${apiConfig.baseUrl}/movie/now_playing?api_key=${apiConfig.apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error HTTP: " + response.status);
        }
        return response.json();
      })
      .then((data) => setTrending(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <section className="bg-[#262626] py-10 px-14">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium text-white">Now In Cinemas</h3>
        <Link
          to={`/movies`}
          className="underline text-white hover:text-[#F2EEEB] visited:text-[#F2C36B] cursor-pointer"
        >
          See all
        </Link>
      </div>
      <div className=" grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {trending.map((trend) => (
          <div
            className="bg-black my-3 rounded-2xl shadow-md shadow-gray-200 dark:shadow-black duration-200 hover:-translate-y-1"
            key={trend.id}
          >
            <figure className="mx-5 my-5">
              <img
                className="rounded-2xl"
                src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                alt={trend.name}
              />
            </figure>
            <figcaption className="flex items-center flex-col px-5">
              <p className="text-center leading-relaxed text-[#F2C36B]">
                {trend.title}
              </p>
              <Link
                className="underline underline-offset-4 text-[#A65C32] py-2"
                to={`/movies/${trend.id}`}
              >
                See detail
              </Link>
            </figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};
