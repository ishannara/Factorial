import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Jone",
    age: 22,
    city: "london",
  },
  {
    id: 2,
    name: "Mukul",
    age: 26,
    city: "london",
  },
  {
    id: 3,
    name: "Ishan",
    age: 23,
    city: "Udaipur",
  },
  {
    id: 4,
    name: "Bhavy",
    age: 24,
    city: "UK",
  },
];

export const DynamicSearch = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(data);
  //   const data = [
  //     {
  //       id: 1,
  //       name: "Jone",
  //       age: 22,
  //       city: "london",
  //     },
  //     {
  //       id: 2,
  //       name: "Mukul",
  //       age: 26,
  //       city: "london",
  //     },
  //     {
  //       id: 3,
  //       name: "Ishan",
  //       age: 23,
  //       city: "Udaipur",
  //     },
  //     {
  //       id: 4,
  //       name: "Bhavy",
  //       age: 24,
  //       city: "UK",
  //     },
  //   ];

  useEffect(() => {
    const lowercase = search.toLowerCase();
    const reuslt = data.filter((item) =>
      item.name.toLowerCase().includes(lowercase)
    );
    setFilter(reuslt);
  }, [search, data]);

  return (
    <>
      <Box
        textAlign={"center"}
        my={10}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        flexDirection={"column"}
      >
        <TextField
          label="Search"
          style={{ width: "50%" }}
          size="small"
          placeholder="searchable data.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ fontWeight: 600 }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filter.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
