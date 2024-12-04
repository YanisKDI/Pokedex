import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, Button } from '@mui/material';

const PokemonDetail = ({ selectedLanguage }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json');
        const data = await response.json();
        const selectedPokemon = data.find((p) => p.id === parseInt(id));
        setPokemon(selectedPokemon);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des détails du Pokémon :", error);
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!pokemon) return <p>Pokémon non trouvé</p>;

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{pokemon.names[selectedLanguage]}</h1>
      <img src={pokemon.image} alt={pokemon.names[selectedLanguage]} style={{ width: '150px', height: '150px' }} />
      
      <Box sx={{ width: '100%', mt: 2 }}>
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Informations Générales" />
          <Tab label="Attaques" />
        </Tabs>

        {tabIndex === 0 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Informations Générales</Typography>
            <p>Id: {pokemon.id}</p>
            <p>Types: {pokemon.types.join(', ')}</p>
            <p>Poids : {pokemon.weight / 10} kg</p>
            <p>Taille : {pokemon.height / 10} m</p>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Attaques</Typography>
            {pokemon.moves.length > 0 ? (
              <Box>
                {pokemon.moves.map((move, index) => (
                  <Typography key={index} variant="body1" style={{ marginBottom: '8px' }}>
                    {move}
                  </Typography>
                ))}
              </Box>
            ) : (
              <p>Aucune attaque disponible pour ce Pokémon</p>
            )}
          </Box>
        )}
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
        sx={{ mt: 2 }}
      >
        Retour au Pokédex
      </Button>
    </div>
  );
};

export default PokemonDetail;
