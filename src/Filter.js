import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export const Filter = () => {
  const [search, setSearch] = React.useState("");

  const items = ["React", "JavaScript", "Node", "Python", "Java", "C++"];

  const filterData = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position={"static"}
        gap={2}
        height="100vh"
      >
        <Typography variant="h3">Search Filter Items </Typography>
        <TextField
          value={search}
          size="small"
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          placeholder="Search..."
        />
        <ul>
          {filterData.map((item, ind) => {
            return (
              <>
                <Box mb={2} key={ind}>
                  <li>{item}</li>
                </Box>
              </>
            );
          })}
        </ul>
      </Box>
    </>
  );
};
