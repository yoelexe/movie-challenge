// routes -> el apartado donde estaran las rutas individuales
// la ruta se define con Route
import { Routes, Route } from "react-router-dom"
import { Home } from "../components/home/home"
import { Movies } from "../components/movies/Movies"
import { Error } from "../components/home/error/Error"

export const Routering = () => {
  // hacer ruteado a home o a una página de error
  // <Navigate to="/"/>
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/*" element={<Error /> }></Route>
    </Routes>
  )
}