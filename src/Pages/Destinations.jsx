import { Container, Grid, Typography } from '@mui/material';
import DestinationCard from '../Components/DestinationCard';
import dest1 from '../assets/DestinationPage-images/diani-beach.jpg';
import dest2 from '../assets/DestinationPage-images/amboseli-nationa-park.jpg';
import dest3 from '../assets/DestinationPage-images/great-rift-valley.jpg';
import dest4 from '../assets/DestinationPage-images/lake-naivasha.jpg';
import dest5 from '../assets/DestinationPage-images/lamu-island.jpg';
import dest6 from '../assets/DestinationPage-images/maasai-mara.jpg';

const destinations = [
  {
    image: dest1,
    name: "Diani Beach",
    description: "East Africa's second largest beach",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#"
  },

    {
    image: dest2,
    name: "Amboseli National Park",
    description: "Find elephants, Buffalos and Lions",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#"
  },

    {
    image: dest3,
    name: "Great Rift Valley",
    description: "A geological marvel with diverse landscapes",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#"
  },

    {
    image: dest4,
    name: "Lake Naivasha",
    description: "Freshwater lake for boat safaris.",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#"
  },

    {
    image: dest5,
    name: "Lamu Island",
    description: "Rich in Swahili culture and history.",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#"
  },

    {
    image: dest6,
    name: "Maasai Mara",
    description: "Great Migration and abundant wildlife.",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#"
  },

];

const Destinations = () => (
  <Container sx={{ py: 5 }}>
    <Typography variant="h3" align='center' gutterBottom sx={{ fontWeight: 'bold', color: '#003366'}}>Our Destinations</Typography>
    <Grid container spacing={2} justifyContent="center">
      {destinations.map((dest, idx) => (
        <Grid item xs={12} sm={12} md={6} key={idx}>
          <DestinationCard {...dest} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Destinations;

