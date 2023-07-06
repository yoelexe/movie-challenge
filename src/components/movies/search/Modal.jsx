// import { FiX } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FilterMovie } from "../filter/FilterMovie";
import "./modal.css";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
export const Modal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="overlay ">
        <div className="contenedor-modal">
          <div className="encabezado-modal">
            <h2>Contenido</h2>
          </div>
          <button className="btn-cerrar" onClick={() => {
            closeModal(false)
          }}><FiX/></button>
          <FilterMovie></FilterMovie>
        </div>
      </div>
    </>
  );
};
