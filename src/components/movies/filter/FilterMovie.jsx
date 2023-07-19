/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import apiConfig from "../../../api/apiConfig";

export const FilterMovie = ({ onSetFilteredMovie }) => {
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const timer = setTimeout(()=>{
      const fetchMovies = async () => {
        const url = `${apiConfig.baseUrl}/discover/movie?with_genres=${genre}&api_key=${apiConfig.apiKey}`;
  
        try {
          const response = await fetch(url);
          const data = await response.json();
          onSetFilteredMovie(data.results);
        } catch (err) {
          console.log("Error", err);
        }
      };
  
      fetchMovies();
    }, 500)
    return ()=> clearTimeout(timer)
  }, [genre, onSetFilteredMovie]);

  return (
    <div>
      <section className="flex flex-col	text-white">
        <label className="my-3">Choose by gender </label>
        <select
        role="select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="rounded-md shadow-lg text-black w-72 px-3 py-2"
        >
          <option value="">All genres</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
        </select>
      </section>
    </div>
  );
};
