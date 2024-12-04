import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import PokemonCard from './PokemonCard';

const PokemonGrid = ({ searchValue, selectedLanguage, selectedType }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json');
        const data = await response.json();
        const first151 = data.slice(0, 151);
        setPokemons(first151);
        setFilteredPokemons(first151);
      } catch (error) {
        console.error("Erreur lors du chargement des Pokémon :", error);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) => {
      const matchesSearch = pokemon.names[selectedLanguage].toLowerCase().includes(searchValue.toLowerCase());
      const matchesType = selectedType ? pokemon.types.includes(selectedType) : true;
      return matchesSearch && matchesType;
    });
    setFilteredPokemons(filtered);
  }, [searchValue, selectedLanguage, selectedType, pokemons]);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {filteredPokemons.map((pokemon) => (
        <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
          <PokemonCard pokemon={pokemon} selectedLanguage={selectedLanguage} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonGrid;
