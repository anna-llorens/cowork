import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Logo from "./logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

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

const Separator = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-around;
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [companyName, setComponyName] = React.useState("");
  const [city, setCity] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

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

  const routeChange = (path:any) => {
    navigate(path);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>What would you like to do?</h2>
        </header>
      </div>
      <div className="box">
        <div className="square" onClick={handleOpen}>
          Register new site
        </div>
        <div className="square" onClick={e => routeChange('locations')}>
          Look for a coworking space
        </div>

        <div className="square"  onClick={e => routeChange('inview')}>Testing</div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Separator>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Register your coworking space.
                </Typography>
              </Separator>
              <StyledBox>
                <TextField
                  id="companyName"
                  label="Company name"
                  variant="outlined"
                  size="small"
                  value={companyName}
                  onChange={(e) => setComponyName(e.target.value)}
                />
                <TextField
                  id="web"
                  label="Site web"
                  variant="outlined"
                  size="small"
                />
              </StyledBox>
              <Separator>Address: </Separator>
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
              <TextField
                id="Street"
                label="Street"
                variant="outlined"
                size="small"
              />
              <TextField
                id="Country"
                label="Country"
                variant="outlined"
                size="small"
              />

              <Separator>Contact point:</Separator>

              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
              />
              <TextField
                id="Surname"
                label="Surname"
                variant="outlined"
                size="small"
              />

              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
              />

              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                size="small"
              />
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
      </div>
      <div className="back">
        <img alt="logo" src={Logo} />
      </div>
    </>
  );
};
