import React, { useState, useCallback, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Pause, PlayArrow } from "@mui/icons-material";

const Carousel = React.memo(
  ({
    width = "100%", // Largeur par défaut
    height = "300px", // Hauteur par défaut
    autoPlayInitial = true, // Autoplay activé par défaut
    showTitle = true, // Afficher le titre par défaut
    autoplaySpeed = 1000, // Vitesse de l'autoplay par défaut (3 secondes)
    slides = [], // Données des slides par défaut (vide)
  }) => {
    const [autoPlay, setAutoPlay] = useState(autoPlayInitial); // État pour activer/désactiver l'autoplay
    const sliderRef = React.useRef(null); // Référence pour contrôler le slider

    // Configuration du Slider
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: autoPlay, // Activer/désactiver l'autoplay
      autoplaySpeed: autoplaySpeed, // Vitesse de l'autoplay
      arrows: false, // Nous gérons les flèches manuellement
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Transition fluide
      pauseOnHover: false, // Désactiver la pause au survol
    };

    // Gestion des événements
    const handlePrev = useCallback(() => sliderRef.current.slickPrev(), []);
    const handleNext = useCallback(() => sliderRef.current.slickNext(), []);
    const toggleAutoPlay = useCallback(() => {
      setAutoPlay((prev) => !prev); // Inverser l'état de l'autoplay
    }, []);

    // Effet pour forcer la mise à jour du Slider lorsque l'autoplay change
    useEffect(() => {
      if (sliderRef.current) {
        if (autoPlay) {
          sliderRef.current.slickPlay(); // Reprendre l'autoplay
        } else {
          sliderRef.current.slickPause(); // Stopper l'autoplay
        }
      }
    }, [autoPlay]);

    return (
      <Box sx={{ position: "relative", width, maxWidth: "1200px", margin: "auto", height }}>
        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <Box key={index} sx={{ position: "relative", width: "100%", height }}>
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {showTitle && ( // Afficher le titre seulement si showTitle est true
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(255, 255, 255, 0.8)",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    {slide.title}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Slider>

        {/* Boutons de navigation */}
        <Button onClick={handlePrev} sx={{ position: "absolute", top: "50%", left: "10px", color: "black" }}>
          <ArrowBackIos />
        </Button>
        <Button onClick={handleNext} sx={{ position: "absolute", top: "50%", right: "10px", color: "black" }}>
          <ArrowForwardIos />
        </Button>

        {/* Bouton Play/Pause */}
        <Button
          onClick={toggleAutoPlay}
          sx={{ position: "absolute", bottom: "10px", right: "10px", color: "black" }}
        >
          {autoPlay ? <Pause /> : <PlayArrow />}
        </Button>
      </Box>
    );
  }
);

export default Carousel;