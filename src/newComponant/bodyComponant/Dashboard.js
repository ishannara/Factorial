import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { PageHeader } from "../Common/CommonComponant";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ReactApexChart from "react-apexcharts";
import { fakeArrayData, randomValue } from "../utils/FakeArrayData";
import {
  amber,
  blue,
  green,
  indigo,
  lightGreen,
  red,
} from "@mui/material/colors";
import { DisplayCardGraph } from "../Common/GraphComponant";
import ListComponant from "./ListComponant";

function Dashboard() {
  const [fecthed, setFecthed] = useState(false);
  const [post, setPost] = useState([]);

  const [options, setOption] = React.useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      // text: "Monthly Sale",
      align: "left",
    },
    xaxis: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "May",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });

  const [series, setSeries] = React.useState([
    {
      name: "Orders",
      color: "#faac30c4",
      data: [10, 23, 12, 123],
    },
  ]);

  const GraphCardData = [
    {
      id: "Post",
      data: fakeArrayData({ count: 9, digit: 100 }),
      brColor: blue[500],
      brColor: blue[50],
    },
    {
      id: "Pages",
      data: fakeArrayData({ count: 9, digit: 100 }),
      brColor: indigo[500],
      brColor: indigo[50],
    },
    {
      id: "New Visitor",
      data: fakeArrayData({ count: 9, digit: 100 }),
      brColor: lightGreen[500],
      brColor: lightGreen[50],
    },
    {
      id: "Total Visitor",
      data: fakeArrayData({ count: 9, digit: 100 }),
      brColor: amber[500],
      brColor: amber[50],
    },
  ];

  const displayData = [
    {
      label: "Post",
      value: randomValue({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "4%",
    },
    {
      label: "Pages",
      value: randomValue({ digit: 100 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "4%",
    },
    {
      label: "New Visitor",
      value: randomValue({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "-2%",
    },
    {
      label: "Total Visitor",
      value: randomValue({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "-2%",
    },
  ];

  useEffect(() => {
    if (!fecthed) {
      GraphCardData.map((item) => (
        <DisplayCardGraph
          id={item.id}
          data={item.data}
          brColor={item.brColor}
          brColor1={item.brColor}
        />
      ));
      setFecthed(true);
    }
  }, [fecthed]);

  return (
    <>
      <Box>
        <PageHeader label="DASHBOARD" pageTitle="Blog Overview" />

        <Grid container spacing={2}>
          {displayData.map((data, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card>
                <CardContent>
                  <ReactApexChart
                    type="line"
                    height={150}
                    width={250}
                    options={options}
                    series={series}
                  ></ReactApexChart>
                  <Typography
                    variant="body2"
                    style={{
                      textTransform: "uppercase",
                      color: "gray",
                      textAlign: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    {data.label}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h6"
                    style={{
                      textTransform: "capitalize",
                      color: "black",
                      textAlign: "center",
                      fontSize: "1.8rem",
                    }}
                  >
                    {data.value}
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        color: data.label[0] === "P" ? green[600] : red[500],
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                      size="small"
                      startIcon={data.icon}
                    >
                      {data.iconLabel}
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Card>
            <CardContent>
              <Typography variant="body1" component="h3" fontSize=" 25px">
                User Overview
              </Typography>
              <ReactApexChart
                type="line"
                height={200}
                width={300}
                options={options}
                series={series}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="body1" component="h3" fontSize=" 25px">
                Device Overview
              </Typography>
              <ReactApexChart
                type="bar"
                height={200}
                width={300}
                options={options}
                series={series}
              ></ReactApexChart>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="body1" component="h3" fontSize=" 25px">
                Demo Overview
              </Typography>
              <ReactApexChart
                type="polarArea"
                height={200}
                width={300}
                options={options}
                series={series}
              ></ReactApexChart>
            </CardContent>
          </Card>
        </Grid>
        {/* LIst Componant */}
        <ListComponant post={post} setPost={setPost}/>
      </Box>
    </>
  );
}

export default Dashboard;
