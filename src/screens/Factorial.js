import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Factorial() {
  const [number, setNumber] = useState("");
  const [factorial, setFactorial] = useState(null);
  const [error, setError] = useState("");

  const handleClick = () => {
    let num = parseInt(number);
    if (!num || num < 0) {
      setError("please not-negative number");
      return;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result = result * i;
      }
      setFactorial(result)
    }
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Box my={17} display={"flex"} flexDirection={"column"}>
          <Typography variant="h3" fontFamily={"serif"} fontWeight={600}>
            Factorial Number
          </Typography>
          <br />
          <TextField
            value={number}
            placeholder="enter number"
            type="number"
            size="small"
            style={{ width: "100%" }}
            variant="outlined"
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <Button size="medium" variant="contained" onClick={handleClick}>
            Check
          </Button>
          {error && (
            <Typography color="error" mt={2} textAlign={"center"}>
              {error}
            </Typography>
          )}
          {factorial !== null && !error && (
            <Box textAlign={"center"} mt={5}>
              Factorial {number} is <strong>{factorial}</strong>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Factorial;
