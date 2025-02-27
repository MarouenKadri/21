// CoachList.js
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import CoachCard from "./CoachCard"; // Assurez-vous que ce chemin est correct
import FilterBar from "../FilterBar"; // Importez le composant FilterBar  
import image1 from "./image1.png" ; 
import image2 from "./image2.jpg";

// Données des coaches (identique à votre code actuel)
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


 
];

const CoachList = () => {
  const [filters, setFilters] = useState({
    service: "",
    location: "",
    evaluation: 0,
  });

  return (
    <Box sx={{ p: 3 }}>
      {/* Barre de filtres */}
      {/* <FilterBar filters={filters} setFilters={setFilters} /> */}

      {/* Grille des cartes CoachCard */}
      <Grid container spacing={3} justifyContent="center">
        {coaches.map((coach) => (
          <Grid item key={coach.id} xs={12} sm={6} md={4} sx={{ display: "flex", alignItems: "stretch" }}>
            <CoachCard coach={coach} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoachList;