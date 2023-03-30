// Importamos la librería React para utilizar JSX y crear componentes.
import React from 'react';

// Importamos los estilos CSS del archivo "styles.css" que se encuentra en la carpeta "views".
import "../views/styles.css";

// Creamos un componente funcional llamado "Header" que no recibe ninguna propiedad (props).
const Header: React.FC = () => {
  return (
    // Retornamos un elemento header con la clase "header" aplicada.
    // Dentro del elemento header, incluimos un elemento h1 para mostrar un título.
    <header className='header'>
      <h1>React Code Challenge — Agrak</h1>
    </header>
  );
};

// Exportamos el componente "Header" para que pueda ser utilizado en otros archivos del proyecto.
export default Header;