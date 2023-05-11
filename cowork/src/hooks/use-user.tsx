import { useContext } from "react";
import { useLocalStorage } from "./use-local-storage";
import { AuthContext } from "../context/user/auth-context";

export interface User {
  name: string;
  email: string;
  authToken?: string;
}

export const useUser = () => {
  const { user } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};
