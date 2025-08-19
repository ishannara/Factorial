import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";

export default function ListComponant({ post }) {
  return (
    <>
      <Box>
        <Grid container spacing={0}>
          {/* author */}
          <Grid item xs={12} sm={6} md={5}></Grid>

          {/* POSRt */}
          <Grid item xs={12} sm={6} md={7} my={1}>
            <Paper elevation={2}>
              <List>
                <ListItem>
                  <Typography variant="h6">Latest</Typography>
                  {post}
                </ListItem>
                {/* {post.map((item, i) => (
                  <ListItem>
                    <ListItemIcon>
                      <Avatar
                        src={
                          "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                        }
                        // alt={item.image}
                      ></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      {post}
                      {/* <Typography variant="h6">{item.text}</Typography> */}
                {/* </ListItemText>
                  </ListItem>
                ))} */}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
