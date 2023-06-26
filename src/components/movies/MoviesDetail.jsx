import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MoviesDetail = () => {

  const [information, setInformation] = useState([])

  let { moviesId } = useParams()

  const fetchInformation = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=49e8c67adf3bbd50a3fce82777bba341&language=en-US`)
    if(result.ok){
      const data = await result.json()
      setInformation(data)
    }
  }

  // const url = 'https://api.themoviedb.org/3/movie/movie_id?api_key=49e8c67adf3bbd50a3fce82777bba341'

  useEffect(() => {
    fetchInformation()
  })
  
  // consumir desde los parametros algunas variantes
  

  // let productSelected = movies.find(movie => movie.id === moviesId)
  // console.log(moviesId)

  return (
    <div>
      <h2>Nombre de la peli: {information.title} </h2>
      {/*backdrop_path*/}
      <img
          className="cursor-pointer rounded-2xl"
         
            src={`https://image.tmdb.org/t/p/w500/${information.backdrop_path}`}
            alt={information.name}
          />
    </div>
  )
}
