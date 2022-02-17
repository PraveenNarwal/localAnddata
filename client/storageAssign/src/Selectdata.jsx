import Box from "@mui/material/Box";
import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selectdata() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ m: 1, minWidth: 80 }}>
      <FormControl style={{ width: "200px" }}>
        <InputLabel id="demo-simple-select-label">Select database</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>localStorage</MenuItem>
          <MenuItem value={20}>database mongod</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
