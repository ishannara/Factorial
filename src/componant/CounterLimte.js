import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

function CounterLimte() {
  const [count, setCount] = useState(0);

  const handleIncre = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDrecre = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        height={"50vh"}
      >
        <Typography
          component={"h1"}
          fontWeight={500}
          fontSize={45}
          fontFamily={"sans-serif"}
        >
          Counter
        </Typography>
        <Box>{count}</Box>
        <br />
        <Box display={"flex"} gap={2}>
          <Button
            variant="contained"
            color="success"
            size="medium"
            onClick={handleIncre}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            color="error"
            size="medium"
            onClick={handleDrecre}
          >
            Drecrement
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CounterLimte;
