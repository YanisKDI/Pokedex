import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LanguageSelector from './LanguageSelector';

const Header = ({ onLanguageChange, selectedLanguage }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Logo Pokéball */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
          <img
            src="https://e7.pngegg.com/pngimages/324/645/png-clipart-pokeball-pokeball-thumbnail.png"
            alt="Pokéball"
            width="30"
            height="30"
            style={{ marginRight: '8px' }}
          />
        </Box>

        {/* Titre du Pokédex */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>

        {/* Sélecteur de langue */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
