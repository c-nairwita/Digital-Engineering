import React, { useEffect, useState } from "react";
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
  { city: "Meerut", label: "Meerut" },
];
const times = [
  { time: "06:00:00", label: "06:00:00" },
  { time: "09:00:00", label: "09:00:00" },
  { time: "12:00:00", label: "12:00:00" },
  { time: "15:00:00", label: "15:00:00" },
  { time: "18:00:00", label: "18:00:00" },
  { time: "21:00:00", label: "21:00:00" },
];

export default function WeatherComp() {
  const kelvinToCelsius = require("kelvin-to-celsius");
  const [dateTime, setDateTime] = useState(new Date());

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [timeIndex, setTimeIndex] = useState(0);

  const data = useSelector((state) => state);
  const weather = data.weather;
  console.log(data);
  console.log(weather);

  const dispatch = useDispatch();

  function handleChange(selectedCity) {
    setSelectedCity(selectedCity);
    console.log(selectedCity);
  }
  function handleChangeTime(selectedTime) {
    setSelectedTime(selectedTime);
    console.log(selectedTime);

    switch (selectedTime.time) {
      case "06:00:00": {
        setTimeIndex(0);
        break;
      }
      case "09:00:00": {
        setTimeIndex(1);
        break;
      }
      case "12:00:00": {
        setTimeIndex(2);
        break;
      }
      case "15:00:00": {
        setTimeIndex(3);
        break;
      }
      case "18:00:00": {
        setTimeIndex(4);
        break;
      }
      case "21:00:00": {
        setTimeIndex(5);
        break;
      }
      default:
        break;
    }
  }
  console.log(timeIndex);

  useEffect(() => {
    if (selectedCity && selectedTime) {
      dispatch(fetchWeatherReq(selectedCity));
    }
  }, [dispatch, selectedCity, selectedTime]);

  const headerStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Times Roman",
    // textShadow: "0 0 3px #fff, 0 0 1px #fff, 0 0 3px #fff",
  };
  const boxStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "100%",
    height: "50%",
    margin: "3rem",
    borderRadius: 8,
    border: "1px solid grey",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.3)",
  };
  const imgStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    height: "3rem",
    width: "3rem",
    marginLeft: "1rem",
  };

  return (
    <>
      <Typography variant="h2" component="h2" style={headerStyle}>
        Weather Report
      </Typography>
      <div style={{ display: "flex", marginTop: '2.5rem' }}>
        <h2 style={{ fontFamily: "times-roman", marginLeft: '3rem' }}>Select a city:</h2>
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
        <h2 style={{ fontFamily: "times-roman" }}>Select time:</h2>
        <div style={{ width: "30%", margin: "auto" }}>
          <Select
            style={{ textAlign: "left" }}
            value={selectedTime}
            onChange={handleChangeTime}
            options={times}
            getOptionValue={(option) => option.time}
            getOptionLabel={(option) => option.label}
            placeholder="Please select"
          />
        </div>
      </div>

      {Object.keys(weather).length !== 0 ? (
        <>
          <div style={{ display: "flex", height: "58%" }}>
            <Box sx={boxStyle}>
              <h4>Temperature:</h4>
              <Typography variant="h4" paddingTop="10%">
                <ThermostatIcon fontSize="20px" />
                {kelvinToCelsius(weather.list[timeIndex].main.temp)} &deg;C
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <h4>Min. Temperature:</h4>
              <Typography variant="h4" paddingTop="10%">
                <ThermostatIcon fontSize="20px" />
                {kelvinToCelsius(weather.list[timeIndex].main.temp_min)} &deg;C
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <h4>Max. Temperature:</h4>
              <Typography variant="h4" paddingTop="10%">
                <ThermostatIcon fontSize="20px" />
                {kelvinToCelsius(weather.list[timeIndex].main.temp_max)} &deg;C
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <h4>Humidity:</h4>
              <Typography variant="h4" paddingTop="10%">
                {weather.list[timeIndex].main.humidity} %
              </Typography>
            </Box>
          </div>
          <div>
            <Typography variant="h4" fontFamily="times-roman">
              <LocationOnIcon fontSize="large" />
              {selectedCity.city.toUpperCase()},&nbsp;
              {weather.list[timeIndex].weather[0].description.toLowerCase()}
              <img
                src={`http://openweathermap.org/img/wn/${weather.list[timeIndex].weather[0].icon}@2x.png`}
                style={imgStyle}
                alt=""
              />
            </Typography>

            <h4>
              {dateTime.toLocaleTimeString()} - {dateTime.toLocaleDateString()}
            </h4>
          </div>
        </>
      ) : (
        []
      )}
    </>
  );
}
