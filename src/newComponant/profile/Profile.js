import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Profile() {
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
    { lable: "setting", icon: <SettingsIcon /> },
    { lable: "Logout", icon: <LogoutIcon /> },
  ];

  return (
    <>
      <Box>
        <IconButton
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
          onClick={handleClick}
        >
          <Avatar
            style={{ width: "35px", height: "35px" }}
            src="https://cdn.pixabay.com/photo/2023/02/17/16/25/man-7796384_1280.jpg"
          ></Avatar>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {dropDrownData.map((item, i) => (
            <MenuItem key={i} component={ListItem} onClick={handleClose}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemIcon>{item.lable}</ListItemIcon>
            </MenuItem>
          ))}
          {/* <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Box>
    </>
  );
}

export default Profile;
