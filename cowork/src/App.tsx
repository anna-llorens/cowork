import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Logo from "./logo.png";
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

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <div className="square">Look for a coworking space</div>

        <div className="square">Login</div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Register your coworking space
              </Typography>
              <div>
                <label>
                  Company name:
                  <input />
                </label>
              </div>
              <div>
                <label>
                  Location:
                  <input />
                </label>
              </div>
              <div>
                <label>
                  Site:
                  <input />
                </label>
              </div>
              <div>
                <label>
                  Conctact Person
                  <input />
                </label>
              </div>
              <div>
                <label>
                  email
                  <input />
                </label>
              </div>
              <div>
                <label>
                  phone
                  <input />
                </label>
              </div>
              <Button variant="contained">Send for approval</Button>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="back">
        <img alt="logo" src={Logo} />
      </div>
    </>
  );
}

export default App;
