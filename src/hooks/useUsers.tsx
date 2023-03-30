// Importamos useQuery, useMutation y useQueryClient desde 'react-query'.
import { useQuery, useMutation, useQueryClient } from "react-query";

// Importamos las funciones CRUD desde la carpeta api/users.
import { createUser, deleteUser, getUsers, updateUser } from "../api/users";

// Importamos el tipo User desde la carpeta types/User.
import { User } from "../types/User";

// Definimos un hook personalizado llamado 'useUsers'.
export const useUsers = () => {
  // Obtenemos la instancia del cliente de consulta de 'react-query'.
  const queryClient = useQueryClient();
  // Usamos useQuery para obtener los usuarios y manejar el estado de carga.
  const { data: users = [], isLoading } = useQuery<User[]>("users", getUsers);

  // Usamos useMutation para crear usuarios y actualizar la lista de usuarios cuando la operación es exitosa.
  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

   // Usamos useMutation para actualizar usuarios y actualizar la lista de usuarios cuando la operación es exitosa.
  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  // Usamos useMutation para eliminar usuarios y actualizar la lista de usuarios cuando la operación es exitosa.
  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  // Retornamos el estado de los usuarios, el estado de carga y las funciones CRUD para ser utilizadas en otros componentes.
  return {
    users,
    isLoading,
    createUser: createUserMutation.mutateAsync,
    updateUser: updateUserMutation.mutateAsync,
    deleteUser: deleteUserMutation.mutateAsync,
  };
};