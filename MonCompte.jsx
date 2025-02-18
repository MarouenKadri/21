import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Box,
  Typography,
  Avatar,
} from "@mui/material";

const MonProfil = () => (
  <Box p={3}>
    <Typography variant="h5" fontWeight="bold">Mon Profil</Typography>
    <Avatar sx={{ width: 80, height: 80, my: 2 }} />
    <Typography>Nom: Jean Dupont</Typography>
    <Typography>Email: jean.dupont@example.com</Typography>
  </Box>
);

const Parametres = () => (
  <Box p={3}>
    <Typography variant="h5" fontWeight="bold">Paramètres</Typography>
    <Typography>Options de configuration du compte.</Typography>
  </Box>
);

const MonCompte = () => {
  const [tabIndex, setTabIndex] = useState(0);
  
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Tabs
        value={tabIndex}
        onChange={(event, newIndex) => setTabIndex(newIndex)}
        centered
      >
        <Tab label="Mon Profil" />
        <Tab label="Paramètres" />
        <Tab label="Mes Factures" />

      </Tabs>
      <Box sx={{ mt: 3 }}>
        {tabIndex === 0 && <MonProfil />}
        {tabIndex === 1 && <Parametres />}
      </Box>
    </Container>
  );
};

export default MonCompte;
