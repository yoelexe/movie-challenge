import styles from "./error.module.css";
import dinoImage from './dino-error.png';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) {
        setIsJumping(true);
        setTimeout(() => {
          setIsJumping(false);
        }, 300);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.errorContainer}>
        <img
        src={dinoImage}
        alt="Dino"
        className={`${styles.dinoImage} ${isJumping ? styles.jump : ''}`}
      />
      <h2>Oops! Ha ocurrido un error.</h2>
      <p>Juega el juego del dino para matar el tiempo.</p>
      <Link to={`/`} className="text-black underline p-5"> Volver a Home</Link>
      </div>
  );
}
