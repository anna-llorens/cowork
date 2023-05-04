import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import { ModalHeader } from "./modal-header";
import { Button } from "@mui/material";
import { FormInput } from "../form/form-input";

const ADD_TODO = gql`
  mutation addCowork($cowork: CoworkInput) {
    addCowork(cowork: $cowork) {
      companyName
    }
  }
`;

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

const formInitialState: any = {
  companyName: "",
  web: "",
  address: {
    city: "",
    postalCode: "",
    country: "",
    street: "",
  },
  contact: {
    name: "",
    surname: "",
    email: "",
    number: "",
  },
};

export const BasicModal = ({ isOpen, handleClose }) => {
  const [open, setOpen] = React.useState(isOpen);
  const [addTodo] = useMutation(ADD_TODO);

  const onClose = () => {
    setOpen(false);
    handleClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [form, setForm] = useState(formInitialState);

  const registerCompany = () => {
    handleClose();
    return addTodo({
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
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <ModalHeader />
          <div>
            <FormInput
              label="Company name"
              name="companyName"
              value={form.companyName}
              onChange={handleFormChange}
            />
            <FormInput
              label="Company webSite"
              name="web"
              value={form.web}
              onChange={handleFormChange}
            />

            <FormInput
              label="City, country"
              name="city"
              value={form.address.city}
              onChange={handleFormChange}
            />

            <FormInput
              label="ContactName"
              name="name"
              value={form.contact.name}
              onChange={handleFormChange}
            />
            <FormInput
              label="Email"
              name="email"
              value={form.contact.email}
              onChange={handleFormChange}
            />
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
    </div>
  );
};