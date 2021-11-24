import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { current, updateUser } from "../../../Redux/actions/user";

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
  background: "#555",
  display: "flex",
  flexDirection: "column",
  height: "500px",
  justifyContent: "space-around",
};

export default function ModalBio({ user }) {
  const [open, setOpen] = React.useState(false);
  const [newUser, setNewUser] = React.useState({ ...user });
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  return (
    <div>
      <Button onClick={handleOpen}>edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined"
            name="firstName"
            label="First Name"
            value={newUser.firstName}
            variant="outlined"
            style={{ color: "#fff " }}
            onChange={handleChange}
          />

          <TextField
            id="outlined"
            name="lastName"
            style={{ color: "#fff " }}
            value={newUser.lastName}
            label="Last Name"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            id="outlined"
            name="email"
            type="email"
            value={newUser.email}
            label="Email "
            style={{ color: "#fff " }}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined"
            name="bio"
            value={newUser.bio}
            label="Bio"
            variant="outlined"
            style={{ color: "#fff " }}
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              dispatch(updateUser(user._id, newUser));
              dispatch(current());
              handleClose();
            }}
          >
            edit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
