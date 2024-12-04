import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Rechercher un Pokémon..."
      value={searchValue}
      onChange={handleInputChange}
      sx={{
        width: '100%',
        maxWidth: '600px',
        input: { color: "black" },
        backgroundColor: "white",
        borderRadius: 1,
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "black" },
          "&:hover fieldset": { borderColor: "#333" },
          "&.Mui-focused fieldset": { borderColor: "#555" },
        },
      }}
    />
  );
};

export default SearchBar;
