import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

import ecoImg from '../assets/TripType-images/eco-tours.jpg';
import honeymoonImg from '../assets/TripType-images/honeymoon.jpg';
import familyImg from '../assets/TripType-images/family.jpg';
import adventureImg from '../assets/TripType-images/adventure.jpg';
import culturalImg from '../assets/TripType-images/cultural-tours.jpg';
import wildlifeImg from '../assets/TripType-images/wildlife-safaris.jpg';
import luxuryImg from '../assets/TripType-images/luxury-vacation.jpg';
import beachImg from '../assets/TripType-images/beach-holidays.jpg';
import wellnessImg from '../assets/TripType-images/wellness-retreats.jpg';
import culinaryImg from '../assets/TripType-images/culinary-tours.jpg';

const tripTypes = [
  {
    title: "Honeymoon",
    images: [honeymoonImg],
    description: "Romantic getaways in breathtaking destinations.",
    price: "$2,000 per couple (7 days)",
  },
  {
    title: "Family",
    images: [familyImg],
    description: "Family adventures with activities for all.",
    price: "$1,500 per family (5 days)",
  },
  {
    title: "Adventure",
    images: [adventureImg],
    description: "Thrilling safaris and hikes.",
    price: "$1,200 per person (5 days)",
  },
  {
    title: "Cultural Tours",
    images: [culturalImg],
    description: "Explore Kenya's rich cultural heritage, always .",
    price: "$1,000 per person (4 days)",
  },
  {
    title: "Wildlife Safaris",
    images: [wildlifeImg],
    description: "See the Big Five and more in Kenya's game park.",
    price: "$1,800 per person (6 days)",
  },
  {
    title: "Eco-Tours",
    images: [ecoImg],
    description: "Sustainable travel & natural environments.",
    price: "$1,100 per person (5 days)",
  },
  {
    title: "Luxury Vacations",
    images: [luxuryImg],
    description: "Exclusive lodges and private guides.",
    price: "$3,500 per person (7 days)",
  },
  {
    title: "Beach Holidays",
    images: [beachImg],
    description: "Relax on Kenya's stunning beaches.",
    price: "$1,400 per person (5 days)",
  },
  {
    title: "Wellness Retreats",
    images: [wellnessImg],
    description: "Spa treatments, and healthy cuisine.",
    price: "$1,600 per person (6 days)",
  },
  {
    title: "Culinary Tours",
    images: [culinaryImg],
    description: "Taste the best of Kenyan cuisine.",
    price: "$1,200 per person (4 days)",
  },
];

const Trip_types = () => (
  <Container sx={{ py: 5 }}>
    <Typography variant="h3" align='center' gutterBottom sx={{ fontWeight: 'bold', color: '#003366'}}>Trip Types</Typography>
    <Grid container spacing={3} justifyContent="center">
      {tripTypes.map((trip, idx) => (
        <Grid item xs={12} sm={6} md={6} key={idx}>
          <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
            <CardMedia
              component="img"
              image={trip.images[0]}
              alt={trip.title}
              sx={{ height: 200, objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }} >
              <Typography variant="h5">{trip.title}</Typography>
              <Typography variant="body2" sx={{ my: 2 }}>{trip.description}</Typography>
              <Typography variant="subtitle1" color="primary">{trip.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Trip_types;