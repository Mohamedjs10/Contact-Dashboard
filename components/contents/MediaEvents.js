import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ContentTitle from "../mini/ContentTitle";
import AddModal from "../mini/AddModal";
import EditModal from "../mini/EditModal";
import TimingAlert from "../mini/TimingAlert";
import DialogBox from "../mini/DialogBox";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#101F33",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(nameEn, nameAr, positionEn, positionAr, imgurl) {
  return { nameEn, nameAr, positionEn, positionAr, imgurl };
}

const rows = [
  createData(
    "Hazem Mousa",
    "حمزة موسى",
    "Chairman",
    "رئيس",
    "https://contact-clients-dev.s3.amazonaws.com/HazemMoussa.png"
  ),
];

export default function contentTable() {
  // const tab = useSelector((state) => state.tab.tab);
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [alert, setAlert] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseAgree = () => {
    setOpenDialog(false);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const handleCloseDisagree = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <DialogBox
        openDialog={openDialog}
        handleCloseAgree={handleCloseAgree}
        handleCloseDisagree={handleCloseDisagree}
        setAlert={setAlert}
      ></DialogBox>
      <AddModal openAdd={openAdd} handleCloseAdd={handleCloseAdd}></AddModal>
      <EditModal
        openEdit={openEdit}
        handleCloseEdit={handleCloseEdit}
      ></EditModal>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <ContentTitle></ContentTitle>
        {alert && <TimingAlert></TimingAlert>}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: 250 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>Name (en)</Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>Name (ar)</Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Position (en)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Position (ar)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 400 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>Image URL</Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>Control</Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 10 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    "& .MuiButtonBase-root": {
                      color: "white",
                    },
                  }}
                >
                  <IconButton sx={{ borderRadius: "50%", p: "8px" }}>
                    <AddCircleIcon
                      sx={{ fontSize: 40, color: "#27A4FF" }}
                      onClick={handleOpenAdd}
                    ></AddCircleIcon>
                  </IconButton>
                </Box>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.nameEn}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.nameAr}
                </StyledTableCell>
                <StyledTableCell> {row.positionEn}</StyledTableCell>
                <StyledTableCell> {row.positionAr}</StyledTableCell>
                <StyledTableCell>{row.imgurl}</StyledTableCell>
                <StyledTableCell sx={{ display: "flex", gap: 1 }}>
                  <Button
                    color="success"
                    variant="outlined"
                    onClick={handleOpenEdit}
                  >
                    <EditIcon></EditIcon>
                  </Button>

                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => {
                      setOpenDialog(true);
                    }}
                  >
                    <DeleteIcon></DeleteIcon>
                  </Button>
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
