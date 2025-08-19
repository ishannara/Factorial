// import {
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import BookIcon from "@mui/icons-material/Book";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import { NavLink } from "react-router-dom";

// function SidenavData() {
//   const listItemData = [
//     { lable: "Dashbord", link: "/", icon: <DashboardIcon /> },
//     { lable: "Blog Post", link: "/blogcomp", icon: <BookIcon /> },
//     { lable: "Link", link: "/link", icon: <PostAddIcon /> },
//     {
//       lable: "Notification",
//       link: "/notification",
//       icon: <NotificationAddIcon />,
//     },
//     { lable: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
//   ];
//   return (
//     <>
//       <List sx={{ width: 250, borderRadius: 2 }}>
//         {listItemData.map((item, i) => (
//           <ListItem
//             key={i}
//             component={NavLink}
//             to={item.link}
//             disablePadding
//             sx={{ mb: 1 }}
//           >
//             <ListItemButton sx={{ borderRadius: 2 }}>
//               <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
//               <ListItemText
//                 slotProps={{
//                   primary: {
//                     fontWeight: 500,  
//                     fontSize: 16,
//                     color: "#333",
//                   },
//                 }}
//               >
//                 {/* {item.lable} */}
//               </ListItemText>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// }

// export default SidenavData;
