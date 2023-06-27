import { FiFacebook, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-6 bg-black">
      <span className="text-white">&copy; 2023, Karen Huamán. All rights reserved.</span>
      <div className="flex justify-center items-center space-x-1">
        <a className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer darl:text-gray-400 
        dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
          <FiFacebook />
        </a>
        <a className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer darl:text-gray-400 
        dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
          <FiLinkedin />
        </a>
        <a className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer darl:text-gray-400 
        dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
          <FiGithub />
        </a>
        <a className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer darl:text-gray-400 
        dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
          <FiInstagram />
        </a>
      </div>
    </footer>
  )
}

