import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function SearchFilter() {
  const [searchfilter, setSearchFilter] = useState("");

  const itmes = ["React", "JavaScript", "Node", "Python"];

  const filterUser = itmes.filter((item) =>
    item.toLowerCase().includes(searchfilter.toLowerCase())
  );

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"80vh"}
        flexDirection={"column"}
      >
        <Typography variant="h3">Search Filter</Typography>
        <br />
        <TextField
          size="small"
          placeholder="filter"
          value={searchfilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <ul>
          {filterUser.map((item, ind) => {
            return (
              <>
                <Box mb={2}>
                  <li key={ind}>{item}</li>
                </Box>
              </>
            );
          })}
        </ul>
      </Box>
    </>
  );
}

export default SearchFilter;
