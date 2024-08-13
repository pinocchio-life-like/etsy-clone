import React from "react";
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FeaturedProduct = ({ product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        paddingX: 2,
        marginBottom: 2,
        mx: 3,
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 200, borderRadius: "8px" }}
          image={product.image}
          alt={product.title}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#000",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "5px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}>
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
      <CardContent sx={{ paddingLeft: 3 }}>
        <Box display="flex" alignItems="center" mb={1}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ marginRight: 1 }}>
            {product.shopName}
          </Typography>
          <Rating value={product.rating} readOnly size="small" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginLeft: 1 }}>
            ({product.rating})
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 0 }}>
          {product.title}
        </Typography>
        <Typography variant="h5" sx={{ color: "#333", marginTop: 1 }}>
          USD {product.price.toFixed(2)}
        </Typography>
        <Typography
          variant="body2"
          color="success.main"
          sx={{ marginTop: 1, fontWeight: "bold" }}>
          FREE shipping
        </Typography>
        <Button
          variant="outlined"
          sx={{
            marginTop: 2,
            textTransform: "none",
            color: "#333",
            borderRadius: "50px",
            boxShadow: "none",
            border: "2px solid #000",
            paddingX: 3,
          }}>
          Shop this item
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedProduct;
