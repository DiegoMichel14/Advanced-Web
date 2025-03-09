//Router:	Envuelve la aplicación y gestiona la navegación.
//Routes:	Agrupa múltiples rutas y muestra solo la primera coincidencia.
//Route:	Define una URL específica y qué componente renderizar.

// CÓDIGO BASE TOMADO DEL REPOSITORIO COMPARTIDO EN CLASE PARA EJERCICIOS PREVIOS 
// A ESTE ENTREGABLE

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"; // Importa el componente Navbar
import Tarjeta from "./pages/Tarjeta";
import Palabras from "./pages/Palabras"; 
import Promesas from "./pages/Promesas";
import Default from "./pages/Default";  

function App() { 
  return ( 
    <Router>
      <div className="app">
        {/* Barra de navegación */}
        <Navbar />
        {/* Contenido de la página */}
        <div className="content">
          <Routes> 
            <Route path="/" element={<Tarjeta />} />
            <Route path="/about" element={<Palabras />} />
            <Route path="/dashbord" element={<Promesas />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
