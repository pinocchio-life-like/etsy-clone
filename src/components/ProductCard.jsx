import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ProductCard = ({ image, title, price, rating, shopName }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  let cardMaxWidth;
  if (isSmallScreen) {
    cardMaxWidth = "100%";
  } else if (isMediumScreen) {
    cardMaxWidth = 400;
  } else if (isLargeScreen) {
    cardMaxWidth = 300;
  }

  return (
    <Card
      sx={{
        maxWidth: cardMaxWidth,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
      }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: "1rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: {
              md: "1rem",
            },
          }}>
          {shopName}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
          }}>
          ${price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Rating value={rating} readOnly size="small" />
          <Typography
            variant="body2"
            sx={{
              ml: 1,
              fontSize: "1rem",
            }}>
            ({rating})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
