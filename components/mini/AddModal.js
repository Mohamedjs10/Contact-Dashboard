import React from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";

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
  borderRadius: "10px",
};
function AddModal({ openAdd, handleCloseAdd }) {
  return (
    <div>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Name (en)"
              variant="outlined"
            />{" "}
            <TextField
              id="outlined-basic"
              label="Name (ar)"
              variant="outlined"
            />{" "}
            <TextField
              id="outlined-basic"
              label="Position (en)"
              variant="outlined"
            />{" "}
            <TextField
              id="outlined-basic"
              label="Position (ar)"
              variant="outlined"
            />{" "}
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
            />
            <Button
              variant="contained"
              endIcon={<HowToRegIcon />}
              sx={{ fontSize: 15, height: 45 }}
              style={{ width: 200 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddModal;
