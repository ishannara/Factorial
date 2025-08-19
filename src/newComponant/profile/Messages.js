import {
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";

function Messages() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  const dropDrownData = [
    { lable: "Alex", dec: "likes your feeds..." },
    { lable: "Frexa", dec: "likes your feeds..." },
    { lable: "Dazer", dec: "likes your feeds..." },
    { lable: "Lobia", dec: "likes your feeds..." },
  ];

  return (
    <>
      <Box>
        <IconButton
          aria-controls="Messages"
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
          onClick={handleClick}
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <MessageIcon sx={{ fontSize: "30px", alignItems: "center" }} />
          </Badge>
        </IconButton>
        <Menu
          id="Messages"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <List sx={{ minWidth: 250, minHeight: 200 }}>
            {dropDrownData.map((item, i) => (
              <MenuItem
                key={i}
                component={ListItem}
                onClick={handleClose}
                sx={{ paddingY: 1.0, paddingX: 2 }} // Adjust vertical and horizontal padding
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Avatar sx={{ width: 32, height: 32, fontSize: 16 }}>
                    {item.lable[0].toUpperCase()}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={item.lable}
                  secondary={item.dec}
                  sx={{ ml: 1 }}
                ></ListItemText>
              </MenuItem>
            ))}
          </List>
        </Menu>
      </Box>
    </>
  );
}

export default Messages;
