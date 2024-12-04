import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compenents/Card/Header';
import Searchbar from './compenents/Card/Searchbar';
import PokemonGrid from './compenents/Card/PokemonGrid';
import PokemonDetail from './compenents/Card/PokemonDetail';
import typesData from './compenents/Card/types.json';
import { Box, Select, MenuItem } from '@mui/material';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [selectedType, setSelectedType] = useState(""); // État pour le type sélectionné

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <Router>
      <Header onLanguageChange={handleLanguageChange} selectedLanguage={selectedLanguage} />
      <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Searchbar onSearch={handleSearch} />
        
        {/* Menu de sélection pour trier par type */}
        <Select
          value={selectedType}
          onChange={handleTypeChange}
          displayEmpty
          sx={{ marginTop: '10px', minWidth: '200px' }}
        >
          <MenuItem value="">
            <em>All Types</em>
          </MenuItem>
          {Object.keys(typesData).map((type) => (
            <MenuItem key={type} value={type}>
              {typesData[type].translations[selectedLanguage] || type}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Routes>
        <Route path="/" element={<PokemonGrid searchValue={searchValue} selectedLanguage={selectedLanguage} selectedType={selectedType} />} />
        <Route path="/pokemon/:id" element={<PokemonDetail selectedLanguage={selectedLanguage} />} />
      </Routes>
    </Router>
  );
}

export default App;
