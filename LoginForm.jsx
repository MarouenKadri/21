import React, { useState } from "react";
import {
  Box, TextField, Button, Typography, Link, Divider, Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";

const LoginForm = ({ onClose, onLoginSuccess, onNavigateToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    alert("Connexion réussie !");
    onLoginSuccess();
    onClose();
  };

  const handleResetPassword = () => {
    alert(`Un lien de réinitialisation a été envoyé à ${resetEmail}`);
    setResetDialogOpen(false);
  };

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Connexion à votre compte
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Connectez-vous pour continuer
      </Typography>

      <Divider sx={{ my: 2 }}>OU</Divider>

      {/* Formulaire de connexion */}
      <form onSubmit={handleLogin}>
        <TextField
          label="Adresse e-mail ou nom d'utilisateur"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Connexion
        </Button>
      </form>

      {/* Lien pour le mot de passe oublié */}
      <Box sx={{ mt: 2 }}>
        <Link component="button" onClick={() => setResetDialogOpen(true)} underline="hover">
          Mot de passe oublié ?
        </Link>
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Nouveau ici ?{" "}
        <Link component="button" onClick={onNavigateToSignup} underline="hover">
          Créez un compte
        </Link>
      </Typography>

      {/* Pop-up de réinitialisation du mot de passe */}
      <Dialog open={resetDialogOpen} onClose={() => setResetDialogOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle>Réinitialisation du mot de passe</DialogTitle>
        <DialogContent>
          <Typography variant="body2" gutterBottom>
            Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
          </Typography>
          <TextField
            label="Adresse e-mail"
            type="email"
            fullWidth
            margin="normal"
            required
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResetDialogOpen(false)} color="secondary">
            Annuler
          </Button>
          <Button onClick={handleResetPassword} variant="contained" color="primary">
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LoginForm;