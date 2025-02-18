// frontend/pages/MyRequests.js

import { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const MyRequests = () => {
    const [requests, setRequests] = useState([
        {
            id: 1,
            title: "Développement d'un site web",
            description: "Création d'un site e-commerce complet",
            budget_max: 1500,
            status: "open",
            bids: [
                { id: 101, amount: 1200 },
                { id: 102, amount: 1400 }
            ]
        },
        {
            id: 2,
            title: "Application mobile",
            description: "Développement d'une app React Native",
            budget_max: 2000,
            status: "in_progress",
            bids: []
        }
    ]);

    const acceptBid = (requestId, bidId) => {
        alert(`Offre ${bidId} acceptée pour la demande ${requestId}`);
        setRequests(prevRequests => prevRequests.map(req => req.id === requestId ? { ...req, status: 'in_progress' } : req));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Gérer mes demandes</Typography>
            <Grid container spacing={2}>
                {requests.map(request => (
                    <Grid item xs={12} key={request.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{request.title}</Typography>
                                <Typography variant="body1">{request.description}</Typography>
                                <Typography variant="body2">Budget Max: {request.budget_max}€</Typography>
                                <Typography variant="body2">Status: {request.status}</Typography>
                                {request.status === 'open' && request.bids.length > 0 && (
                                    <div>
                                        <Typography variant="subtitle1">Offres reçues :</Typography>
                                        {request.bids.map(bid => (
                                            <Card key={bid.id} variant="outlined" style={{ marginTop: '10px', padding: '10px' }}>
                                                <Typography variant="body2">Montant: {bid.amount}€</Typography>
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    onClick={() => acceptBid(request.id, bid.id)}
                                                    style={{ marginTop: '5px' }}
                                                >
                                                    Accepter
                                                </Button>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                                {request.status === 'in_progress' && (
                                    <Typography variant="body1" color="secondary">Demande en cours d'exécution</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MyRequests;
