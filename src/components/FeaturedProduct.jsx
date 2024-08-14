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
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const FeaturedProduct = ({ product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        paddingX: {
          sm: 2,
          xs: 0,
        },
        marginBottom: 2,
        mx: {
          sm: 2,
          xs: 0,
        },
        boxShadow: {
          sm: "none",
          xs: "0 4px 8px rgba(0,0,0,0.1)",
        },
        borderBottom: "1px solid #ddd",
        flexDirection: "row",
      }}>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "300px" },
        }}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: 200,
            borderRadius: {
              xs: 0,
              sm: 2,
            },
            minWidth: 200,
          }}
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
      <CardContent
        sx={{
          marginLeft: 1,
          textAlign: "left",
          width: "60%",
        }}>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
          }}
          mb={1}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              marginRight: 1,
              textDecoration: "underline",
              textAlign: "left",
            }}>
            {product.shopName}
          </Typography>
          <Rating
            value={product.rating}
            readOnly
            size="small"
            icon={
              <StarIcon style={{ color: "black", height: 18, width: 18 }} />
            }
            emptyIcon={
              <StarBorderIcon
                style={{ color: "black", height: 18, width: 18 }}
              />
            }>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 1 }}>
              ({product.rating})
            </Typography>
          </Rating>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginTop: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1rem",
            },
          }}>
          {product.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#333",
            marginTop: 1,
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1rem",
            },
          }}>
          USD {product.price.toFixed(2)}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: 1,
            fontWeight: "bold",
            display: "inline-block",
            bgcolor: "success.light",
            px: 1,
            borderRadius: "15px",
          }}>
          FREE shipping
        </Typography>
        <Button
          variant="outlined"
          sx={{
            display: "block",
            marginTop: 2,
            textTransform: "none",
            color: "#333",
            borderRadius: {
              xs: 2,
              sm: "50px",
            },
            boxShadow: "none",
            border: {
              xs: "none",
              sm: "2px solid #000",
            },
            paddingX: {
              xs: 0,
              sm: 3,
            },
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
              borderColor: "#000",
              transition: "none",
            },
          }}>
          Shop this item
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedProduct;
