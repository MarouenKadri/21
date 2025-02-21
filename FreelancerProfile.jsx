import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Grid,
  Rating,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import WorkIcon from "@mui/icons-material/Work";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import YardIcon from "@mui/icons-material/Yard";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BuildIcon from "@mui/icons-material/Build";
import { keyframes } from "@emotion/react";

// Animation pour le bouton
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Animation d'apparition
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const freelancer = {
  name: "Jean Martin",
  avatar: "https://via.placeholder.com/150",
  badges: ["Expérimenté", "Certifié", "Fiable"],
  rating: 4.8,
  reviews: 45,
  earnings: "15,000€",
  completedMissions: 150,
  level: "Professionnel",
  location: "Lyon, France",
  bio: "Je suis un professionnel polyvalent spécialisé dans le ménage, le jardinage, la plomberie et le bricolage. Avec plus de 10 ans d'expérience, je m'engage à fournir un travail de qualité et à répondre à vos besoins avec efficacité et sérieux.",
  services: ["Ménage", "Jardinage", "Plomberie", "Bricolage"],
  skills: ["Nettoyage approfondi", "Taille de haies", "Réparation de fuites", "Montage de meubles"],
  testimonials: [
    {
      text: "Jean a fait un excellent travail de nettoyage. Ma maison n'a jamais été aussi propre ! Je le recommande vivement.",
      author: "Marie Dupont",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Un jardinier très compétent et attentionné. Mon jardin est magnifique grâce à lui !",
      author: "Pierre Leroy",
      avatar: "https://via.placeholder.com/50",
    },
  ],
  availability: "Actuellement disponible pour de nouvelles missions.",
  works: [
    {
      title: "Nettoyage complet d'une maison",
      description: "Nettoyage approfondi d'une maison de 150m².",
      image: "https://via.placeholder.com/300x200?text=Nettoyage",
    },
    {
      title: "Taille de haies et entretien de jardin",
      description: "Taille de haies et entretien d'un jardin de 500m².",
      image: "https://via.placeholder.com/300x200?text=Jardinage",
    },
    {
      title: "Réparation de fuite d'eau",
      description: "Réparation d'une fuite d'eau sous un évier.",
      image: "https://via.placeholder.com/300x200?text=Plomberie",
    },
  ],
};

const FreelancerProfile = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 800,
        margin: "auto",
        mt: 4,
        p: 3,
        borderRadius: 5,
        boxShadow: 3,
        bgcolor: theme.palette.background.paper,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        {/* Section Avatar et Informations */}
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src={freelancer.avatar}
              sx={{
                width: 100,
                height: 100,
                border: "3px solid",
                borderColor: theme.palette.primary.main,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              gutterBottom
              sx={{ fontFamily: "Arial, sans-serif" }}
            >
              {freelancer.name}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              fontStyle="italic"
              gutterBottom
              sx={{ fontFamily: "Arial, sans-serif" }}
            >
              {freelancer.level}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              mt={1}
              bgcolor="#f1f1f1"
              p={1}
              borderRadius={2}
            >
              <LocationOnIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
              <Typography
                variant="body2"
                color="textPrimary"
                sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
              >
                {freelancer.location}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Section Présentation */}
        <Box mt={4}>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}
          >
            {freelancer.bio}
          </Typography>
        </Box>

        {/* Badges */}
        <Grid container spacing={1} mt={2}>
          {freelancer.badges.map((badge, index) => (
            <Grid item key={index}>
              <Chip
                icon={<BuildIcon />}
                label={badge}
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 2, fontWeight: "bold", fontFamily: "Arial, sans-serif" }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Section Services */}
        <Box mt={4}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            Services Proposés
          </Typography>
          <Grid container spacing={2}>
            {freelancer.services.map((service, index) => (
              <Grid item key={index}>
                <Chip
                  icon={
                    service === "Ménage" ? (
                      <CleaningServicesIcon />
                    ) : service === "Jardinage" ? (
                      <YardIcon />
                    ) : service === "Plomberie" ? (
                      <PlumbingIcon />
                    ) : (
                      <BuildIcon />
                    )
                  }
                  label={service}
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 2, fontWeight: "bold", fontFamily: "Arial, sans-serif" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section Évaluation */}
        <Grid container alignItems="center" spacing={2} mt={3}>
          <Grid item>
            <Rating
              value={freelancer.rating}
              precision={0.1}
              readOnly
              size="large"
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontFamily: "Arial, sans-serif" }}
            >
              {freelancer.rating} ({freelancer.reviews} avis)
            </Typography>
          </Grid>
        </Grid>

        {/* Section Statistiques */}
        <Grid container spacing={2} mt={3}>
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <WorkIcon color="primary" sx={{ mr: 1 }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                color="textPrimary"
                sx={{ fontFamily: "Arial, sans-serif" }}
              >
                {freelancer.completedMissions} missions
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <EuroIcon color="primary" sx={{ mr: 1 }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                color="textPrimary"
                sx={{ fontFamily: "Arial, sans-serif" }}
              >
                {freelancer.earnings}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Section Compétences */}
        <Box mt={4}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            Compétences
          </Typography>
          <Grid container spacing={2}>
            {freelancer.skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 2, fontWeight: "bold", fontFamily: "Arial, sans-serif" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section Témoignages */}
        <Box mt={4}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            Témoignages Clients
          </Typography>
          <Grid container spacing={2}>
            {freelancer.testimonials.map((testimonial, index) => (
              <Grid item key={index} xs={12} sm={6}>
                <Box
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 3,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      sx={{ fontFamily: "Arial, sans-serif" }}
                    >
                      {testimonial.author}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}
                  >
                    "{testimonial.text}"
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section Travaux Réalisés */}
        <Box mt={4}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            Travaux Réalisés
          </Typography>
          <Grid container spacing={2}>
            {freelancer.works.map((work, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Box p={2}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ fontFamily: "Arial, sans-serif" }}
                    >
                      {work.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ fontFamily: "Arial, sans-serif" }}
                    >
                      {work.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Bouton Contacter */}
        <Box mt={4} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 50,
              px: 4,
              boxShadow: 3,
              animation: `${pulseAnimation} 2s infinite`,
              "&:hover": {
                animation: "none",
                transform: "scale(1.05)",
              },
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Contacter Jean
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FreelancerProfile;