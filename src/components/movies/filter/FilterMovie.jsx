/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import apiConfig from "../../../api/apiConfig";

export const FilterMovie = ({onSetFilteredMovie}) => {
  
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `${apiConfig.baseUrl}/discover/movie?with_genres=${genre}&api_key=${apiConfig.apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        onSetFilteredMovie(data.results);
      } catch (err) {
        console.log("Error", err)
      }
    }
    // 3000 -> 3 segundos
    const timer = setTimeout(() => fetchMovies(), 3000)

    return () => clearTimeout(timer);
  }, [genre, onSetFilteredMovie])


  return (
    <div>

      <section className="flex flex-col	">
      <label>Choose by gender: </label>
      <select value={genre} onChange={(e) => setGenre(e.target.value)} className="rounded shadow-lg bg-slate-200">
        <option value="">
          All genres
        </option>
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
