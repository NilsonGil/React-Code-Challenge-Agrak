// Importamos la librería React para utilizar JSX y crear componentes.
import React from 'react';

// Importamos los estilos CSS del archivo "styles.css" que se encuentra en la carpeta "views".
import "../views/styles.css";

// Creamos un componente funcional llamado "Footer" que no recibe ninguna propiedad (props).
const Footer: React.FC = () => {
  return (
    // Retornamos un elemento footer con la clase "footer" aplicada.
    // Dentro del elemento footer, creamos un enlace (etiqueta "a") con el atributo "href" apuntando al perfil de LinkedIn proporcionado.
    // El atributo "target" con valor "_blank" indica que el enlace se abrirá en una nueva pestaña.
    // El atributo "rel" con valor "noopener noreferrer" mejora la seguridad al abrir enlaces en una nueva pestaña.
    <footer className='footer'>
      <a
        href="https://www.linkedin.com/in/nilsongil/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connecta con migo en LinkedIn (clic aqui) 
      </a>
    </footer>
  );
};

// Exportamos el componente "Footer" para que pueda ser utilizado en otros archivos del proyecto.
export default Footer;
