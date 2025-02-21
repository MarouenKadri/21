import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Chip,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  TextField,
  InputAdornment,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import YardIcon from "@mui/icons-material/Yard";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Link } from "react-router-dom";
import image1 from "./image1.png";
import image2 from "./image2.jpg";

// Données des coaches
const coaches = [
  {
    id: 1,
    name: "Fleur",
    location: "Paris 16e",
    rating: 5,
    reviews: 21,
    price: 60,
    missions: 120,
    image: image1,
    ambassador: true,
    services: ["Ménage", "Jardinage"],
  },
  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },
  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },

  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },

  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },

  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },

  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },

  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },

  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },
  {
    id: 2,
    name: "Federico",
    location: "Lyon 3e (webcam)",
    rating: 5,
    reviews: 32,
    price: 35,
    missions: 85,
    image: image2,
    ambassador: true,
    services: ["Plomberie"],
  },






];

// Fonction pour obtenir l'icône d'un service
const getServiceIcon = (service) => {
  switch (service) {
    case "Ménage":
      return <CleaningServicesIcon fontSize="small" />;
    case "Jardinage":
      return <YardIcon fontSize="small" />;
    case "Plomberie":
      return <PlumbingIcon fontSize="small" />;
    default:
      return <BuildIcon fontSize="small" />;
  }
};

// Composant CoachCard
const CoachCard = ({ coach }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 350,
        minHeight: 480,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        m: "auto",
        borderRadius: 2,
        boxShadow: 5,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="220"
          image={coach.image}
          alt={`Photo de ${coach.name}`}
          sx={{ objectFit: "cover" }}
        />
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "6px 12px",
            borderRadius: 2,
          }}
        >
          {coach.name}
        </Typography>
      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        {/* Avis et Ambassadeur */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={0.5}>
            <StarIcon sx={{ color: "gold", fontSize: 18 }} />
            <Typography variant="body2">
              {coach.rating} <strong>({coach.reviews} avis)</strong>
            </Typography>
          </Box>
          {coach.ambassador && (
            <Chip label="Ambassadeur" color="secondary" size="small" />
          )}
        </Box>

        {/* Missions réalisées */}
        <Box display="flex" alignItems="center" mt={1}>
          <AssignmentTurnedInIcon sx={{ color: "green", fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {coach.missions} missions réalisées
          </Typography>
        </Box>

        {/* Localisation */}
        <Box mt={1} display="flex" alignItems="center">
          <LocationOnIcon sx={{ color: "gray", fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {coach.location}
          </Typography>
        </Box>

        <Divider sx={{ my: 1.5 }} />

        {/* Services proposés */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {coach.services.slice(0, 3).map((service, index) => (
            <Chip
              key={index}
              icon={getServiceIcon(service)}
              label={service}
              variant="outlined"
              sx={{ borderRadius: 3, fontSize: 11, fontWeight: "bold" }}
            />
          ))}
          {coach.services.length > 2 && (
            <Chip
              label="Voir plus"
              color="primary"
              size="small"
              sx={{ cursor: "pointer" }}
              onClick={handleOpen}
            />
          )}
        </Box>

        {/* Pop-up des services */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Services proposés par {coach.name}</DialogTitle>
          <DialogContent>
            {coach.services.map((service, index) => (
              <Chip
                key={index}
                icon={getServiceIcon(service)}
                label={service}
                variant="outlined"
                sx={{ m: 0.5, fontSize: 14 }}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fermer
            </Button>
          </DialogActions>
        </Dialog>

        {/* Prix et Réserver */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            {coach.price}€/h
          </Typography>
          <Link to={`/coach/${coach.id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" sx={{ textTransform: "none", borderRadius: 3 }}>
              Réserver
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

// Composant CoachList avec FilterBar intégré
const CoachList = () => {
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
    <Box sx={{ p: 3 }}>
      {/* Barre de filtres (FilterBar) */}  
      <Box >    
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          gap: 3,
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: 'background.paper',
          mb: 3, // Marge en bas pour espacer la barre de filtres des cartes
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
                <LocationOnIcon color="primary" />
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
      </Box>

      {/* Grille des cartes CoachCard */}  
      <Box>

    
      <Grid container spacing={3} justifyContent="center">
        {coaches.map((coach) => (
          <Grid item key={coach.id} xs={12} sm={6} md={4} sx={{ display: "flex", alignItems: "stretch" }}>
            <CoachCard coach={coach} />
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
};

export default CoachList;