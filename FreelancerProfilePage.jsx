import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Rating,
} from "@mui/material";

const ReviewsList = ({ reviews }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, pb: 4 }}>
      {/* Titre général */}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        sx={{ color: "#333" }}
      >
        ★ 5,0 (18 avis)
      </Typography>

      <Rating value={5} readOnly sx={{ display: "block", margin: "auto" }} />

      {/* Grille des avis */}
      <Grid container spacing={4} mt={3} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.2)",
                },
                bgcolor: "background.paper",
              }}
            >
              <CardContent>
                {/* Avatar et nom */}
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: review.avatarColor || "primary.main",
                      width: 50,
                      height: 50,
                      fontSize: "1.2rem",
                      marginRight: 2,
                    }}
                  >
                    {review.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      {review.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {review.duration}
                    </Typography>
                  </Box>
                </Box>

                {/* Note et commentaire */}
                <Rating value={review.rating} readOnly size="small" />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  mt={1}
                  sx={{ fontStyle: "italic" }}
                >
                  {review.time}
                </Typography>
                <Typography variant="body1" mt={1} fontWeight="500">
                  {review.comment}
                </Typography>

                {/* Catégorie */}
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    display: "block",
                    mt: 2,
                    fontWeight: "bold",
                    color: "primary.main",
                  }}
                >
                  {review.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewsList;
