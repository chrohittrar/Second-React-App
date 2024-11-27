import React, { useState } from "react";
import { Box, MenuItem, FormControl, Select, InputLabel } from "@mui/material";

const DropdownForm = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const statesAndCities = {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    Florida: ["Miami", "Orlando", "Tampa"],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 300,
        margin: "0 auto",
        padding: 2,
      }}
    >
      {/* State Dropdown */}
      <FormControl fullWidth>
        <InputLabel>Select State</InputLabel>
        <Select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCity(""); // Reset city when state changes
          }}
        >
          {Object.keys(statesAndCities).map((stateName) => (
            <MenuItem key={stateName} value={stateName}>
              {stateName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* City Dropdown */}
      <FormControl fullWidth disabled={!state}>
        <InputLabel>Select City</InputLabel>
        <Select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {state &&
            statesAndCities[state].map((cityName) => (
              <MenuItem key={cityName} value={cityName}>
                {cityName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownForm;
