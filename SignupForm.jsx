import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Grid, Link, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';

const SignupForm = ({ onNavigateToLogin }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Formulaire soumis:', data);
    alert('Inscription réussie !');
    navigate('/dashboard');
  };

  const handleGoogleSignIn = () => {
    alert('Connexion avec Google non disponible pour le moment.');
  };

  const handleFacebookSignIn = () => {
    alert('Connexion avec Facebook non disponible pour le moment.');
  };

  return (
    <Box sx={{ maxWidth: 500, margin: '50px auto', padding: 3, border: '1px solid #ccc', borderRadius: 2, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <Typography variant="h5" gutterBottom align="center">
        Créer un compte
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" mb={3}>
        Rejoignez-nous et connectez-vous avec des opportunités professionnelles.
      </Typography>

      <Button onClick={handleGoogleSignIn} variant="contained" color="secondary" fullWidth sx={{ mb: 1 }}>
        S'inscrire avec Google
      </Button>
      <Button onClick={handleFacebookSignIn} variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
        S'inscrire avec Facebook
      </Button>

      <Divider sx={{ my: 2 }}>OU</Divider>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Prénom" fullWidth {...register('firstName', { required: 'Le prénom est requis.' })} error={!!errors.firstName} helperText={errors.firstName?.message} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Nom" fullWidth {...register('lastName', { required: 'Le nom est requis.' })} error={!!errors.lastName} helperText={errors.lastName?.message} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth {...register('email', { required: 'L’email est requis.', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/, message: 'Veuillez entrer un email valide.' } })} error={!!errors.email} helperText={errors.email?.message} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Mot de passe" type="password" fullWidth {...register('password', { required: 'Le mot de passe est requis.', minLength: { value: 6, message: 'Le mot de passe doit contenir au moins 6 caractères.' } })} error={!!errors.password} helperText={errors.password?.message} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirmez le mot de passe" type="password" fullWidth {...register('confirmPassword', { required: 'La confirmation du mot de passe est requise.', validate: (value) => value === watch('password') || 'Les mots de passe ne correspondent pas.' })} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              S’inscrire
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body2" align="center" mt={3}>
        Vous avez déjà un compte ?{' '}
        <Link component="button" onClick={onNavigateToLogin} underline="hover">
          Connectez-vous
        </Link>
      </Typography>
    </Box>
  );
};

export default SignupForm;