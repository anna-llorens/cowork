import { createContext } from "react";

import { useAuth } from "../../hooks/use-auth";
import { User } from "../../hooks/use-user";

interface AuthContextInterface {
  user: User | null;
  setUser: any;
}

export const AuthContext = createContext<AuthContextInterface>({
  user: null,
  setUser: null,
});

export const AuthContextProvider = ({ children }) => {
  //TODO update login/logout status
  // control the token here
  // add type of user on context
  const { user, loginAuth, logout } = useAuth();

  const setUser = () => {
    return loginAuth(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
