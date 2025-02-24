import React from "react";
import { Box, Grid } from "@mui/material";
import MissionCard from "./MissionCard";
import image1 from "./image1.png";
import image2 from "./image2.jpg";

const missions = [
  {
    id: 1,
    name: "Jardinage",
    location: "Paris 16e",
    budgetMin: 40,
    budgetMax: 80,
    date: "25/10/2023",
    heure: "18:00",
    description: "Je cherche un jardinier expérimenté pour entretenir mon jardin.",
    images: [image1],
    profileName: "Jean Dupont",
    profileAvatar: "https://example.com/avatar1.jpg",
  },
  {
    id: 2,
    name: "Plomberie",
    location: "Lyon 3e",
    budgetMin: 50,
    budgetMax: 100,
    date: "26/10/2023",
    heure: "14:00",
    description: "Réparation d'une fuite d'eau dans la salle de bain.",
    images: [image2],
    profileName: "Marie Curie",
    profileAvatar: "https://example.com/avatar2.jpg",
  },
];

const MissionList = () => (
  <Box sx={{ p: 3, backgroundColor: "#fafafa" }}>
    <Grid container spacing={3} justifyContent="center">
      {missions.map((mission) => (
        <Grid item key={mission.id} xs={12} sm={6} md={4}>
          <MissionCard mission={mission} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default MissionList;
