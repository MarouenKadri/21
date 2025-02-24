import React from "react";
import { Card, CardContent, Avatar, Typography, Box, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Carousel from "./Carousel";    
import image1 from "./image1.png" ; 
import image2 from "./image2.jpg" ;
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

const MissionCard = ({ mission }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "350px", md: "400px" },
        minHeight: 520,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        boxShadow: 5,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Carousel */}
      <Box sx={{ position: "relative", height: "200px" }}>
        <Carousel 
    autoPlayInitial={true}
    showTitle={false}
    autoplaySpeed={5000}
    slides={slidesPage1}   />

      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={mission.profileAvatar} alt={mission.profileName} sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography variant="body1" fontWeight="bold">
            {mission.profileName}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <LocationOnIcon sx={{ color: "gray", fontSize: 18, mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {mission.location}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            <EventIcon sx={{ color: "gray", fontSize: 18, mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {mission.date}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ScheduleIcon sx={{ color: "gray", fontSize: 18, mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {mission.heure}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            <AttachMoneyIcon sx={{ color: "gray", fontSize: 18, mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Min: {mission.budgetMin}€
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <AttachMoneyIcon sx={{ color: "gray", fontSize: 18, mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Max: {mission.budgetMax}€
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {mission.description}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Link to={`/mission/${mission.id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" sx={{ textTransform: "none", borderRadius: 3 }}>
              Faire une offre
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
