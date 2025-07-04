import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdHome, MdPlace, MdOutlineExplore, MdArticle, MdContacts } from 'react-icons/md';


const Navbar = () => (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Zaph Tours
      </Typography>
      <Button color="inherit" component={Link} to="/" startIcon={<MdHome />}>Home</Button>
      <Button color="inherit" component={Link} to="/destinations" startIcon={<MdPlace />}>Destinations</Button>
      <Button color="inherit" component={Link} to="/trip-types" startIcon={<MdOutlineExplore />}>Trip Types</Button>
      <Button color="inherit" component={Link} to="/blog" startIcon={<MdArticle />}>Blog</Button>
      <Button color="inherit" component={Link} to="/contact" startIcon={<MdContacts />}>Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
