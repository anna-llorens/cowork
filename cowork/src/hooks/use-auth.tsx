import { useEffect } from "react";
import { User, useUser } from "./use-user";
import { useLocalStorage } from "./use-local-storage";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const loginAuth = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, loginAuth, logout };
};
