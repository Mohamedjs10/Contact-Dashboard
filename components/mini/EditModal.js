import React, { useLayoutEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useSelector, useDispatch } from "react-redux";
import useSWR from "swr";

const fetcherInsurance = (...args) => fetch(...args).then((res) => res.json());
const fetcherLife = (...args) => fetch(...args).then((res) => res.json());

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
function EditModal({ openEdit, currentId, setOpenEdit }) {
  const tab = useSelector((state) => state.tab.tab);
  const btn = useSelector((state) => state.btn.btn);
  console.log(tab, btn); // Our Team - 0 (insurance)
  const {
    data: dataInsurance,
    error: errorInsurance,
    isLoading: isLoadingInsurance,
  } = useSWR(`/api/sarwa/insurance/teams?_id=${currentId}`, fetcherInsurance, {
    refreshInterval: 100,
  });
  const {
    data: dataLife,
    error: errorLife,
    isLoading: isLoadingLife,
  } = useSWR(`/api/sarwa/life/teams?_id=${currentId}`, fetcherLife, {
    refreshInterval: 100,
  });
  const data = btn === 0 ? dataInsurance : dataLife;
  const isLoading = btn === 0 ? isLoadingInsurance : isLoadingLife;
  // states
  const [nameEn, setNameEn] = useState("");
  const handleNameEnChange = (event) => {
    setNameEn(event.target.value);
  };

  const [nameAr, setNameAr] = useState("");
  const handleNameArChange = (event) => {
    setNameAr(event.target.value);
  };
  const [positionEn, setPositionEn] = useState("");
  const handlePositionEnChange = (event) => {
    setPositionEn(event.target.value);
  };
  const [positionAr, setPositionAr] = useState("");
  const handlePositionArChange = (event) => {
    setPositionAr(event.target.value);
  };
  const [imgUrl, setImgUrl] = useState("");
  const handleImgUrlChange = (event) => {
    setImgUrl(event.target.value);
  };
  const [order, setOrder] = useState("");

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };
  useLayoutEffect(() => {
    setNameEn(dataInsurance?.name?.en);
    setNameAr(dataInsurance?.name?.ar);
    setPositionEn(dataInsurance?.position?.en);
    setPositionAr(dataInsurance?.position?.ar);
    setImgUrl(dataInsurance?.imgUrl);
  }, [currentId, data]);

  return (
    <div>
      {isLoading ? (
        <div></div>
      ) : (
        <Modal
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
            setNameEn(data?.name?.en);
            setNameAr(data?.name?.ar);
            setPositionEn(data?.position?.en);
            setPositionAr(data?.position?.ar);
            setImgUrl(data?.imgUrl);
          }}
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
                value={nameEn}
                onChange={handleNameEnChange}
              />{" "}
              <TextField
                id="outlined-basic"
                label="Name (ar)"
                variant="outlined"
                value={nameAr}
                onChange={handleNameArChange}
              />{" "}
              <TextField
                id="outlined-basic"
                label="Position (en)"
                variant="outlined"
                value={positionEn}
                onChange={handlePositionEnChange}
              />{" "}
              <TextField
                id="outlined-basic"
                label="Position (ar)"
                variant="outlined"
                value={positionAr}
                onChange={handlePositionArChange}
              />{" "}
              <TextField
                id="outlined-basic"
                label="Image URL"
                variant="outlined"
                value={imgUrl}
                onChange={handleImgUrlChange}
              />
              <TextField
                id="outlined-basic"
                label="Entry Order"
                variant="outlined"
                value={order}
                onChange={handleOrderChange}
              />
              <Button
                variant="contained"
                endIcon={<DoneOutlineIcon />}
                color="success"
                sx={{ fontSize: 15, height: 45 }}
                style={{ width: 200 }}
                onClick={() => {
                  if (
                    nameEn &&
                    nameAr &&
                    positionEn &&
                    positionAr &&
                    imgUrl &&
                    order
                  ) {
                    fetch("http://localhost:3000/api/sarwa/insurance/teams", {
                      method: "PUT",
                      body: JSON.stringify({
                        _id: currentId,
                        document: {
                          name: { en: nameEn, ar: nameAr },
                          position: {
                            en: positionEn,
                            ar: positionAr,
                          },
                          imgUrl: imgUrl,
                        },
                      }),
                    });
                    setNameEn("");
                    setNameAr("");
                    setPositionEn("");
                    setPositionAr("");
                    setImgUrl("");
                    setOrder("");
                    setOpenEdit(false);
                  }
                }}
              >
                Done Editing
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default EditModal;
