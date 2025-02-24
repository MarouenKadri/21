import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import YardIcon from "@mui/icons-material/Yard";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Link } from "react-router-dom";

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

export default CoachCard;