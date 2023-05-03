import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import { ModalHeader } from "./modal-header";
import { ModalBody } from "./modal-body";
import { ModalFooter } from "./modal-footer";

const ADD_TODO = gql`
  mutation addCowork($cowork: CoworkInput) {
    addCowork(cowork: $cowork) {
      name
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

export const BasicModal = ({ isOpen, handleClose }) => {
  const [open, setOpen] = React.useState(isOpen);
  const [companyName, setComponyName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [addTodo] = useMutation(ADD_TODO);

  const onClose = () => {
    setOpen(false);
    handleClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const registerCompany = () => {
    handleClose();
    return addTodo({
      variables: {
        cowork: {
          name: companyName,
          web: "www.google.com",
          address: {
            city: city,
            postalCode: "08029",
            country: "Spain",
            street: "Burdeus 22",
          },
          contact: {
            name: "Anna",
            surname: "Llorens",
            email: "anna@test.com",
            number: "0123456",
          },
        },
      },
    });
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <ModalHeader />
          <ModalBody />
          <ModalFooter
            handleClose={handleClose}
            registerCompany={registerCompany}
          />
        </Box>
      </Modal>
    </div>
  );
};
