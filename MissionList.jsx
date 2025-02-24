import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Box,
  Card,
  Typography,
  Button,
  Grid,
  CardMedia,
  Avatar,
  IconButton,
  Modal,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const defaultImage = "https://via.placeholder.com/300";

const missionsData = [
  {
    id: "1",
    title: "Cours d'informatique",
    date: "Jeudi 20 février 2025 de 20:30 à 22:30 (2h)",
    location: "Paris, France",
    budget: { min: 50, max: 100 },
    images: ["https://via.placeholder.com/300", "https://via.placeholder.com/301"],
    details: "Description détaillée de la mission de cours d'informatique.",
    client: {
      name: "Jean Dupont",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  ...Array.from({ length: 2 }, (_, i) => ({
    id: String(i + 2),
    title: `Mission ${i + 2}`,
    date: "Date aléatoire",
    location: "Lieu aléatoire",
    budget: { min: 50, max: 100 },
    images: ["https://via.placeholder.com/300"],
    details: "Description détaillée de la mission.",
    client: {
      name: `Client ${i + 2}`,
      avatar: `https://randomuser.me/api/portraits/men/${i + 2}.jpg`,
    },
  })),
];

const OngoingRequests = ({ missionsData, handleOfferMission, imageIndex, handleNextImage, handlePrevImage, handleImageClick }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {missionsData.map((mission) => (
        <Grid item xs={12} key={mission.id}>
          <Card
            sx={{
              mb: 3,
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 6,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                mb: 2,
              }}
            >
              {mission.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "flex-start" },
                gap: 3,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "35%" },
                  position: "relative",
                  cursor: "pointer",
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
                onClick={() => handleImageClick(mission)}
              >
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage(e, mission.id);
                  }}
                  sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", zIndex: 1, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <ArrowBack />
                </IconButton>
                <CardMedia
                  component="img"
                  height="200"
                  image={mission.images[imageIndex[mission.id]] || defaultImage}
                  alt={mission.title}
                  sx={{ width: "100%", borderRadius: 3, transition: "transform 0.3s" }}
                />
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage(e, mission.id);
                  }}
                  sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", zIndex: 1, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <ArrowForward />
                </IconButton>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    borderRadius: 2,
                    px: 1,
                    fontSize: "0.875rem",
                  }}
                >
                  {`${imageIndex[mission.id] + 1}/${mission.images.length}`}
                </Box>
              </Box>

              <Box
                sx={{
                  width: { xs: "100%", md: "65%" },
                }}
              >
                <Typography color="textSecondary">📍 {mission.location}</Typography>
                <Typography color="textSecondary">📅 {mission.date}</Typography>
                <Typography color="green" sx={{ fontWeight: "bold", mt: 1 }}>
                  💰 Budget: {mission.budget.min}€ - {mission.budget.max}€
                </Typography>

                {/* Afficher le profil du client */}
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Avatar src={mission.client.avatar} alt={mission.client.name} />
                  <Typography sx={{ ml: 2 }}>{mission.client.name}</Typography>
                </Box>

                <Accordion sx={{ mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>Détails de la mission</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography><strong>Description:</strong> {mission.details}</Typography>
                  </AccordionDetails>
                </Accordion>

                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOfferMission(mission)}
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "bold",
                      px: 4,
                      py: 1,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Offrir
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const Mission = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedMission, setSelectedMission] = useState(null);
  const [imageIndex, setImageIndex] = useState(
    missionsData.reduce((acc, mission) => ({ ...acc, [mission.id]: 0 }), {})
  );
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  const handleOfferMission = (mission) => {
    setSelectedMission(mission);
    setShowBidModal(true);
  };

  const handleCloseBidModal = () => {
    setShowBidModal(false);
    setBidAmount("");
  };

  const handleConfirmBid = () => {
    // Handle the bid confirmation logic here
    console.log(`Offre de ${bidAmount}€ pour la mission : ${selectedMission.title}`);
    handleCloseBidModal();
  };

  const handleNextImage = (e, missionId) => {
    e.stopPropagation();
    setImageIndex((prevIndexes) => ({
      ...prevIndexes,
      [missionId]: (prevIndexes[missionId] + 1) % missionsData.find((m) => m.id === missionId).images.length,
    }));
  };

  const handlePrevImage = (e, missionId) => {
    e.stopPropagation();
    setImageIndex((prevIndexes) => ({
      ...prevIndexes,
      [missionId]: (prevIndexes[missionId] - 1 + missionsData.find((m) => m.id === missionId).images.length) %
        missionsData.find((m) => m.id === missionId).images.length,
    }));
  };

  const handleImageClick = (mission) => {
    setEnlargedImage(mission);
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
  };

  return (
    <Container   maxWidth="md" sx={{ mt: 4 }} >
      <OngoingRequests
        missionsData={missionsData}
        handleOfferMission={handleOfferMission}
        imageIndex={imageIndex}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
        handleImageClick={handleImageClick}
      />

      <Modal
        open={Boolean(enlargedImage)}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            maxHeight: "90%",
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", right: 16, top: 16, zIndex: 1 }}
          >
            <Close />
          </IconButton>

          {enlargedImage && (
            <Box sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                height="400"
                image={enlargedImage.images[imageIndex[enlargedImage.id]] || defaultImage}
                alt={enlargedImage.title}
                sx={{ width: "100%", borderRadius: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                <IconButton
                  onClick={(e) => handlePrevImage(e, enlargedImage.id)}
                  sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <ArrowBack />
                </IconButton>
                <IconButton
                  onClick={(e) => handleNextImage(e, enlargedImage.id)}
                  sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <ArrowForward />
                </IconButton>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  borderRadius: 2,
                  px: 1,
                  fontSize: "0.875rem",
                  display: "inline-block",
                }}
              >
                {`${imageIndex[enlargedImage.id] + 1}/${enlargedImage.images.length}`}
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      <Dialog open={showBidModal} onClose={handleCloseBidModal}>
        <DialogTitle>Proposer une offre</DialogTitle>
        <DialogContent>
          {selectedMission && (
            <Typography variant="body1" sx={{ mb: 2 }}>
              Vous proposez une offre pour la mission : <b>{selectedMission.title}</b>
            </Typography>
          )}
          <TextField
            label="Montant de votre offre (€)"
            type="number"
            fullWidth
            variant="outlined"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBidModal} color="secondary">Annuler</Button>
          <Button onClick={handleConfirmBid} color="primary" variant="contained" disabled={!bidAmount}>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </Container>






  );   


  
};

export default Mission;