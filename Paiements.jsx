import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";

const Paiements = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Tabs
        value={tabIndex}
        onChange={(event, newIndex) => setTabIndex(newIndex)}
        centered
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Moyen de paiement" />
        <Tab label="Politique d’annulation" />
      </Tabs>
      <Box sx={{ mt: 3, p: 2, border: "1px solid #ddd", borderRadius: "8px" }}>
        {tabIndex === 0 && (
          <Typography variant="h6">Moyens de paiement disponibles :</Typography>
        )}
        {tabIndex === 1 && (
          <Typography variant="h6">Politique d’annulation :</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Paiements;