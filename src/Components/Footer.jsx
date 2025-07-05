import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{ bgcolor: "primary.main", color: "white", py: 2, textAlign: "center" }}
    position="sticky"
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Zaph Tours. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
