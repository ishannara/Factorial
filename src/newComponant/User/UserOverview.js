import { Box, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { GeneralCardComponant } from "../Common/GraphComponant";

export default function UserOverview() {
  const [fecthed, setFecthed] = useState(false);
  const GraphData = [{ id: "", type: "", datasets: "", xAxislables: "" }];

  useEffect(() => {
    if (!fecthed) {
      GraphData.map((item) => {
        GeneralCardComponant({
          id: item.id,
          type: item.type,
          datasets: item.datasets,
          xAxislables: item.xAxislables,
        });
      });
      setFecthed(true);
    }
  }, [fecthed]);

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Card>
              <CardContent>
                <Typography variant="h5">User Details</Typography>
                <Typography variant="body2">Name: John Doe</Typography>
                <Typography variant="body2">
                  Email: john.doe@example.com
                </Typography>
              </CardContent>
              <CardContent>{}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5}>
            <h2>User Overview</h2>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
