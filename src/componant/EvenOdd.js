// my self

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function EvenOdd() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    const num = parseInt(number);
    if (!num) {
      setResult("Please enter a number");
    } else {
      setResult(num % 2 === 0 ? "Even number" : "Odd Number");
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
        <Typography
          component={"h1"}
          fontWeight={500}
          fontSize={45}
          fontFamily={"sans-serif"}
        >
          Even and Odd number
        </Typography>
        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          size="small"
          placeholder="enter number"
          style={{ width: "40%", marginTop: "20px" }}
        />
        <br />
        <Button variant="contained" size="medium" onClick={handleClick}>
          Check
        </Button>
        <br />
        {result && <Box>Check {number} is a {result}</Box>}
      </Box>
    </>
  );
}

export default EvenOdd;
