import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const CharacterCount = () => {
  const [text, setText] = useState("");
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
          Character Count
        </Typography>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="small"
          placeholder="enter text"
          sx={{ width: 300 }}
        />
        <Box my={2}>word count is {text.length}</Box>
      </Box>
    </>
  );
};
