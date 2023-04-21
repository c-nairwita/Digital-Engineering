import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchWeatherReq } from "../redux/actionTypes/weatherActionTypes";
import { Typography, Box } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const cities = [
  { city: "Mumbai", label: "Mumbai" },
  { city: "Delhi", label: "Delhi" },
  { city: "Bengaluru", label: "Bengaluru" },
  { city: "Hyderabad", label: "Hyderabad" },
  { city: "Ahmedabad", label: "Ahmedabad" },
  { city: "Chennai", label: "Chennai" },
  { city: "Kolkata", label: "Kolkata" },
  { city: "Pune", label: "Pune" },
  { city: "Jaipur", label: "Jaipur" },
  { city: "Surat", label: "Surat" },
  { city: "Rajasthan", label: "Rajasthan" },
  { city: "Kerala", label: "Kerala" },
  { city: "Goa", label: "Goa" },
];

export default function WeatherComp() {
  const kelvinToCelsius = require("kelvin-to-celsius");
  const [dateTime, setDateTime] = useState(new Date());

  const [selectedCity, setSelectedCity] = useState("");
  const data = useSelector((state) => state);
  const weather = data.weather;
  console.log(weather);

  const dispatch = useDispatch();

  function handleChange(selectedCity) {
    setSelectedCity(selectedCity);
    console.log(selectedCity);
    dispatch(fetchWeatherReq(selectedCity));
  }

  const headerStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Times Roman",
    textShadow: "0 0 3px #fff, 0 0 1px #fff, 0 0 3px #fff",
  };
  const boxStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
    height: "50%",
    margin: "3rem",
    borderRadius: 8,
    border: "1px solid grey",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      <Typography variant="h2" component="h2" style={headerStyle}>
        Weather Report
      </Typography>
      <h2 style={{ fontFamily: "times-roman" }}>Select a city:</h2>
      <div style={{ width: "30%", margin: "auto" }}>
        <Select
          style={{ textAlign: "left" }}
          value={selectedCity}
          onChange={handleChange}
          options={cities}
          getOptionValue={(option) => option.city}
          getOptionLabel={(option) => option.label}
          placeholder="Please select"
        />
      </div>

      {Object.keys(weather).length !== 0 ? (
        <>
          <div style={{ display: "flex", height: "60%" }}>
            <Box sx={boxStyle}>
              <h4>Temperature:</h4>
              <Typography variant="h4" paddingTop="10%">
                <ThermostatIcon fontSize="20px" />
                {kelvinToCelsius(weather.list[0].main.temp)} &deg;C
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <h4>Min. Temperature:</h4>
              <Typography variant="h4" paddingTop="10%">
                <ThermostatIcon fontSize="20px" />
                {kelvinToCelsius(weather.list[0].main.temp_min)} &deg;C
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <h4>Max. Temperature:</h4>
              <Typography variant="h4" paddingTop="10%">
                <ThermostatIcon fontSize="20px" />
                {kelvinToCelsius(weather.list[0].main.temp_max)} &deg;C
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <h4>Humidity:</h4>
              <Typography variant="h4" paddingTop="10%">
                {weather.list[0].main.humidity} %
              </Typography>
            </Box>
          </div>
          <div>
            <Typography variant="h4" fontFamily="times-roman">
              <LocationOnIcon fontSize="large" />
              {selectedCity.city.toUpperCase()}
            </Typography>
            <h5>
              {dateTime.toLocaleTimeString()} - {dateTime.toLocaleDateString()}
            </h5>
          </div>
        </>
      ) : (
        []
      )}
    </>
  );
}