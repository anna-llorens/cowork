import styled from "styled-components";
import { space3XL, spaceXL } from "../../utils";
import { AddressCard } from "./edit-cards/address-card";
import { ContactCard } from "./edit-cards";
import { LocationsContext } from "../../context/locations";
import { useContext } from "react";
import { BuildingCard } from "./edit-cards/building-card";

const Main = styled.main`
  margin: ${spaceXL} ${space3XL};
`;

const CardSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content 1fr min-content;
`;

export const EditCoworking = () => {
  const { getCoworkData } = useContext(LocationsContext);
  const cowork = getCoworkData();

  return (
    <Main>
      <h1>Manage your location</h1>
      {/* <h2>{cowork?.companyName}</h2> */}
      <h2>My cowork space</h2>
      <section>
        <img
          src="https://res.cloudinary.com/terieyenike/image/upload/c_thumb,g_face,w_317/v1637140050/calm_teri_b3eziq.jpg"
          alt="Teri Eyenike"
        />
      </section>
      <h2>Sections</h2>
      <CardSection>
        <AddressCard />
        <ContactCard />
        <BuildingCard />
        {/* TODO Add additional cards 
          <Card title={"Amenities"}/>
          <Card title={"Common Spaces"} />
          <Card title={"Type of space / product"}/> */}
      </CardSection>
    </Main>
  );
};
