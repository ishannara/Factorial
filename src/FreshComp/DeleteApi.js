import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

function DeleteApi() {
  const [deleData, setDelData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://dev.beintelligent.co.in/api/partner/image/75019022-fa42-49ab-bfb5-0a65551dabe9",
        {
          method: "DELETE",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZDNlMWFlNS1mYzY5LTQ5ZTMtODExMC00N2QzMDYxZDJiMTEiLCJqdGkiOiI1ZTBmMjNhOTk2MTAzZjk5ZDY4ZTUyMGNjOGQ0NzAyYmY5NGZlZmM4ZDNhNjE0MjQ0NTgyMmM4OGMzZTFhZWNhYjBjZWQ4MDRlMzc3Yjg5ZiIsImlhdCI6MTc1MzA4NDU4Ni4yOTI3MDgsIm5iZiI6MTc1MzA4NDU4Ni4yOTI3MTEsImV4cCI6MTc4NDYyMDU4Ni4yODYzMjMsInN1YiI6IjdjMDkwNGRkLTM5NzctNGU4NS04Zjg0LTQ5OTVmODNlYmYzYiIsInNjb3BlcyI6WyJhY2Nlc3MtcGFydG5lciJdfQ.fm9qh0Rem4-S8Yy6l7YQI0XUVZnQ5IMBuIrgA7s6qwybdArVptndGPiuSm4TBX7GV44VkSmSS3f8u92wn2wMCx6jNKZ5j-vUIQ387aWe8NHmumzqckkuR1cEqef8PbTDtuKPADn9-oemiYYGtM0ehA8kPr4F08RiD4_R5xcgQOTy0E43rmCWsj2lfLA4HrZbxVxhDTpR64bxx1YKBfxvC5HzIbZ0paBrFo1t5GzIa87ZaDjEwCoVjcANjqBuiHYYz2hWIggqK4ZIbLl2StUAaAV9Y34SSoUjR6K57kyoa3qVjrsq1_Ci67kuYLYv5G7Quy6C9UrsjhDSJyvD_A8dqDjBpoVJsAEG9AO7N156CT3wOoEC2rbfbNRp-ri-8452ThRW1LXiBFQH5LgIxDPzMz4Jlw7TWHd-jBS5C076NZVoTN2uCoqgXZl91DIjG0FUbXbwtbNJ2e64o3DVjzwjzcxBcvX1WRvPjfcaKBLIydAa3O1LYbZ8aRePltjYNqrQ2tAQNEKncgR912YkCBDp1xG2SxMBVhw6yVrHVVs8J3ksUpLkKU1USjYAhMwW90xYg-3b5WqOpyNs1SvYET6mgZWL-FfdyXM8imSB8W_u1l_BCTIfwd5VW3IgdqksE7VZZh2g2gZbxNWWjvy4N8y7cPvk250JD2CYw_MgwMEC70A",
            env: "dev",
          },
        }
      );
      const data = await res.json();
      setDelData(Array.isArray(data) ? data : [data]); // ensure it's an array
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <TableContainer>
        <Typography variant="h6" sx={{ p: 2 }}>
          Image Data Delete
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID*</TableCell>
              <TableCell>Image*</TableCell>
              <TableCell>Title*</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deleData?.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <img src={row.url} alt="img" width={80} />
                </TableCell>
                <TableCell>{row.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DeleteApi;
