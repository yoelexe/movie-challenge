// import { FiImage, FiMenu, FiHome, FiFastForward, FiSettings, FiUser, FiLogOut, FiHeart } from "react-icons/fi";
import { useState } from "react";
import "./header.css";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiHome,
  FiLogOut,
  FiSettings,
  FiWatch,
  FiX,
} from "react-icons/fi";

export const Header = () => {
  // intento de toggle para el sidebar
  const [show, setShow] = useState(false);
  // los estilos en linea no se pueden reutilizar
  return (
    <>
      {/* Header */}
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <button onClick={() => setShow(true)}>
            <FiMenu className="menu-icon" />
          </button>
        </div>
        <div className="nav-middle">
          <h1>CITYNEMA</h1>
        </div>
        <div className="nav-right flex-div">
          <FiSearch className="icon-right" />
          <FiShoppingCart className="icon-right" />
          <FiUser className="icon-right" />
        </div>
      </nav>

      {/* Sidebar */}
      <div>
        {show ? (
          <section className="sidebar">
            <button className="btnExit" onClick={() => setShow(false)}>
              <FiX />
            </button>
            <div className="short-links">
              <a>
                <FiHome className="icon" /> Home
              </a>
              <a>
                {" "}
                <FiWatch className="icon" /> Movies
              </a>
              <a>
                {" "}
                <FiHeart className="icon" /> Favorites
              </a>
              <a>
                {" "}
                <FiUser className="icon" /> User
              </a>
              <a>
                {" "}
                <FiSettings className="icon" /> Settings
              </a>
              <hr></hr>
              <a>
                {" "}
                <FiLogOut className="icon" /> Log Out
              </a>
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
};
