import React, { useState } from "react";
import Login from "../components/Login";
import Paperbase from "../components/paperbase";
import Box from "@mui/material/Box";
export default function Home() {
  const [authenticated, setauthenticated] = useState(false);

  return (
    <>
      {/* {!authenticated ? ( */}
      {false ? (
        <Box sx={{ backgroundColor: "#dfe3ee" }}>
          <Login setauthenticated={setauthenticated}></Login>
        </Box>
      ) : (
        <Paperbase />
      )}
    </>
  );
}
