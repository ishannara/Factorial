import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsius = (val) => {
    const convertor = (val * 9) / 5 + 32;
    setFahrenheit(convertor);
  };

  const handleFahrenheit = (val) => {
    const convertor = val - (32 * 5) / 9;
    setCelsius(convertor);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        height={"60vh"}
        gap={2}
      >
        <Typography variant="h2">Temperature Convertor</Typography>
        <Box display={"flex"} gap={2}>
          <TextField
            type="number"
            onChange={(e) => setCelsius(e.target.value)}
            onBlur={(e) => handleCelsius(e.target.value)}
            value={celsius}
            style={{ width: "50%" }}
            size="small"
            placeholder="Celsius"
          />
          <TextField
            type="number"
            onChange={(e) => setFahrenheit(e.target.value)}
            onBlur={(e) => handleFahrenheit(e.target.value)}
            value={fahrenheit}
            style={{ width: "50%" }}
            size="small"
            placeholder="Fahrenheit"
          />
        </Box>
      </Box>
    </>
  );
}

export default TemperatureConvertor;
