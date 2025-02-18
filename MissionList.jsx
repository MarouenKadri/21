import React, { useState } from "react";
import {
  Container, Grid, Card, CardContent, Typography, Box, Avatar, Button, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField
} from "@mui/material";

const missionsData = [
  {
    id: "1",
    title: "Montage meuble IKEA",
    location: "Paris 75015",
    date: "Samedi 10 Février",
    time: "14h - 17h",
    budget: "40€ - 60€",
    description: "Besoin d'aide pour monter un meuble IKEA. Prévoir outils nécessaires.",
    requesterName: "Alice Dupont",
    requesterPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    title: "Peinture murale",
    location: "Lyon 69002",
    date: "Dimanche 11 Février",
    time: "10h - 15h",
    budget: "80€ - 120€",
    description: "Peinture d'une chambre de 12m² avec couleur fournie par le client.",
    requesterName: "Marc Leclerc",
    requesterPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function MissionList() {
  const [selectedMission, setSelectedMission] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  const handleOpenDetailsModal = (mission) => {
    setSelectedMission(mission);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const handleOpenBidModal = (mission) => {
    setSelectedMission(mission);
    setShowBidModal(true);
  };

  const handleCloseBidModal = () => {
    setShowBidModal(false);
    setBidAmount("");
  };

  const handleConfirmBid = () => {
    console.log(`Offre de ${bidAmount}€ soumise pour la mission : ${selectedMission.title}`);
    handleCloseBidModal();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {missionsData.map((mission) => (
          <Grid item xs={12} sm={6} md={4} key={mission.id}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#f9f9f9",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar src={mission.requesterPhoto} sx={{ width: 50, height: 50 }} />
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {mission.title}
                    </Typography>
                    <Typography variant="body2" color="gray">👤 {mission.requesterName}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2">📍 {mission.location}</Typography>
                <Typography variant="body2">📅 {mission.date}</Typography>
                <Typography variant="body2">⏰ {mission.time}</Typography>
                <Typography fontWeight="bold" color="green">💰 {mission.budget}</Typography>
                <Box mt={2} display="flex" gap={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleOpenDetailsModal(mission)}
                    sx={{ flexGrow: 1 }}
                  >
                    📜 Détails
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenBidModal(mission)}
                    sx={{ flexGrow: 1 }}
                  >
                    💸 Offrir
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal Détails */}
      <Dialog open={showDetailsModal} onClose={handleCloseDetailsModal}>
        <DialogTitle>Détails de la mission</DialogTitle>
        <DialogContent>
          {selectedMission && (
            <>
              <Typography variant="h6" fontWeight="bold">{selectedMission.title}</Typography>
              <Typography variant="body1" color="textSecondary">📍 {selectedMission.location}</Typography>
              <Typography variant="body1">📅 {selectedMission.date}</Typography>
              <Typography variant="body1">⏰ {selectedMission.time}</Typography>
              <Typography variant="body1" fontWeight="bold" color="green">💰 {selectedMission.budget}</Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>{selectedMission.description}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetailsModal} color="primary">Fermer</Button>
        </DialogActions>
      </Dialog>

      {/* Modal pour proposer une offre */}
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
}
