import { createContext } from "react";
import { useCompanies } from "../../graphql/hooks/use-companies";
import { Cowork } from "../../utils/types";

export const LocationsContext = createContext<{
  locations: Cowork[];
}>({ locations: [] });

export const LocationsContextProvider = ({ children }) => {
  // TODO update query to get only user Locations. This is only test data
  const { data, loading, error } = useCompanies();

  // TODO relative routing, protected routes etc.
  // Need improve App routing to continue
  // const [activeTab, setActiveTab] = useState("main");
  // TODO update coworks to locations on be

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <LocationsContext.Provider value={{ locations: data.coworks }}>
      {children}
    </LocationsContext.Provider>
  );
};
