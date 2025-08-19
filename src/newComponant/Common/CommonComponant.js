import { Grid, Typography } from "@mui/material";

export const PageHeader = ({ label, pageTitle }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography
            variant="body2"
            component="h4"
            mt={9}
            style={{ color: "gray" }}
            gutterBottom
          >
            {label}
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "black",
              fontWeight: 600,
              fontFamily: "sans-serif",
            }}
            gutterBottom
          >
            {pageTitle}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
