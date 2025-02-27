import React, { useState } from "react";
import {
  Container,
  Box,
  Card,
  Typography,
  Button,
  Grid,
  Avatar,
  useTheme,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import image1 from "./image1.png";
import image2 from "./image2.jpg";

const defaultImage = "https://via.placeholder.com/300";

const slidesPage1 = [
  {
    image: image1,
    title: "Working at University of Copenhagen",
  },
  {
    image: image1,
    title: "Grow Your Career with Us",
  },
  {
    image: image2,
    title: "Grow Your Career with Us",
  },
  {
    image: image2,
    title: "Grow Your Career with Us",
  },
];

const missionsData = [
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },



  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    image: "https://via.placeholder.com/300",
    details: "Description détaillée de la mission de cours d'informatique.",
    profileName: "John Doe",
    publicationDate: "20 février 2025",
    profileLink: "/profile/john-doe",
  },











];

const MissionCard = ({ mission }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");
  const [isOfferSubmitted, setIsOfferSubmitted] = useState(false); // État pour suivre si l'offre est soumise

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOfferSubmit = () => {
    // Simuler la soumission de l'offre
    console.log(`Offer Amount: ${offerAmount}`);
    setIsOfferSubmitted(true); // Marquer l'offre comme soumise
    handleClose(); // Fermer le modal
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
        mb: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        minHeight: "250px",
      }}
    >
      {/* Section Avatar et Nom */}
      <Box display="flex" alignItems="center">
        <Link to={mission.profileLink} style={{ textDecoration: "none", color: "inherit" }}>
          <Avatar sx={{ width: 35, height: 35, mr: 1 }} />
        </Link>
        <Box display="flex" flexDirection="column">
          <Link to={mission.profileLink} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography fontWeight="bold">{mission.profileName}</Typography>
          </Link>
        </Box>
        <IconButton sx={{ ml: "auto" }}>
          <MoreHorizIcon />
        </IconButton>
      </Box>

      {/* Détails de la mission */}
      <Box mt={1}>
        <Typography>{mission.details}</Typography>
      </Box>

      {/* Carrousel */}
      <Box mt={1} position="relative">
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            position: "absolute",
            top: 5,
            left: 5,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "2px 6px",
            borderRadius: 2,
            fontSize: "big",
          }}
        >
          {mission.title}
        </Typography>
        <Carousel
          autoPlayInitial={true}
          showTitle={false}
          autoplaySpeed={5000}
          slides={slidesPage1}
        />
      </Box>

      {/* Informations supplémentaires */}
      <Box mt={1}>
        <Typography fontSize="small" color="textSecondary">
          📍 {mission.location}
        </Typography>
        <Typography fontSize="small" color="textSecondary">
          📅 {mission.date}
        </Typography>
        <Typography fontSize="small" color="green" fontWeight="bold">
          💰 Budget: {mission.budget.min}€ - {mission.budget.max}€
        </Typography>
        <Typography fontSize="small" color="textSecondary">
          🕒 Date de publication: {mission.publicationDate}
        </Typography>
      </Box>

      {/* Bouton Faire une offre ou message de confirmation */}
      <Box display="flex" justifyContent="space-between" mt={1}>
        {isOfferSubmitted ? (
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontStyle: "italic" }}
          >
            Offre envoyée, en cours de traitement par le particulier.
          </Typography>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: 2, textTransform: "none" }}
            onClick={handleOpen}
          >
            Faire une offre
          </Button>
        )}
      </Box>

      {/* Modal pour entrer l'offre */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" mb={2}>
            Entrez votre offre
          </Typography>
          <TextField
            fullWidth
            label="Montant de l'offre"
            variant="outlined"
            type="number"
            value={offerAmount}
            onChange={(e) => setOfferAmount(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleOfferSubmit}
          >
            Envoyer l'offre
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};

const ReferralPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Grid container spacing={1}>
        {missionsData.map((mission) => (
          <Grid item xs={{ display: "flex", alignItems: "stretch" } } key={mission.id}    sm={4} md={5}                       >
            <MissionCard mission={mission} /> 
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReferralPage;
