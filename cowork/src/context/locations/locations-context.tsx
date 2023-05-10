import { createContext, useState } from "react";
import { useCompanies } from "../../graphql/hooks/use-companies";
import { Cowork } from "../../utils/types";
import { useLocation } from "react-router-dom";

export const LocationsContext = createContext<{
  getLocations: () => Cowork[];
  getCoworkData: (coworkId?: string) => Cowork | null;
  activeTab: string;
  setActiveTab: any;
  setCoworks: any;
}>({
  getLocations: null,
  getCoworkData: null,
  activeTab: "/",
  setActiveTab: null,
  setCoworks: null,
});

const coworks: Cowork[] = [
  {
    companyName: "Anna is testing",
    id: "my-id",
    address: { country: "" },
    contact: { id: "id", name: "aa", surname: "aa" },
  },
];
const data = { coworks };

export const LocationsContextProvider = ({ children }) => {
  // TODO update query to get only user Locations. This is only test data
  // const { data, loading, error } = useCompanies();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.replace("/locations/", "")
  );
  const [anna, setCoworks] = useState(data?.coworks);

  const coworks = data?.coworks;

  const getCoworkData = (coworkId = activeTab) => {
    return coworks?.find((cowork) => cowork.id === coworkId);
  };

  const getLocations = () => {
    return coworks;
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return (
    <LocationsContext.Provider
      value={{
        getLocations,
        getCoworkData,
        activeTab,
        setActiveTab,
        setCoworks,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
