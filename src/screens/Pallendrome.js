import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Pallendrome = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (text.toLowerCase() === text.split("").reverse().join("")) {
      setMessage(`${text} is a pallendrom`);
    } else {
      setMessage(`${text} is a not-pallendrom`);
    }
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
        <Typography variant="h3" fontFamily={"sans-serif"} fontWeight={600}>
          Pallendrome
        </Typography>
        <br />
        <TextField
          value={text}
          placeholder="enter text"
          type="text"
          size="small"
          style={{ width: "30%" }}
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <Button size="medium" variant="contained" onClick={handleClick}>
          Check
        </Button>
        {/* CHECK THE PAllENDROME */}
        {message && <p>{message}</p>}
      </Box>
    </>
  );
};

export default Pallendrome;
