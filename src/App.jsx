// import { useState } from 'react'

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Movies } from "./components/movies/Movies";
import { Error } from "./components/error/Error";
import { Header } from "./components/home/layouts/Header";
import { Footer } from "./components/home/layouts/Footer";
import { Login } from "./components/auth/Login";
import { MoviesDetail } from "./components/movies/detail/MoviesDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:moviesId" element={<MoviesDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
