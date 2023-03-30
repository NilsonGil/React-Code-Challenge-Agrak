// Importamos BrowserRouter, Route y Routes desde 'react-router-dom'.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importamos los componentes CreateUser, EditUser y Home.
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Home from "./Home";

// Creamos un componente funcional llamado "App".v
function App() {
  // Retornamos el JSX que configura las rutas de la aplicación.
  return (
     // Utilizamos BrowserRouter para envolver las rutas de la aplicación.
     // Utilizamos el componente Routes para definir las rutas específicas.
     // Definimos una ruta para la página principal que renderiza el componente Home.
     // Definimos una ruta para la página de creación de usuario que renderiza el componente CreateUser.
       // Definimos una ruta para la página de edición de usuario que renderiza el componente EditUser.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exportamos el componente App por defecto.
export default App;
