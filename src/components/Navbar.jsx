import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Box,
  List,
  ListItem,
  ListItemButton,
  Switch,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Src from "../assets/p.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// import ProfileMenu from "./ui/ProfileMenu";
const Navbar = ({mode,setMode}) => {
  const [openMenu, setOpenMenu] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });
  const Icons = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
    alignItems: "center",
  }));
  const UserBox = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    gap: "0.7rem",
    alignItems: "center",
  }));
  const menuItems = [
    { Name: "Profile", Link: "/" },
    { Name: "Account", Link: "#" },
    { Name: "LogOut", Link: "#" },
  ];
  return (
    <AppBar position="sticky"  >
        <StyledToolbar>
          <FacebookIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            FaceBook
          </Typography>
          <Box display={"flex"} alignItems={"center"}>

          <SearchBox sx={{ marginLeft: { xs: "55px" } }}>
            <SearchIcon  />
            <InputBase placeholder="Search..." sx={{ color: "white" }} />
          </SearchBox>
          </Box>
          <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
            <Badge badgeContent={4} color="secondary">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon color="action" />
            </Badge>
            <IconButton onClick={()=>setOpenMenu(true)}>
              <Avatar
                sx={{ width: "10", height: "10" }}
                alt="Remy Sharp"
                src={Src}
              />
            </IconButton>
          </Icons>
          <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton onClick={()=>setOpenMenu(true)}>
              <Avatar
                sx={{ width: "10", height: "10" }}
                alt="Remy Sharp"
                src={Src}
              />
            </IconButton>
            <Typography>Jeen</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box sx={{width:"100px",height:"25vh"}}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.Name}
                sx={{ cursor: "pointer", fontSize: "14px" }}
              >
                {item.Name}
              </MenuItem>
            ))}
            <Box sx={{display:{xs:"block", sm:"none"}}}>
            <Divider/>
            <List>
              <ListItem>
            <ListItemButton sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <ListItemIcon >
                {mode==="dark"?<LightModeIcon/>:<DarkModeIcon />}
              </ListItemIcon>
              <Switch onChange={e=> setMode(mode ==="light"? "dark" :"light")}  sx={{marginRight:"20px"}} />
            </ListItemButton>
          </ListItem>
            </List>
            </Box>
          </Box>
        </Menu>
      </AppBar>
      
  );
};

export default Navbar;
