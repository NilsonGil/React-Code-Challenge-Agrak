// Importamos ReactQueryDevtools desde react-query/devtools para incluir las herramientas de desarrollo de React Query.
import { ReactQueryDevtools } from "react-query/devtools";

// Importamos QueryClient y QueryClientProvider desde react-query.
import { QueryClient, QueryClientProvider } from "react-query";

// Importamos el componente UserList.
import UserList from "../components/UserList";

// Importamos los componentes Header y Footer.
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importamos los estilos desde el archivo "styles.css".
import "./styles.css";

// Creamos un componente funcional llamado "Home".
const Home = () => {
  // Creamos una nueva instancia de QueryClient.
  const queryClient = new QueryClient();

  // Retornamos el JSX que muestra la lista de usuarios en la página principal.
  return (
    // Envolvemos el contenido en un QueryClientProvider para proporcionar el cliente de consulta a los componentes hijos.
    // Incluimos las herramientas de desarrollo de React Query con la configuración inicial para ocultarlas.
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="container">
        <h1>Users</h1>
        <UserList />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      <Footer />
    </QueryClientProvider>
  );
};

// Exportamos el componente Home por defecto.
export default Home;
