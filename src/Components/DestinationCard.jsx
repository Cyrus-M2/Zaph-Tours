import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const DestinationCard = ({
  image,
  name,
  description,
  groupPrice,
  individualPrice,
  link,
}) => (
  <Card sx={{ maxWidth: 600, mx: 4, my: 2 }}>
    <CardMedia
      component="img"
      height="180"
      image={image}
      alt={name}
      sx={{ height: 200, objectFit: "cover" }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography variant="subtitle1" color="primary">
        Group: ${groupPrice}
      </Typography>
      <Typography variant="subtitle2" color="secondary">
        Individual: ${individualPrice}
      </Typography>
      <Button variant="contained" color="primary" href={link} sx={{ mt: 1 }}>
        Book Now
      </Button>
    </CardContent>
  </Card>
);

export default DestinationCard;
