import {
  FiX,
  FiMenu,
  FiShoppingCart,
  FiSearch
} from "react-icons/fi";
import { Link } from "react-router-dom";

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
      <header className="bg-black shadow-md text-white relative">
        {/* px-8 absolute z-50 */}
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 h-12 items-center">

            <div className="flex justify-start">
              <div className="relative">
              <a className="menu-open-btn" onClick={menuOpenBtn}><FiMenu className="h-6 w-6 cursor-pointer"/></a>
              <nav className="offcanvas-menu fixed bg-black h-screen top-0 z-10 left-0
              md:w-1/6 w-2/3 shadow-md flex items-center px-8 -translate-x-full duration-300">
                <a className="menu-close-btn absolute top-6 right-6 mx-2 my-2" onClick={menuCloseBtn}>
                  <FiX className="cursor-pointer dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600
                   rounded"/>
                </a>
                <ul>
                  <li className="my-5">
                    <Link className="text-xl hover:text-[#F2C36B] cursor-pointer duration-300" to={`/`}>Home</Link></li>
                  <li className="my-5">
                    <Link className="text-xl hover:text-[#F2C36B] cursor-pointer" to={`/movies`}>Movies</Link></li>
                    <li className="my-5">
                    <Link className="text-xl hover:text-[#F2C36B] cursor-pointer">Snacks</Link></li>
                  <li className="my-5">
                    <Link className="text-xl hover:text-[#F2C36B] cursor-pointer">Favorite</Link></li>
                  <li className="my-5">
                    <Link className="text-xl hover:text-[#F2C36B] cursor-pointer">User</Link></li>
                  <li className="my-5">
                    <Link className="text-xl hover:text-[#F2C36B] cursor-pointer">Log Out</Link></li>
                    
                </ul>
              </nav>
              </div>
            </div>

            <div className="flex justify-center">
                <a className="text-3xl font-medium text-[#F2C36B]">CITYNEMA</a>
            </div>

            <div className="flex justify-end">
            <a className="cursor-pointer px-6 text-xl	">
                <FiSearch className="icon" />
              </a>
            <a className="cursor-pointer text-xl">
                <FiShoppingCart className="icon" />
              </a>
            </div>

          </div>
        </div>
      </header>      
    </>
  );
};
