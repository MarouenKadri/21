import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Star, MonetizationOn } from "@mui/icons-material";

const missionsData = [
  {
    id: "1",
    title: "Montage meuble IKEA",
    date: "Samedi 10 Février",
    budget: "40€ - 60€",
    icon: "🛠️",
    offers: [
      {
        id: "101",
        provider: "Jean C.",
        price: 50,
        rating: 4.8,
        completedJobs: 15,
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        phone: "+33 6 12 34 56 78",
      },
    ],
  },
];

const ReferralPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [acceptedOffers, setAcceptedOffers] = useState({});
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleAcceptOffer = (missionId, offer) => {
    setSelectedOffer({ missionId, ...offer });
  };

  const confirmAcceptOffer = () => {
    if (selectedOffer) {
      setAcceptedOffers((prev) => ({
        ...prev,
        [selectedOffer.missionId]: selectedOffer,
      }));
      setShowContactModal(true);
      setSelectedOffer(null);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 30 }}>
      <Box display="flex">
        <Box width={250}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tabIndex}
            onChange={(event, newIndex) => setTabIndex(newIndex)}
          >
            <Tab label="Demandes en cours" />
            <Tab label="Historique" />
          </Tabs>
        </Box>
        <Box flexGrow={1} p={3}>{tabIndex === 0 ? <OngoingRequests acceptedOffers={acceptedOffers} handleAcceptOffer={handleAcceptOffer} /> : <History />}</Box>
      </Box>
    </Container>
  );
};

function OngoingRequests({ acceptedOffers, handleAcceptOffer }) {
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Typography variant="h6">📋 Mes Missions & Offres Reçues</Typography>
      {missionsData.map((mission) => (
        <Card key={mission.id} sx={{ mb: 3, p: 2, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">{mission.icon} {mission.title}</Typography>
            <Typography>📅 {mission.date}</Typography>
            <Typography>💰 Budget estimé : {mission.budget}</Typography>
            <Typography sx={{ mt: 2, fontWeight: "bold" }} color="primary">⭐ Offres reçues :</Typography>
            {mission.offers.map((offer) => (
              <Card key={offer.id} sx={{ mt: 2, p: 2, borderRadius: 2, boxShadow: 1 }}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={offer.photo} sx={{ width: 50, height: 50 }} />
                  <Box>
                    <Typography variant="h6">{offer.provider}</Typography>
                    <Typography>🔨 {offer.completedJobs} missions complétées</Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      ⭐ {offer.rating} <Star color="primary" />
                    </Box>
                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <MonetizationOn fontSize="small" color="success" />
                      <Typography fontWeight="bold" color="green">💰 {offer.price}€</Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: "auto" }}
                    onClick={() => handleAcceptOffer(mission.id, offer)}
                  >
                    Accepter
                  </Button>
                </Box>
              </Card>
            ))}
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
}

function History() {
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Typography variant="h6">Historique</Typography>
      <Typography variant="body1" color="textSecondary">Aucun historique disponible.</Typography>
    </Paper>
  );
}

export default ReferralPage;
