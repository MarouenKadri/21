import React, { useState } from "react";
import {
  Box, AppBar, Toolbar, Typography, Button, Container, TextField,
  InputAdornment, Switch, useMediaQuery, useTheme, Paper, Dialog, DialogTitle, DialogContent, IconButton
} from "@mui/material";
import { Close as CloseIcon, Search as SearchIcon, LocationOn as LocationOnIcon } from "@mui/icons-material";
import MissionList from "../components/MissionList";
import FreelancerProfile from "../components/FreelancerProfile";
import CategorySlider from "../components/CategorySlider";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import CoachList from "../CoachList";

const COLORS = {
  primary: "#FF6B6B",
  hover: "#E55A5A",
  background: "#F9FAFB",
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isFreelancer, setIsFreelancer] = useState(false);
  const [authDialog, setAuthDialog] = useState(null); // "login" | "signup" | null

  const toggleAuthDialog = (type) => setAuthDialog(type);

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      transition: "0.3s",
      "&:hover fieldset": { borderColor: COLORS.primary },
      "&.Mui-focused fieldset": { borderColor: COLORS.primary },
    },
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: theme.palette.background.default }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: COLORS.background, py: 2, boxShadow: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: COLORS.primary, fontWeight: "bold" }}>
            LAFORMI
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: isFreelancer ? "primary.main" : "success.main" }}>
              {isFreelancer ? "Mode Freelancer" : "Mode Particulier"}
            </Typography>
            <Switch checked={isFreelancer} onChange={() => setIsFreelancer(!isFreelancer)} color="primary" />
          </Box>

          <Button variant="outlined" sx={{ borderRadius: 10, mr: 2 }} onClick={() => toggleAuthDialog("login")}>
            Connexion
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: 10, bgcolor: COLORS.primary, "&:hover": { bgcolor: COLORS.hover } }}
            onClick={() => toggleAuthDialog("signup")}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      

      {/* Category Section */}
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <Box sx={{ maxWidth: isMobile ? "100%" : "80%", width: "100%" }}>
          <CategorySlider />
        </Box>
      </Container>

      {/* Missions or Freelancer Profiles */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {isFreelancer ? <MissionList /> : <CoachList />}
      </Container>

      {/* Authentication Dialogs */}
      <Dialog open={!!authDialog} onClose={() => toggleAuthDialog(null)} fullWidth maxWidth="sm">
        <DialogTitle>
          {authDialog === "login" ? "Connexion" : "Inscription"}
          <IconButton onClick={() => toggleAuthDialog(null)} sx={{ position: "absolute", right: 10, top: 10 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {authDialog === "login" ? (
            <LoginForm
              onClose={() => toggleAuthDialog(null)}
              onLoginSuccess={() => {
                // Handle login success
              }}
              onNavigateToSignup={() => toggleAuthDialog("signup")}
            />
          ) : (
            <SignupForm onNavigateToLogin={() => toggleAuthDialog("login")} />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Home;