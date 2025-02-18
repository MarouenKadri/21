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
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const missionsFreelance = [
  {
    id: "1",
    title: "Développement d'un site web",
    date: "Lundi 25 février 2025",
    client: "Jean Dupont",
    clientAvatar: "https://via.placeholder.com/50", // Image du client
    status: "En cours",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "2",
    title: "Création d'un logo",
    date: "Samedi 10 février 2025",
    client: "Marie Curie",
    clientAvatar: "https://via.placeholder.com/51", // Image du client
    status: "Terminée",
    image: "https://via.placeholder.com/301",
  },
];

const FreelancerMissions = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [missions, setMissions] = useState(missionsFreelance);

  const handleCompleteMission = (id) => {
    setMissions((prevMissions) =>
      prevMissions.map((mission) =>
        mission.id === id ? { ...mission, status: "Terminée" } : mission
      )
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Tabs
        value={tabIndex}
        onChange={(event, newIndex) => setTabIndex(newIndex)}
        centered
      >
        <Tab label="Missions en cours" />
        <Tab label="Missions terminées" />
      </Tabs>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {missions
          .filter((mission) =>
            tabIndex === 0 ? mission.status === "En cours" : mission.status === "Terminée"
          )
          .map((mission) => (
            <Grid item xs={12} sm={6} key={mission.id}>
              <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={mission.image}
                  alt={mission.title}
                  sx={{ borderRadius: 2 }}
                />
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={mission.clientAvatar} alt={mission.client} />
                    <Typography variant="body1" fontWeight="bold">
                      {mission.client}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                    {mission.title}
                  </Typography>
                  <Typography color="textSecondary">📅 {mission.date}</Typography>
                </CardContent>
                {mission.status === "En cours" && (
                  <CardActions>
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      onClick={() => handleCompleteMission(mission.id)}
                      startIcon={<CheckCircle />}
                    >
                      Marquer comme terminée
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default FreelancerMissions;
