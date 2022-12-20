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
import CircularProgress from "@mui/material/CircularProgress";
import useSWR from "swr";
import { useSelector } from "react-redux";

const fetcherInsurance = (...args) => fetch(...args).then((res) => res.json());
const fetcherLife = (...args) => fetch(...args).then((res) => res.json());

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

export default function contentTable() {
  const tab = useSelector((state) => state.tab.tab);
  const btn = useSelector((state) => state.btn.btn);
  console.log(tab, btn); // Our Team - 0 (insurance)
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleCloseEdit = () => setOpenEdit(false);
  const [alert, setAlert] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [currentId, setCurrentId] = React.useState();

  const handleCloseAgree = () => {
    setOpenDialog(false);
    setAlert(true);
    fetch("http://localhost:3000/api/sarwa/insurance/teams", {
      method: "DELETE",
      body: JSON.stringify({
        _id: currentId,
      }),
    });

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const handleCloseDisagree = () => {
    setOpenDialog(false);
  };

  const {
    data: dataInsurance,
    error: errorInsurance,
    isLoading: isLoadingInsurance,
  } = useSWR("/api/sarwa/insurance/teams", fetcherInsurance, {
    refreshInterval: 100,
  });
  const {
    data: dataLife,
    error: errorLife,
    isLoading: isLoadingLife,
  } = useSWR("/api/sarwa/life/teams", fetcherLife, { refreshInterval: 100 });
  const data = btn === 0 ? dataInsurance : dataLife;
  const isLoading = btn === 0 ? isLoadingInsurance : isLoadingLife;

  return (
    <>
      <DialogBox
        openDialog={openDialog}
        handleCloseAgree={handleCloseAgree}
        handleCloseDisagree={handleCloseDisagree}
        setAlert={setAlert}
      ></DialogBox>
      <AddModal
        openAdd={openAdd}
        setOpenAdd={setOpenAdd}
        handleCloseAdd={handleCloseAdd}
        endPoint="teams"
      ></AddModal>
      <EditModal
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        handleCloseEdit={handleCloseEdit}
        endPoint="teams"
        currentId={currentId}
      ></EditModal>

      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <ContentTitle></ContentTitle>
        {alert && <TimingAlert></TimingAlert>}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: 150 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    wordSpacing: "200px",
                  }}
                >
                  Index
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    wordSpacing: "200px",
                  }}
                >
                  Name (en)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    wordSpacing: "200px",
                  }}
                >
                  Name (ar)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    wordSpacing: "200px",
                  }}
                >
                  Position (en)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    wordSpacing: "200px",
                  }}
                >
                  Position (ar)
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 400 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    wordSpacing: "400px",
                  }}
                >
                  Image URL
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: 250 }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    wordSpacing: "200px",
                  }}
                >
                  Control
                </Box>
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
            {isLoading ? (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" colSpan={8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              data.map((member, index) => (
                <StyledTableRow key={index + 1}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {member.name.en}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {member.name.ar}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {" "}
                    {member.position.en}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {" "}
                    {member.position.ar}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {member.imgUrl}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box
                      sx={{ display: "flex", gap: 1, justifyContent: "center" }}
                    >
                      <Button
                        color="success"
                        variant="outlined"
                        onClick={() => {
                          setOpenEdit(true);
                          setCurrentId(member._id);
                        }}
                      >
                        <EditIcon></EditIcon>
                      </Button>
                      <Button
                        color="error"
                        variant="outlined"
                        onClick={() => {
                          setOpenDialog(true);
                          setCurrentId(member._id);
                        }}
                      >
                        <DeleteIcon></DeleteIcon>
                      </Button>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
