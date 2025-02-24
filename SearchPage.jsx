import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const SearchPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    minRating: 0,
    minMissions: 0,
    maxPrice: 100,
    services: [],
    status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSliderChange = (name) => (event, newValue) => {
    setFilters({ ...filters, [name]: newValue });
  };

  const handleSearch = () => {
    // Convertir les filtres en paramètres d'URL
    const queryParams = new URLSearchParams(filters).toString();
    navigate(`/coaches?${queryParams}`);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Rechercher un coach
      </Typography>
      <Grid container spacing={3}>
        {/* Localisation */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Localisation"
            name="location"
            value={filters.location}
            onChange={handleChange}
          />
        </Grid>

        {/* Slider pour les avis minimum */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Avis minimum : {filters.minRating}
          </Typography>
          <Slider
            value={filters.minRating}
            onChange={handleSliderChange("minRating")}
            min={0}
            max={5}
            step={0.1}
            valueLabelDisplay="auto"
          />
        </Grid>

        {/* Slider pour les missions réalisées */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Missions réalisées : {filters.minMissions}
          </Typography>
          <Slider
            value={filters.minMissions}
            onChange={handleSliderChange("minMissions")}
            min={0}
            max={200}
            step={10}
            valueLabelDisplay="auto"
          />
        </Grid>

        {/* Slider pour le prix maximum */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Prix maximum : {filters.maxPrice}€
          </Typography>
          <Slider
            value={filters.maxPrice}
            onChange={handleSliderChange("maxPrice")}
            min={0}
            max={100}
            step={5}
            valueLabelDisplay="auto"
          />
        </Grid>

        {/* Filtre pour le statut */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Statut</InputLabel>
            <Select
              name="status"
              value={filters.status}
              onChange={handleChange}
              label="Statut"
            >
              <MenuItem value="">Tous</MenuItem>
              <MenuItem value="Ambassadeur">Ambassadeur</MenuItem>
              <MenuItem value="Amateur">Amateur</MenuItem>
              <MenuItem value="Hautement qualifié">Hautement qualifié</MenuItem>
              <MenuItem value="Étudiant">Étudiant</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Filtre pour les services */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Services</InputLabel>
            <Select
              multiple
              name="services"
              value={filters.services}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {["Ménage", "Jardinage", "Plomberie", "Réparations", "Electricité", "Maçonnerie"].map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Bouton de recherche */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSearch}
          >
            Rechercher
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchPage;