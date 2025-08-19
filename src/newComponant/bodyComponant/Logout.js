import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Logout() {
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
            Logout
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
