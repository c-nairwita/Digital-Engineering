import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import DrawerComponent from "../components/DrawerComponent";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Contact from "../components/Contact";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const DashboardRouter = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState(
    sessionStorage.getItem("currentTab")
      ? JSON.parse(sessionStorage.getItem("currentTab"))
      : 0
  );
  const routes = [
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/services", component: Services },
    { path: "/products", component: Products },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/signup", component: SignUp },
  ];

  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, val) => {
    navigate(routes[val].path);
    setValue(val);
    setCurrentTab(val);
    console.log(val);
    sessionStorage.setItem("currentTab", JSON.stringify(val));
  };

  return (
    <>
      <AppBar sx={{ background: "darkblue" }} position="static">
        <Toolbar>
          {isMatch ? (
            <>
              <DashboardCustomizeRoundedIcon sx={{ transform: "scale(1)" }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
                Dashboard
              </Typography>
              <DrawerComponent handleChange={handleChange} />
            </>
          ) : (
            <>
              <DashboardCustomizeRoundedIcon sx={{ transform: "scale(1)" }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
                Dashboard
              </Typography>
              <Tabs
                textColor="white"
                indicatorColor="primary"
                value={currentTab}
                onChange={handleChange}
              >
                <Tab label="Home" component={Link} to="/home"></Tab>
                <Tab label="About Us" component={Link} to="/about"></Tab>
                <Tab label="Services" component={Link} to="/services"></Tab>
                <Tab label="Products" component={Link} to="/products"></Tab>
                <Tab label="Contact Us" component={Link} to="/contact"></Tab>
              </Tabs>
              {JSON.parse(sessionStorage.getItem("loggedData")) ? (
                <Button
                  onClick={(e) => {
                    // handleChange(e, 5);
                    navigate("/login");
                    sessionStorage.removeItem("loggedData");
                  }}
                  value={value}
                  variant="contained"
                  sx={{ marginRight: "1%" }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    onClick={(e) =>
                      // handleChange(e, 5)}
                      navigate("/login")
                    }
                    value={value}
                    variant="contained"
                    sx={{ marginRight: "1%" }}
                  >
                    Login
                  </Button>

                  <Button
                    onClick={(e) =>
                      // handleChange(e, 6)}
                      navigate("/signup")
                    }
                    value={value}
                    variant="contained"
                  >
                    Sign-up
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default DashboardRouter;
