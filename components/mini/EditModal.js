import React from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

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
function EditModal({ openEdit, handleCloseEdit }) {
  return (
    <div>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
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
            <TextField
              id="outlined-basic"
              label="Entry Order"
              variant="outlined"
            />
            <Button
              variant="contained"
              endIcon={<DoneOutlineIcon />}
              color="success"
              sx={{ fontSize: 15, height: 45 }}
              style={{ width: 200 }}
            >
              Done Editing
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default EditModal;
