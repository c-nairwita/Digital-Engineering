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
 
  const routes = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {routes.map((route, index) => (
            <ListItemButton key={index} component={Link} to={route.path}>
              <ListItemIcon>
                <ListItemText>{route.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}

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
