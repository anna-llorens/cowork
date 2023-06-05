import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";
import { ADD_COWORK, CREATE_COWORK } from "../../graphql/mutations";
import { LocationsContext } from "../../context/locations";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
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

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 8px !important;
`;

const StyledBox = styled.div`
  display: flex;
  gap: 8px;
`;

const coworkInitialState = {
  companyName: "",
  web: "",
  address: {
    city: "",
    postalCode: "",
    country: "",
    street: "",
  },
  contact: {
    id: "user-id",
    name: "",
    email: "",
    number: "",
    surname: "",
  },
};

export const RegisterCoworkModal = ({ isOpen, handleClose }) => {
  const navigate = useNavigate();
  const { setCoworks } = useContext(LocationsContext);
  const [open, setOpen] = React.useState(isOpen);

  const onClose = () => {
    setOpen(false);
    handleClose();
    setForm(coworkInitialState);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [form, setForm] = useState(coworkInitialState);

  const [createCowork] = useMutation(CREATE_COWORK, {
    variables: {
      description: form.address.city,
      url: form.web,
      companyName: form.companyName,
    },
    onCompleted: () => {
      handleClose();
      navigate("/home");
    },
  });

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
      <Box sx={style} style={{ width: "800px" }}>
        <Separator>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Register your coworking space
          </Typography>
        </Separator>
        <StyledTextField
          required
          label="Company name"
          size="small"
          name="companyName"
          value={form.companyName}
          onChange={handleFormChange}
        />
        <StyledTextField
          required
          label="Site web"
          size="small"
          name="web"
          value={form.web}
          onChange={handleFormChange}
        />

        <Separator>Address: </Separator>
        <StyledBox>
          <StyledTextField
            required
            label="City"
            size="small"
            name="city"
            value={form.address.city}
            onChange={handleFormChange}
          />
          <StyledTextField
            required
            label="Country"
            size="small"
            name="country"
            value={form.address.country}
            onChange={handleFormChange}
          />
        </StyledBox>
        <StyledBox>
          <StyledTextField
            required
            label="Street"
            size="small"
            name="street"
            value={form.address.street}
            onChange={handleFormChange}
          />
          <StyledTextField
            required
            label="Postal code"
            size="small"
            name="postalCode"
            value={form.address.postalCode}
            onChange={handleFormChange}
          />
        </StyledBox>

        <Separator>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => createCowork()}>
            Send for approval
          </Button>
        </Separator>
      </Box>
    </Modal>
  );
};
