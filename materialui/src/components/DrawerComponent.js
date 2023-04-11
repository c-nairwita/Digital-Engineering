import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";

const DrawerComponent = ({handleChange}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const tabs = [
    "Home",
    "About Us",
    "Services",
    "Products",
    "Contact Us",
    "Login",
    "Sign Up",
  ];
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {tabs.map((tab, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText onClick={(e)=>handleChange(e,index)}>{tab}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
