// Importamos useQuery de react-query para realizar consultas asíncronas y manejar el estado.
import { useQuery } from "react-query";

// Importamos la función getUsers de la carpeta api/users.
import { getUsers } from "../../api/users";

// Importamos el tipo User de la carpeta types/User.
import { User } from "../../types/User";

// Importamos los estilos CSS del archivo "styles.css" que se encuentra en la carpeta "views".
import "../views/styles.css";

// Importamos el componente Link y el hook useNavigate de react-router-dom para la navegación.
import { Link, useNavigate } from "react-router-dom";

// Creamos un componente funcional llamado "UserList".
const UserList = () => {
  // Utilizamos el hook useQuery para obtener los usuarios desde la API.
  const { data: users = [], isLoading } = useQuery<User[]>("users", getUsers);

  // Creamos una instancia de useNavigate para la navegación.
  const navigate = useNavigate();
   // Creamos la función handleEditClick para navegar a la ruta de edición del usuario.
  const handleEditClick = (userId: string) => {
    navigate(`/edit-user/${userId}`);
  };

  // Creamos la función handleCreateClick para navegar a la ruta de creación de usuario.
  const handleCreateClick = () => {
    navigate(`/create-user`);
  };

  // Si está cargando, mostramos "Loading...".
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Retornamos el JSX que muestra la lista de usuarios en una tabla.
  return (
    // Agregamos un botón "Agregar" que llama a la función handleCreateClick.
    // Agregamos un botón "Agregar" que llama a la función handleCreateClick.
    // Iteramos sobre los usuarios y mostramos cada uno en una fila.
    // Agregamos un botón "Editar" que llama a la función handleEditClick con el ID del usuario.
    <div>
      <button className="add-button" onClick={() => handleCreateClick()}>
        Agregar
      </button>
      
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} alt={user.first_name} />
              </td>
              <td>{user.first_name}</td>
              <td>{user.second_name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(user.id)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exportamos el componente UserList por defecto.
export default UserList;
