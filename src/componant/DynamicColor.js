// me self 

import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

function DynamicColor() {
  const [colorName, setColorName] = useState("");
  const title = "Dynamic Color Change";
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Typography
          fontSize="30px"
          fontWeight="bold"
          fontFamily="sans-serif"
          mb={3}
          color="#333"
          textAlign="center"
        >
          {title}
        </Typography>
        <Box
          bgcolor={colorName}
          display={"flex"}
          flexDirection={"column"}
          boxShadow={3}
          p={10}
          width={"70%"}
          height={"470px"}
        >
          <TextField
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            size="small"
            placeholder="enter color name"
          />
        </Box>
      </Box>
    </>
  );
}

export default DynamicColor;
