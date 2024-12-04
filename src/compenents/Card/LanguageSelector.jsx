import React from 'react';
import { Select, MenuItem } from '@mui/material';

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <Select
      value={selectedLanguage}
      onChange={(event) => onLanguageChange(event.target.value)}
      sx={{
        color: 'white',
        "& .MuiSelect-icon": {
          color: 'white',
        },
      }}
    >
      <MenuItem value="fr">Français</MenuItem>
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ja">日本語</MenuItem>
      <MenuItem value="de">Deutsch</MenuItem>
      <MenuItem value="es">Español</MenuItem>
      <MenuItem value="it">Italiano</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
