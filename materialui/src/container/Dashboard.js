import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Contact from "../components/Contact";
import DrawerComponent from "../components/DrawerComponent";
import SignUp from "../components/SignUp";

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState(
    sessionStorage.getItem("currentTab")
      ? JSON.parse(sessionStorage.getItem("currentTab"))
      : 0
  );

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, val) => {
    setValue(val);
    setCurrentTab(val);
    sessionStorage.setItem("currentTab", JSON.stringify(val));
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
      <div>
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
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
                <Tab label="Home"></Tab>
                <Tab label="About Us"></Tab>
                <Tab label="Services"></Tab>
                <Tab label="Products"></Tab>
                <Tab label="Contact Us"></Tab>
              </Tabs>
              <Button
                onClick={() => handleChange(5)}
                value={value}
                variant="contained"
                sx={{ marginRight: "1%" }}
              >
                Login
              </Button>
              <Button
                onClick={() => handleChange(6)}
                value={value}
                variant="contained"
              >
                Sign-up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <div>
        <TabPanel value={currentTab} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <About />
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <Services />
        </TabPanel>
        <TabPanel value={currentTab} index={3}>
          <Products />
        </TabPanel>
        <TabPanel value={currentTab} index={4}>
          <Contact />
        </TabPanel>
        <TabPanel value={currentTab} index={6}>
          <SignUp />
        </TabPanel>
      </div>
    </>
  );
};

export default Dashboard;
