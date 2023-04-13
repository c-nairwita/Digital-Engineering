import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DrawerComponent = ({ handleChange }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  // const tabs = ["Home", "About Us", "Services", "Products", "Contact Us"];
  // const buttons = ["Login", "Logout", "Signup"];

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {/* {tabs.map((tab, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText onClick={(e) => handleChange(e, index)}>
                  {tab}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} */}
          <ListItemButton component={Link} to="/home">
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <ListItemText>About Us</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/services">
            <ListItemIcon>
              <ListItemText>Services</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/products">
            <ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton component={Link} to="/contact">
            <ListItemIcon>
              <ListItemText>Contact Us</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          {JSON.parse(sessionStorage.getItem("loggedData")) ? (
            <>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText
                    onClick={(e) => {
                      // handleChange(e, 5);
                      navigate("/login");
                      sessionStorage.removeItem("loggedData");
                    }}
                  >
                    Logout
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </>
          ) : (
            <>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText
                    onClick={(e) =>
                      // handleChange(e, 5)}>
                      navigate("/login")
                    }
                  >
                    Login
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText
                    onClick={(e) =>
                      // handleChange(e, 6)}>
                      navigate("/signup")
                    }
                  >
                    Signup
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </>
          )}
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
