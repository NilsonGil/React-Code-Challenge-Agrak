// Importamos useState desde React para manejar el estado local del componente.
import { useState } from "react";
// Importamos useNavigate desde react-router-dom para la navegación.
import { useNavigate } from "react-router-dom";
// Importamos la función createUser desde la carpeta api/users.
import { createUser } from "../../api/users";
// Importamos el tipo User desde la carpeta types/User.
import { User } from "../../types/User";
// Importamos los componentes Header y Footer.
import Header from "../components/Header";
import Footer from "../components/Footer";
// Importamos los estilos desde el archivo "styles.css".
import "./styles.css";


// Creamos un componente funcional llamado "CreateUser".
const CreateUser = () => {
  // Creamos una instancia de useNavigate para la navegación.
  const navigate = useNavigate();
  // Inicializamos el estado local del usuario con un objeto vacío.
  const [user, setUser] = useState<User>({
    first_name: "",
    second_name: "",
    email: "",
    avatar: "",
    id: "",
  });

  // Creamos la función handleSubmit para manejar el evento de envío del formulario.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(user);
    navigate("/");
  };

  // Creamos la función handleInputChange para manejar el evento de cambio en los campos del formulario.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: any) => ({ ...prevUser, [name]: value }));
  };

  // Retornamos el JSX que muestra el formulario para crear un usuario.
  // Creamos un Botón para guardar el usuario.
  return (
    <>
      <Header />
      <div className="container">
        <h1>Create User</h1>
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
        </form>
      </div>
      <Footer />
    </>
  );
};

// Exportamos el componente CreateUser por defecto.
export default CreateUser;
