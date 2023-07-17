import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-4 bg-black">
      <span className="text-white">&copy; 2023, Karen Huamán. All rights reserved.</span>
      <div className="flex justify-center items-center space-x-1">
        <Link className="inline-flex justify-center p-2 text-white rounded-lg cursor-pointer darl:text-gray-400 
        dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#A65C32]"
        to='https://www.linkedin.com/in/martihuaman/' target="_blank">
          <FiLinkedin />
        </Link>
        <Link className="inline-flex justify-center p-2 text-white rounded-lg cursor-pointer darl:text-gray-400 
        dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#A65C32]"
        to='https://github.com/yoelexe' target="_blank" >
          <FiGithub />
        </Link>
        <Link className="inline-flex justify-center p-2 text-white rounded-lg cursor-pointer darl:text-gray-400 
        dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#A65C32]">
          <FiInstagram />
        </Link>
      </div>
    </footer>
  )
}

