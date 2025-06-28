import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const PrimeNumber = () => {
  const [number, setNumber] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleClick = () => {
    let num = parseInt(number);
    if (!num) {
      setResult("please not a negative number");
    } else {
      let isPrime = true;
      for (let index = 2; index <= Math.sqrt(num); index++) {
        if (num % index === 0) isPrime = false;
      }
      setResult(
        isPrime ? `${num} is a prime number` : `${num} is a not-prime number`
      );
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
          Prime Number
        </Typography>
        <br />
        <TextField
          value={number}
          placeholder="enter number"
          type="number"
          size="small"
          style={{ width: "30%" }}
          variant="outlined"
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <Button size="medium" variant="contained" onClick={handleClick}>
          Check
        </Button>
        {/* result */}
        <Box mt={4}>{result && <p>{result}</p>}</Box>
      </Box>
    </>
  );
};

export default PrimeNumber;
