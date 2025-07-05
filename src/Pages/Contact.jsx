import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { MdOutlineMailLock } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#003366" }}
      >
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#003366" }}
            >
              Send us a message
            </Typography>
            <Box component="form">
              <TextField
                fullWidth
                label="Name"
                name="name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <MdOutlineMailLock style={{ marginRight: 8 }} />{" "}
                info@zaphtours.co.ke
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <FaPhone style={{ marginRight: 8 }} /> +254 704 683152
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <FaLocationDot style={{ marginRight: 8 }} /> Nairobi, Kenya
              </Box>

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Office Hours
              </Typography>
              <Typography>Mon - Fri: 8:00am - 6:00pm</Typography>
              <Typography>Sat: 9:00am - 1:00pm</Typography>
              <Typography>Sun & Holidays: Closed</Typography>

              <Box sx={{ mt: 2 }}>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  sx={{ mr: 1 }}
                >
                  <FaFacebookSquare />
                </Link>
                <Link href="https://twitter.com" target="_blank" sx={{ mr: 1 }}>
                  <FaXTwitter />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <FaSquareInstagram />
                </Link>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sx={{ display: "flex" }}>
            <Paper sx={{ p: 0 }}>
              <Box sx={{ height: "100%" }}>
                <iframe
                  title="Zaph Tours Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d123456789%3A0xabcdef123456789!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1680000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px", width: "100%" }}
                  loading="lazy"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
