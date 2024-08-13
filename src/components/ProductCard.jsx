import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
} from "@mui/material";

const ProductCard = ({ image, title, price, rating, shopName }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "auto",
      }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shopName}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          ${price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Rating value={rating} readOnly size="small" />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({rating})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
