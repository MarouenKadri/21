import React, { useState } from "react";
import {
  Button, Box, TextField, Paper, InputAdornment, Typography, Rating, 
  Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import { LocationOn } from "@mui/icons-material";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    service: "",
    location: "",
    evaluation: 0,
  });
  const [openServiceDialog, setOpenServiceDialog] = useState(false);

  const handleReset = () => {
    setFilters({
      service: "",
      location: "",
      evaluation: 0,
    });
  };

  const handleServiceClick = () => {
    setOpenServiceDialog(true);
  };

  const handleServiceClose = () => {
    setOpenServiceDialog(false);
  };

  const handleServiceSelect = (value) => {
    setFilters({ ...filters, service: value });
    setOpenServiceDialog(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        gap: 3,
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: 'background.paper',
      }}
    >
      {/* Avis */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body1" fontWeight="medium">
          ⭐ Avis
        </Typography>
        <Rating
          name="evaluation"
          value={filters.evaluation}
          onChange={(event, newValue) => setFilters({ ...filters, evaluation: newValue })}
          precision={0.5}
          size="large"
        />
      </Box>

      {/* Service */}
      <Box sx={{ minWidth: 250, flex: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleServiceClick}
          sx={{
            justifyContent: 'flex-start',
            textTransform: 'none',
            py: 1.5,
            borderRadius: 2,
            borderColor: 'divider',
            '&:hover': { borderColor: 'primary.main' },
          }}
        >
          <Typography variant="body1" fontWeight="medium">
            🎯 Service: {filters.service || "Tous"}
          </Typography>
        </Button>
      </Box>

      {/* Localisation */}
      <TextField
        size="small"
        label={
          <Typography variant="body1" fontWeight="medium">
            📍 Localisation
          </Typography>
        }
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        sx={{ minWidth: 200 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn color="primary" />
            </InputAdornment>
          ),
        }}
      />

      {/* Bouton Réinitialiser */}
      <Button
        variant="outlined"
        color="secondary"
        size="medium"
        sx={{ px: 3, borderRadius: 2, transition: "all 0.3s ease-in-out" }}
        onClick={handleReset}
      >
        <Typography variant="body1" fontWeight="medium">
          Réinitialiser
        </Typography>
      </Button>

      {/* Pop-up pour le service */}
      <Dialog open={openServiceDialog} onClose={handleServiceClose}>
        <DialogTitle>
          <Typography variant="body1" fontWeight="medium">
            Sélectionnez un service
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {["Website Design", "Logo Design", "Mobile App Development", "Data Entry", "Article Writing"].map((service) => (
              <Button
                key={service}
                variant="outlined"
                onClick={() => handleServiceSelect(service)}
                sx={{
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  py: 1.5,
                  borderRadius: 2,
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                <Typography variant="body1" fontWeight="medium">
                  {service}
                </Typography>
              </Button>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleServiceClose} color="primary">
            <Typography variant="body1" fontWeight="medium">
              Fermer
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default FilterBar;
