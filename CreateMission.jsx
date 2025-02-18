import React, { useState, useCallback } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Button, Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateMission = ({ open, onClose, onSubmit }) => {
  const [mission, setMission] = useState({
    title: "",
    details: "",
    budgetMin: "",
    budgetMax: "",
    location: "",
    date: "",
    time: "",
  });

  const handleMissionChange = useCallback((e) => {
    setMission((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = () => {
    onSubmit(mission);
    setMission({ title: "", details: "", budgetMin: "", budgetMax: "", location: "", date: "", time: "" });
  };

  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition} fullWidth maxWidth="sm">
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5rem" }}>Créer une mission</DialogTitle>
      <DialogContent>
        <TextField fullWidth margin="dense" label="Titre" name="title" value={mission.title} onChange={handleMissionChange} />
        <TextField fullWidth margin="dense" label="Détails" name="details" value={mission.details} onChange={handleMissionChange} multiline rows={4} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth margin="dense" label="Budget Min (€)" name="budgetMin" type="number" value={mission.budgetMin} onChange={handleMissionChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth margin="dense" label="Budget Max (€)" name="budgetMax" type="number" value={mission.budgetMax} onChange={handleMissionChange} />
          </Grid>
        </Grid>
        <TextField fullWidth margin="dense" label="Localisation" name="location" value={mission.location} onChange={handleMissionChange} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth margin="dense" label="Date" name="date" type="date" InputLabelProps={{ shrink: true }} value={mission.date} onChange={handleMissionChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth margin="dense" label="Heure" name="time" type="time" InputLabelProps={{ shrink: true }} value={mission.time} onChange={handleMissionChange} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Annuler</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">Publier la mission</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateMission;
