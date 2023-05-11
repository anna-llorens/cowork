import { createContext } from "react";

export const UserContext = createContext<any>(null);

export const UserContextProvider = ({ children }) => {
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
};
