import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Safari Tips for First-Timers",
    date: "June 2024",
    description:
      "Essential tips to make your first safari unforgettable while staying safe.",
    readTime: "2 min read",
  },
  {
    id: 2,
    title: "Why Kenya Tops Safari Destinations",
    date: "May 2024",
    description: "Discover why travelers love Kenya's wildlife experiences.",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Kenya's Top 5 Luxury Beach Resorts",
    date: "April 2024",
    description:
      "Discover the most spectacular Swahili hospitality with modern luxuries.",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Kenya's Best Beaches Beyond Diani",
    date: "April 2024",
    description: "Explore stunning beaches along Kenya's coastline & cool. ",
    readTime: "6 min read",
  },
];

const Blog = () => (
  <Container sx={{ py: 4 }}>
    <Typography
      variant="h4"
      align="center"
      component="h1"
      gutterBottom
      sx={{ fontWeight: "bold", color: "#003366" }}
    >
      Zaph Tours Blog
    </Typography>

    <Grid container spacing={3}>
      {blogPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              ":hover": {
                boxShadow: "0 4px 8px rgba(24, 23, 23, 0.1)",
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <FaCalendarAlt
                  style={{
                    color: "#757575",
                    marginRight: "8px",
                    fontSize: "14px",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {post.date} • {post.readTime}
                </Typography>
              </Box>

              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>

              <Typography variant="body1">{post.description}</Typography>

              <Button
                endIcon={<FaArrowRight style={{ fontSize: "14px" }} />}
                size="small"
                sx={{
                  mt: "auto",
                  color: "#2E7D32",
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                }}
              >
                Read more
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#2E7D32",
          color: "#2E7D32",
          "&:hover": {
            backgroundColor: "#000",
            borderColor: "#1B5E20",
          },
        }}
      >
        View all articles
      </Button>
    </Box>
  </Container>
);

export default Blog;
