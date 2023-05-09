import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";
import { Cowork } from "../../utils/types";
import { ADD_COWORK } from "../../graphql/mutations";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Separator = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-around;
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`;

const coworkInitialState: Cowork = {
  id: "",
  companyName: "",
  web: "",
  address: {
    city: "",
    postalCode: "",
    country: "",
    street: "",
  },
  contact: {
    id: "",
    name: "",
    email: "",
    number: "",
    surname: "",
  },
};

export const RegisterCoworkModal = ({ isOpen, handleClose }) => {
  const [open, setOpen] = React.useState(isOpen);
  const [addCowork] = useMutation(ADD_COWORK);

  const onClose = () => {
    setOpen(false);
    handleClose();
    setForm(coworkInitialState);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [form, setForm] = useState(coworkInitialState);

  const registerCompany = () => {
    handleClose();
    return addCowork({
      variables: {
        cowork: form,
      },
    });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const updatedForm = { ...form };
    if (form.address[name] !== undefined) {
      updatedForm.address[name] = value;
    } else if (form.contact[name] !== undefined) {
      updatedForm.contact[name] = value;
    } else {
      updatedForm[name] = value;
    }
    setForm(updatedForm);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Separator>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Register your coworking space
          </Typography>
        </Separator>
        <div>
          <StyledBox>
            <TextField
              required
              label="Company name"
              size="small"
              name="companyName"
              value={form.companyName}
              onChange={handleFormChange}
            />
            <TextField
              required
              label="Site web"
              size="small"
              name="web"
              value={form.web}
              onChange={handleFormChange}
            />
          </StyledBox>
          <Separator>Address: </Separator>
          <StyledBox>
            <TextField
              required
              label="City"
              size="small"
              name="city"
              value={form.address.city}
              onChange={handleFormChange}
            />
            <TextField
              required
              label="Country"
              size="small"
              name="country"
              value={form.address.country}
              onChange={handleFormChange}
            />
          </StyledBox>
          <StyledBox>
            <TextField
              required
              label="Street"
              size="small"
              name="street"
              value={form.address.street}
              onChange={handleFormChange}
            />
            <TextField
              required
              label="Postal code"
              size="small"
              name="postalCode"
              value={form.address.postalCode}
              onChange={handleFormChange}
            />
          </StyledBox>
          <Separator>Contact point:</Separator>
          <StyledBox>
            <TextField
              required
              label="Name"
              size="small"
              name="name"
              value={form.contact.name}
              onChange={handleFormChange}
            />
            <TextField
              required
              label="Surname"
              size="small"
              name="surname"
              value={form.contact.surname}
              onChange={handleFormChange}
            />
          </StyledBox>
          <StyledBox>
            <TextField
              required
              label="Contact number"
              size="small"
              name="number"
              value={form.contact.number}
              onChange={handleFormChange}
            />
            <TextField
              required
              label="Email"
              size="small"
              name="email"
              value={form.contact.email}
              onChange={handleFormChange}
            />
          </StyledBox>
        </div>
        <Separator>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={registerCompany}>
            Send for approval
          </Button>
        </Separator>
      </Box>
    </Modal>
  );
};
