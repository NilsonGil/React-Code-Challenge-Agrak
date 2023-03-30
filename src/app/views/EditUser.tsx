import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { getUserById, updateUser, deleteUser } from "../../api/users";
// Importamos los componentes Header y Footer.
import Header from "../components/Header";
import Footer from "../components/Footer";
// Importamos los estilos desde el archivo "styles.css".
import "./styles.css";

// EditUser es un componente funcional de React que permite editar un usuario.
const EditUser = () => {
   // Utilizamos el hook useNavigate para navegar entre rutas.
  const navigate = useNavigate();
  // useParams nos permite acceder a los parámetros de la ruta, en este caso el id del usuario.
  const { id } = useParams();
  // Creamos un estado local para almacenar el usuario que se va a editar.
  const [user, setUser] = useState<User>({
    first_name: "",
    second_name: "",
    email: "",
    avatar: "",
    id: "",
  });

   // Usamos useEffect para buscar el usuario por ID cuando el componente se monta.
   // La función fetchUser se llama solo una vez gracias a la dependencia [id].
  useEffect(() => {
    const fetchUser = async () => {
      // Obtenemos los datos del usuario utilizando la función getUserById del API.
      const data = await getUserById(id || "");
      // Actualizamos el estado local del usuario con los datos obtenidos de la API.
      setUser(data);
    };
    // Llamamos a la función fetchUser.
    fetchUser();
  }, [id]);

  // Función que maneja el envío del formulario para actualizar el usuario.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevenimos el comportamiento por defecto del formulario (recarga de la página).
    e.preventDefault();
    // Llamamos a la función updateUser de la API para actualizar el usuario.
    await updateUser(user);
    // Navegamos a la página principal después de actualizar el usuario.
    navigate("/");
  };

   // Función que maneja el cambio en los campos de entrada del formulario.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Actualizamos el estado del usuario con los nuevos valores de los campos de entrada.
    setUser((prevUser: any) => ({ ...prevUser, [name]: value }));
  };

  const handleDeleteUser = async () => {
    // Llamamos a la función deleteUser de la API para eliminar el usuario.
    await deleteUser(id || "");
    // Navegamos a la página principal después de eliminar el usuario.
    navigate("/");
  };

  // Retornamos el componente JSX que incluye el encabezado, el formulario y el pie de página.
  return (
    <>
      <Header />
      <div className="container">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="second_name">Second Name</label>
            <input
              type="text"
              name="second_name"
              value={user.second_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="url"
              name="avatar"
              value={user.avatar}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="button" onClick={handleDeleteUser}>
            Delete
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
// Exportamos el componente EditUser por defecto.
export default EditUser;
