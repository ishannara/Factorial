import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

export const Chart1 = () => {
  return (
    <>
      <Box display={"flex"} gap={5} p={5}>
        {/* BAR Chart */}
        <Card>
          <CardContent>
            <Bar
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              style={{ height: 300, width: 500 }}
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [200, 300, 400],
                  },
                  {
                    label: "Loss",
                    data: [500, 600, 700],
                  },
                  {
                    label: "Loss",
                    data: [500, 600, 700],
                  },
                  {
                    label: "Loss",
                    data: [500, 600, 700],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
        {/* Dount */}
        <Card>
          <CardContent>
            <Doughnut
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              style={{ height: 300, width: 500 }}
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [200, 300, 400],
                  },
                  {
                    label: "Loss",
                    data: [500, 600, 700],
                  },
                ],
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
