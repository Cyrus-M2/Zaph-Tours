import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const blogPosts = [
  {
    title: "Top 5 Safari Tips for First-Time Travelers",
    date: "June 2024",
    excerpt: "Planning your first safari? Here are five essential tips to make your adventure unforgettable...",
  },
  {
    title: "Why Kenya is Africa’s Best Safari Destination",
    date: "May 2024",
    excerpt: "From the Great Migration to the Big Five, discover why Kenya tops the list for safari lovers...",
  },
  {
    title: "Packing Guide: What to Bring on Your Safari",
    date: "April 2024",
    excerpt: "Not sure what to pack? Our comprehensive guide ensures you’re ready for every adventure...",
  },
];

const Blog = () => (
  <Container sx={{ py: 5 }}>
    <Typography variant="h3" gutterBottom>Travel Blog & Tips</Typography>
    <Grid container spacing={3}>
      {blogPosts.map((post, idx) => (
        <Grid item xs={12} md={6} key={idx}>
          <Card>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="caption" color="text.secondary">{post.date}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{post.excerpt}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Blog;
