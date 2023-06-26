// import { useState } from 'react'

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Movies } from "./components/movies/Movies";
import { Error } from "./components/error/Error";
import { Header } from "./components/home/layouts/Header";
import { Footer } from "./components/home/layouts/Footer";
import { Login } from "./components/auth/Login";
import { StrictMode } from "react";

/* import { useEffect, useState } from "react" */

//TODO: Componente App -> los nombres empiezan con maryuscula
function App() {
  // Estado: variables que guardan los "numeros"
  // Ciclo de vida: Como interactuca con el tiempo el compoenente

  // jsx (js + xml)javascript extended -> el html de mi aplicación
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <StrictMode>
          <Route path="/login" element={<Login />}></Route>
          </StrictMode>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
