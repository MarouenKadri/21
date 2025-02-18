import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Rating,
  Box,
  Divider,
  Paper,
  Chip,
  LinearProgress,
  useTheme,
  Avatar,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Carousel from "react-material-ui-carousel";
import "leaflet/dist/leaflet.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
const [visibleReviews, setVisibleReviews] = useState(3); // Affiche 3 avis par défaut

const loadMoreReviews = () => {
  setVisibleReviews((prev) => prev + 3); // Charge 3 avis supplémentaires
};

<Box sx={{ maxHeight: 400, overflowY: "auto", pr: 1 }}>
  {freelancer.reviews.slice(0, visibleReviews).map((review, index) => (
    <Paper key={index} elevation={2} sx={{ mt: 2, p: 3, borderRadius: 3 }}>
      {/* Contenu de l'avis */}
    </Paper>
  ))}
  {visibleReviews < freelancer.reviews.length && (
    <Button variant="outlined" fullWidth onClick={loadMoreReviews} sx={{ mt: 2 }}>
      Voir plus d'avis
    </Button>
  )}
</Box>

const freelancer = {
  name: "Nicolas",
  avatar: "https://via.placeholder.com/150",
  jobTitle: "Déménageur",
  location: "1 an chez Yoojo",
  rate: "16 €/h",
  reviewsCount: 18,
  rating: 5.0,
  latitude: 48.8566,
  longitude: 2.3522,
  punctuality: 90,
  communication: 80,
  professionalism: 96,
  missionsCompleted: 50,
  amountEarned: "12 340 €",
  level: "Professionnel",
  isVerified: true,
  projects: [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ],
  reviews: [
    {
      name: "Laura",
      avatar: "https://via.placeholder.com/50",
      date: "Il y a 5 mois",
      rating: 5,
      text: "Très bon travail.",
      service: "Déplacer de l'électroménager",
    },
    {
      name: "Aurélien",
      avatar: "https://via.placeholder.com/50",
      date: "Il y a 3 mois",
      rating: 5,
      text: "Très bien passé, je recommande.",
      service: "Enlèvement de déchets verts",
    },  
    {
      name: "Aurélien",
      avatar: "https://via.placeholder.com/50",
      date: "Il y a 3 mois",
      rating: 5,
      text: "Très bien passé, je recommande.",
      service: "Enlèvement de déchets verts",
    },  

    {
      name: "Aurélien",
      avatar: "https://via.placeholder.com/50",
      date: "Il y a 3 mois",
      rating: 5,
      text: "Très bien passé, je recommande.",
      service: "Enlèvement de déchets verts",
    },  





  ],
  education: [
    {
      institution: "Université Paris-Saclay",
      degree: "Licence en Logistique",
      year: "2020",
    },
    {
      institution: "Certificat Yoojo",
      degree: "Déménagement Professionnel",
      year: "2021",
    },
  ],
  languages: ["Français", "Anglais"],
  skills: ["Déménagement résidentiel", "Manutention lourde", "Logistique", "Conduite de camion"],
  about: "Je suis un déménageur professionnel avec plus de 5 ans d'expérience. Je propose des services de qualité pour vos déménagements résidentiels et professionnels. Polyvalent et fiable, je m'adapte à vos besoins pour garantir une prestation sans stress.",
};

const FreelancerProfile = () => {
  const theme = useTheme();
  const [missionsCount, setMissionsCount] = useState(0);

  useEffect(() => {
    if (missionsCount < freelancer.missionsCompleted) {
      const timer = setTimeout(() => {
        setMissionsCount(missionsCount + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [missionsCount]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        bgcolor: theme.palette.background.default,
      }}
    >
     <Grid item xs={12} sm={12} md={3} sx={{ height: "80%", overflowY: "auto" }}>
  <Card sx={{ height: "100%", boxShadow: 1, borderRadius: 0, bgcolor: "background.paper" }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Statistiques
      </Typography>
      {/* Sliders pour les statistiques */}
      {[
        { label: "Ponctualité", value: freelancer.punctuality, icon: <AccessTimeIcon /> },
        { label: "Communication", value: freelancer.communication, icon: <ChatBubbleOutlineIcon /> },
        { label: "Professionnalisme", value: freelancer.professionalism, icon: <WorkOutlineIcon /> },
      ].map((stat, index) => (
        <Box key={index} mb={2}>
          <Box display="flex" alignItems="center" mb={1}>
            {stat.icon}
            <Typography variant="body2" fontWeight="bold" ml={1}>
              {stat.label} ({stat.value}%)
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={stat.value}
            sx={{ height: 10, borderRadius: 5, transition: "width 0.5s ease-in-out" }}
            color="primary"
          />
        </Box>
      ))}

      {/* Compteur animé pour les missions réalisées */}
      <Box mt={2} display="flex" alignItems="center">
        <Typography variant="body2" fontWeight="bold" sx={{ flexGrow: 1 }}>
          Missions Réalisées
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="primary">
          {missionsCount}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Avis des clients
      </Typography>
      {/* Section des avis avec défilement */}
      <Box sx={{ maxHeight: 400, overflowY: "auto", pr: 1 }}>
        {freelancer.reviews.map((review, index) => (
          <Paper key={index} elevation={2} sx={{ mt: 2, p: 3, borderRadius: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={review.avatar} sx={{ width: 50, height: 50 }} />
              </Grid>
              <Grid item xs>
                <Typography variant="subtitle1" fontWeight="bold">
                  {review.name} - {review.date}
                </Typography>
                <Rating value={review.rating} precision={0.5} readOnly />
                <Typography variant="body2" mt={1}>
                  {review.text}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {review.service}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </CardContent>
  </Card>
</Grid>
    </Box>
  );
};

export default FreelancerProfile;