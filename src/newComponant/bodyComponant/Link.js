import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Link() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h4"
            component="h4"
            mt={9}
            style={{ color: "gray" }}
            gutterBottom
          >
            Link
          </Typography>
          <Box>ishsn</Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Link;
