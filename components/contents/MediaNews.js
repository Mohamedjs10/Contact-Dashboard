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
import AddModal from "../mini/AddModal";
import ContentTitle from "../mini/ContentTitle";

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
  titleEn,
  titleAr,
  date,
  descriptionEn,
  descriptionAr,
  imgUrlEn,
  imgUrlAr
) {
  return {
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AddModal open={open} handleClose={handleClose}></AddModal>
      <ContentTitle></ContentTitle>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: 250 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>Title (en)</Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>Title (ar)</Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 400 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>Date</Box>
              </StyledTableCell>{" "}
              <StyledTableCell sx={{ width: 400 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Description (en)
                </Box>
              </StyledTableCell>{" "}
              <StyledTableCell sx={{ width: 400 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Description (ar)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 400 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Image URL (en)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 400 }}>
                <Box sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Image URL (ar)
                </Box>
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
                      onClick={handleOpen}
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
                  {row.titleEn}
                </StyledTableCell>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "right" }}
                >
                  {row.titleAr}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell>{row.descriptionEn}</StyledTableCell>
                <StyledTableCell sx={{ textAlign: "right" }}>
                  {row.descriptionAr}
                </StyledTableCell>
                <StyledTableCell>{row.imgUrlEn}</StyledTableCell>
                <StyledTableCell>{row.imgUrlAr}</StyledTableCell>

                <StyledTableCell sx={{ display: "flex", gap: 1 }}>
                  <Button color="primary" variant="outlined">
                    <EditIcon></EditIcon>
                  </Button>

                  <Button color="error" variant="outlined">
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
