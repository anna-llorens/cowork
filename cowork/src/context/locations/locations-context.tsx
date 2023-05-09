import { createContext, useState } from "react";
import { useCompanies } from "../../graphql/hooks/use-companies";
import { Cowork } from "../../utils/types";
import { useLocation } from "react-router-dom";

export const LocationsContext = createContext<{
  locations: Cowork[];
  getCoworkData: (coworkId?: string) => Cowork | null;
  activeTab: string;
  setActiveTab: any;
}>({ locations: [], getCoworkData: null, activeTab: "/", setActiveTab: null });

export const LocationsContextProvider = ({ children }) => {
  // TODO update query to get only user Locations. This is only test data
  const { data, loading, error } = useCompanies();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.replace("/locations/", "")
  );
  const coworks: Cowork[] = data?.coworks;

  const getCoworkData = (coworkId = activeTab) => {
    return coworks?.find((cowork) => cowork.id === coworkId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <LocationsContext.Provider
      value={{ locations: coworks, getCoworkData, activeTab, setActiveTab }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
