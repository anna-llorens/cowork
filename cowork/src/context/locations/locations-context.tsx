import { createContext, useState } from "react";
import { useCompanies } from "../../graphql/hooks/use-companies";

export const LocationsContext = createContext(null);

export const LocationsContextProvider = ({ children }) => {
  // TODO update query to get only user Locations. This is only test data
  const { data, loading, error } = useCompanies();

  // TODO relative routing, protected routes etc.
  // Need improve App routing to continue
  const [activeTab, setActiveTab] = useState("main");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <LocationsContext.Provider
      value={{ coworks: data.coworks, activeTab, setActiveTab }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
