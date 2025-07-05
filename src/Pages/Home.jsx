import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  TextField,
  Paper,
  Avatar,
} from "@mui/material";
import DestinationCard from "../Components/DestinationCard";
// import heroVideo from "https://cdn.pixabay.com/video/2023/09/01/178732-860527368_large.mp4";
import dest1 from "../assets/HomePage-images/coastal kenya.jpg";
import dest2 from "../assets/HomePage-images/lake-nakuru.jpg";
import dest3 from "../assets/HomePage-images/mt-kenya.jpg";
import dest4 from "../assets/HomePage-images/mt-ruwenzori.jpg";
import dest5 from "../assets/HomePage-images/nairobi-national-park.jpg";
import dest6 from "../assets/HomePage-images/tsavo-park.jpg";

const featuredDestinations = [
  {
    image: dest1,
    name: "Coastal Kenya",
    description: "Enjoy sun-drenched beaches & cool waters",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#",
  },

  {
    image: dest2,
    name: "Lake Nakuru",
    description: "Famous for flamingos and hippos",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#",
  },

  {
    image: dest3,
    name: "Mount Kenya",
    description: "Kenya’s highest mountain & 2rd in EA",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#",
  },

  {
    image: dest4,
    name: "Mount Ruwenzori",
    description: "Mountains of the Moon' with misty / glacier",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#",
  },

  {
    image: dest5,
    name: "Nariobi National Park",
    description: "The only national park within a capital city",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#",
  },

  {
    image: dest6,
    name: "Tsavo East National Park",
    description: "One of Kenya’s largest parks",
    groupPrice: "1000 (3 people)",
    individualPrice: 400,
    link: "#",
  },
];

const testimonials = [
  {
    name: "Alice Ambaming - Nigeria",
    message: "Our guide spotted a leopard hunting!",
    avatar:
      "https://cdn.pixabay.com/photo/2020/04/22/01/59/hands-5075436_960_720.jpg",
  },
  {
    name: "Kamara Joung - CEO",
    message: "I felt completely safe and cared. ",
    avatar:
      "https://cdn.pixabay.com/photo/2016/02/11/19/14/couple-1194312_640.jpg",
  },
  {
    name: "SHeryl Share - Officer",
    message: "Professional-grade guidance!",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Kennar Joshua - CS",
    message: "Our family vacation was magical.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Alice Johnson - UK",
    message: "The kids still talk about it!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Peter Pits - Business-person",
    message: "Our cultural tour was deeply moving!",
    avatar:
      "https://cdn.pixabay.com/photo/2023/03/16/02/10/couple-7855777_640.jpg",
  },
];

const Home = () => (
  <Box>
    <Box sx={{ position: "relative", height: 450, overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="https://cdn.pixabay.com/video/2023/09/01/178732-860527368_large.mp4"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          backdropFilter: "brightness(40%)",
        }}
      >
        <Box>
          <Typography variant="h2" fontWeight="bold">
            Best Safaris and Adventures
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Explore the world with us
          </Typography>
        </Box>
      </Box>
    </Box>

    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#003366" }}
      >
        About Zaph Tours
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "#f8f9fa",
              maxWidth: "1080px",
              mx: "auto",
            }}
          >
            <Typography
              fontSize={22}
              lineHeight={1.7}
              color="text.secondary"
              textAlign="justify"
            >
              Zaph Tours is a premier travel company based in Kenya,
              specializing in providing the best safaris and adventure tours.
              With a strong reputation for delivering exceptional travel
              experiences, Zaph Tours offers a variety of packages that showcase
              the natural beauty and cultural richness of Kenya and other
              destinations.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>

    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#003366" }}
      >
        Featured Destinations
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {featuredDestinations.map((dest, idx) => (
          <Grid item xs={12} sm={12} md={6} key={idx}>
            <DestinationCard {...dest} />
          </Grid>
        ))}
      </Grid>
    </Container>

    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#003366" }}
      >
        Testimonials
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, idx) => (
          <Grid item sx={12} sm={6} md={4} key={idx}>
            <Paper
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%",
              }}
            >
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
              />
              <Typography
                variant="body1"
                sx={{ wordBreak: "break-word", width: "100%" }}
              >
                "{testimonial.message}"
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                sx={{ mt: 1 }}
              >
                {testimonial.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>

    <Container sx={{ py: 5, textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#003366" }}
      >
        Sign Up for Our Newsletter
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
          flexWrap: "wrap",
          maxWidth: "600",
          mx: "auto",
        }}
      >
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ height: "56px", px: 4 }}
        >
          Subscribe
        </Button>
      </Box>
    </Container>
  </Box>
);

export default Home;
