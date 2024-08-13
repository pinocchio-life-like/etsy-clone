import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";

const FeaturedProduct = ({ product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        paddingX: 3,
        marginBottom: 2,
        mx: 3,
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}>
      <CardMedia
        component="img"
        sx={{ width: 250, height: 200, borderRadius: "8px" }}
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ paddingLeft: 2 }}>
        <Typography variant="subtitle1" color="text.secondary">
          {product.shopName}
        </Typography>
        <Rating value={product.rating} readOnly size="small" />
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 1 }}>
          {product.title}
        </Typography>
        <Typography variant="h5" sx={{ color: "#333", marginTop: 1 }}>
          USD {product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            textTransform: "none",
            backgroundColor: "#f5f5f5",
            color: "#333",
            borderRadius: "50px",
            boxShadow: "none",
            border: "1px solid #ccc",
          }}>
          Shop this item
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedProduct;
