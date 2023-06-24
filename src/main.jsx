import React from 'react'
import ReactDOM from 'react-dom/client'
//? App.jsx -> es el componente
import App from './App.jsx'
import './index.css'

// nuevo componente para el router
import { BrowserRouter } from 'react-router-dom'

// Strict Mode -> Ejecutar el proyecto dentro del local y lo ejecuta dos veces
// para capturar errores

//? ReactDOM -> Para que toda la app meterla en otro archivo
//? que sera nuestro index.html 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
