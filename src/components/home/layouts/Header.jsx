// import { FiImage, FiMenu, FiHome, FiFastForward, FiSettings, FiUser, FiLogOut, FiHeart } from "react-icons/fi";
// import { useState } from "react";
import {
  FiX,
  FiMenu,
} from "react-icons/fi";

export const Header = () => {


  // ? Checar useRef para el sidebar
  const menuCloseBtn = () => {
    const offcanvas = document.querySelector('.offcanvas-menu');
    offcanvas.classList.remove('translate-x-0')
    offcanvas.classList.add('-translate-x-full')
  }

  const menuOpenBtn = () => {
    const offcanvas = document.querySelector('.offcanvas-menu');
    offcanvas.classList.remove('-translate-x-full')
    offcanvas.classList.add('translate-x-0')
  }

  // intento de toggle para el sidebar
  // const [show, setShow] = useState(false);
  // los estilos en linea no se pueden reutilizar
  return (
    <>
      {/* Header */}
      <header className="bg-late-100 shadow-md">
        {/* px-8 absolute z-50 */}
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 h-10 items-center">

            <div className="flex justify-start">
              <div className="relative">
              <a className="menu-open-btn" onClick={menuOpenBtn}><FiMenu className="h-6 w-6 cursor-pointer"/></a>
              <nav className="offcanvas-menu fixed bg-white h-screen top-0 z-10 left-0
              md:w-1/6 w-2/3 shadow-md flex items-center px-8 -translate-x-full duration-300">
                <a className="menu-close-btn absolute top-6 right-6" onClick={menuCloseBtn}>
                  <FiX className="cursor-pointer"/>
                </a>
                <ul>
                  <li className="my-5">
                    <a className="text-xl hover:text-red-500 cursor-pointer duration-300" href="/">Home</a></li>
                  <li className="my-5">
                    <a className="text-xl hover:text-red-500 cursor-pointer">Movies</a></li>
                  <li className="my-5">
                    <a className="text-xl hover:text-red-500 cursor-pointer">Favorite</a></li>
                  <li className="my-5">
                    <a className="text-xl hover:text-red-500 cursor-pointer">User</a></li>
                  <li className="my-5">
                    <a className="text-xl hover:text-red-500 cursor-pointer">Log Out</a></li>
                </ul>
              </nav>
              </div>
            </div>

            <div className="flex justify-end">
                <a className="text-2xl">Logo</a>
            </div>

          </div>
        </div>
      </header>

      {/* Sidebar */}
      
    </>
  );
};
