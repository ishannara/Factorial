import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();

      const finaldate = `${hour} : ${minute} : ${second}`;
      setTime(finaldate);
    });
  }, [time]);

  return (
    <>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        height={"60vh"}
      >
        <Typography variant="h3" fontFamily={"sans-serif"}>
          Live Clock
        </Typography>
        <Box fontSize={"26px"} mt={5}>{time}</Box>
      </Box>
    </>
  );
}

export default LiveClock;
