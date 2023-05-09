import styled from "styled-components";
import { space3XL, spaceXL } from "../../utils";
import { AddressCard } from "./cards/address-card";
import { ContactCard } from "./cards";
import { LocationsContext } from "../../context/locations";
import { useContext } from "react";

const Main = styled.main`
  margin: ${spaceXL} ${space3XL};
`;

const CardSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content 1fr min-content;
`;

export const LocationView = () => {
  const { getCoworkData } = useContext(LocationsContext);
  const cowork = getCoworkData();

  return (
    <Main>
      <h1>Manage your location</h1>
      <h2>{cowork.companyName}</h2>
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
        {/* TODO Add additional cards 
        <Card title={"Building"} CardContent={AdressInfo} />
        <Card title={"Amenities"} CardContent={AdressInfo} />
        <Card title={"Common Spaces"} CardContent={AdressInfo} />
        <Card title={"Type of space / product"} CardContent={AdressInfo} /> */}
      </CardSection>
    </Main>
  );
};
