import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function CounterStepControl() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + Number(step));
  };

  const handleDecrement = () => {
    setCount(count - Number(step));
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
          Counter Step Control
        </Typography>
        <TextField
          value={step}
          onChange={(e) => setStep(e.target.value)}
          size="small"
          style={{ width: "40%" }}
          placeholder="enter number"
        />
        <Box>{count}</Box>
        <Box display={"flex"} gap={2}>
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="success"
            onClick={handleIncrement}
          >
            Increment
          </Button>
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="error"
            onClick={handleDecrement}
          >
            Drcement
          </Button>
        </Box>
      </Box>
    </>
  );
}
