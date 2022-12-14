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

function createData(
  order,
  titleEn,
  titleAr,
  date,
  descriptionEn,
  descriptionAr,
  imgUrlEn,
  imgUrlAr
) {
  return {
    order,
    titleEn,
    titleAr,
    date,
    descriptionEn,
    descriptionAr,
    imgUrlEn,
    imgUrlAr,
  };
}

const rows = [
  createData(
    1,
    "Announcement for Policy Holders",
    "إعلان هام لحملة الوثائق",
    "29/09/2022",
    "Re-evaluate the sum insured of vehicle , Equipment and any other properties to reflect the increase",
    "مراجعة و تعديل مبالغ تأمين السيارات ، المعدات أى ممتلاكات أخرى مؤمن عليها وفقاً للقيم السوقية الحالية",
    "https://contact-clients-dev.s3.amazonaws.com/HazemMoussa.png",
    "https://contact-clients-dev.s3.amazonaws.com/HazemMoussa.png"
  ),
];

export default function contentTable() {
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
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 150 }}
              >
                Order
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 150 }}
              >
                Title (en)
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 150 }}
              >
                Title (ar)
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 100 }}
              >
                Date
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 200 }}
              >
                Description (en)
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 200 }}
              >
                Description (ar)
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 200 }}
              >
                Image URL (en)
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 200 }}
              >
                Image URL (ar)
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: 16, width: 200 }}
              >
                Control
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 16,
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
              <StyledTableRow key={row.order}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  {row.order}
                </StyledTableCell>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  {row.titleEn}
                </StyledTableCell>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  {row.titleAr}
                </StyledTableCell>
                <StyledTableCell sx={{ textAlign: "center" }}>
                  {" "}
                  {row.date}
                </StyledTableCell>
                <StyledTableCell sx={{ textAlign: "center" }}>
                  {" "}
                  {row.descriptionEn}
                </StyledTableCell>
                <StyledTableCell sx={{ textAlign: "center" }}>
                  {row.descriptionAr}
                </StyledTableCell>
                <StyledTableCell
                  sx={{ textAlign: "center", wordBreak: "break-all" }}
                >
                  {row.imgUrlEn}
                </StyledTableCell>
                <StyledTableCell
                  sx={{ textAlign: "center", wordBreak: "break-all" }}
                >
                  {row.imgUrlAr}
                </StyledTableCell>
                <StyledTableCell
                  sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                >
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
