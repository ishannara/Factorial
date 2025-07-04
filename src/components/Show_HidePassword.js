// Complete

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Show_HidePassword() {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleClick = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"50vh"}
        flexDirection={"column"}
      >
        <Typography mb={5} component="h3" fontSize={"30px"} fontWeight={600}>
          Show / Hide passerd
        </Typography>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPass ? "text" : "password"}
          size="small"
          placeholder="enter pass..."
        />
        <br />
        <Button size="small" variant="contained" onClick={handleClick}>
          {showPass ? "hide" : "show"}
        </Button>
      </Box>
    </>
  );
}

export default Show_HidePassword;
