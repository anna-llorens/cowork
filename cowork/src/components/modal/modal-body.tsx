import { TextField } from "@mui/material";
import { useState } from "react";

import styled from "styled-components";
import { Separator } from "./Modal";

const StyledBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`;
export const ModalBody = () => {
  const [companyName, setComponyName] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <StyledBox>
        <TextField
          id="companyName"
          label="Company name"
          variant="outlined"
          size="small"
          value={companyName}
          onChange={(e) => setComponyName(e.target.value)}
        />
        <TextField id="web" label="Site web" variant="outlined" size="small" />
      </StyledBox>
      <Separator>Address: </Separator>
      <StyledBox>
        <TextField
          id="Location"
          label="City"
          variant="outlined"
          size="small"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id="Location"
          label="Postal code"
          variant="outlined"
          size="small"
        />
      </StyledBox>
      <StyledBox>
        <TextField id="Street" label="Street" variant="outlined" size="small" />
        <TextField
          id="Country"
          label="Country"
          variant="outlined"
          size="small"
        />
      </StyledBox>
      <Separator>Contact point:</Separator>
      <StyledBox>
        <TextField id="name" label="Name" variant="outlined" size="small" />
        <TextField
          id="Surname"
          label="Surname"
          variant="outlined"
          size="small"
        />
      </StyledBox>
      <StyledBox>
        <TextField id="email" label="Email" variant="outlined" size="small" />

        <TextField id="phone" label="Phone" variant="outlined" size="small" />
      </StyledBox>
    </>
  );
};
