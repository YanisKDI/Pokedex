import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import typeData from './types.json';

const typeColors = {
  grass: "#7AC74C",
  poison: "#A33EA1",
  fire: "#EE8130",
  water: "#6390F0",
  bug: "#A6B91A",
  flying: "#A98FF3",
  normal: "#A8A77A",
  electric: "#F7D02C",
  ground: "#E2BF65",
  fairy: "#D685AD",
  fighting: "#C22E28",
  psychic: "#F95587",
  rock: "#B6A136",
  ghost: "#735797",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  steel: "#B7B7CE",
};

const PokemonCard = ({ pokemon, selectedLanguage }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ textAlign: 'center', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
        <img src={pokemon.image} alt={pokemon.names[selectedLanguage]} style={{ width: '80px', height: '80px' }} />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {pokemon.names[selectedLanguage]}
          </Typography>
          <Typography variant="body2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                style={{
                  backgroundColor: typeColors[type.toLowerCase()],
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  margin: '4px',
                  display: 'inline-block',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                {typeData[type.toLowerCase()]?.translations[selectedLanguage]}
              </span>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;
