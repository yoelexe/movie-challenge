import { FiX } from "react-icons/fi";
import { FilterMovie } from "../filter/FilterMovie";
import "./modal.css";
// eslint-disable-next-line react/prop-types
export const Modal = ( state, changeState ) => {
  return (
    <>
      {state && 
        (
          <div className="overlay">
          <div className="contenedor-modal">
            <div className="encabezado-modal">
              <h2>Contenido</h2>
            </div>
            <button className="btn-cerrar" onClick={() => changeState(true)}>
              <FiX />
            </button>
            <FilterMovie></FilterMovie>
          </div>
        </div>
        )
      }
    </>
  );
};
