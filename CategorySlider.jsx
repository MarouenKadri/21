import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Paper, styled, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from "@mui/icons-material";

const CATEGORIES = [
  { name: "Ménage", icon: "🧹" },
  { name: "Déménagement", icon: "🛆" },
  { name: "Jardinage", icon: "🌱" },
  { name: "Mécanique", icon: "🔧" },
  { name: "Maçonnerie", icon: "🧱" },
  { name: "Plomberie", icon: "🚰" },
  { name: "Électricité", icon: "⚡" },
  { name: "Cours d’informatique", icon: "💻" },
  { name: "Carrosserie", icon: "🚗" },  
  { name: "Chauffage", icon: "🔥" }, 
  { name: "Climatisation", icon: "❄️" }, 
  { name: "Garde d’animaux", icon: "🐶" }, 
  { name: "Événementiel & Animation", icon: "🎉" },    
];

const CategoryCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  borderRadius: "10px",
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  fontSize: "0.9rem",
  width: "90px",
  height: "90px",
  minWidth: "90px",
  minHeight: "90px",
  boxShadow: "none",
  "&:hover": {
    transform: "translateY(-2px)",
    backgroundColor: theme.palette.action.hover,
  },
}));

const CategorySlider = () => {
  const theme = useTheme();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setVisibleCount(3);
      } else if (width < 960) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const getVisibleItems = () => {
    return [...CATEGORIES, ...CATEGORIES].slice(startIndex, startIndex + visibleCount);
  };

  const scroll = (direction) => {
    setStartIndex((prevIndex) => {
      let newIndex = prevIndex + direction * visibleCount;
      if (newIndex < 0) newIndex = CATEGORIES.length - visibleCount;
      if (newIndex >= CATEGORIES.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "80%", maxWidth: "1000px", justifyContent: "center", gap: 1 }}>
        <IconButton onClick={() => scroll(-1)} aria-label="Gauche">
          <ArrowBackIosIcon />
        </IconButton>

        <Box sx={{ display: "grid", gridTemplateColumns: `repeat(${visibleCount}, 1fr)`, gap: 1 }}>
          {getVisibleItems().map((cat, index) => (
            <CategoryCard key={index} elevation={0}>
              <Typography variant="h5">{cat.icon}</Typography>
              <Typography variant="caption" sx={{ mt: 1, textAlign: "center" }}>{cat.name}</Typography>
            </CategoryCard>
          ))}
        </Box>

        <IconButton onClick={() => scroll(1)} aria-label="Droite">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CategorySlider;
