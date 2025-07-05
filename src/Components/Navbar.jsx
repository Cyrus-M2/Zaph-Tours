import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdPlace,
  MdOutlineExplore,
  MdArticle,
  MdContacts,
} from "react-icons/md";

const Navbar = () => {
  const navItems = [
    { label: "Home", icon: <MdHome />, path: "/" },
    { label: "Destinations", icon: <MdPlace />, path: "/destinations" },
    { label: "Trip Types", icon: <MdOutlineExplore />, path: "/trip-types" },
    { label: "Blog", icon: <MdArticle />, path: "/blog" },
    { label: "Contact", icon: <MdContacts />, path: "/contact" },
  ];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          py: { xs: 2, md: 1 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: { md: 1 },
            mb: { xs: 2, md: 0 },
          }}
        >
          Zaph Tours
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                minWidth: "auto",
                justifyContent: { xs: "flex-start", md: "center" },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
