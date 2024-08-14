import { Grid, Box, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Box
      sx={{
        paddingX: {
          xs: 0,
          sm: 4,
        },
        paddingY: 2,
      }}>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}>
        <Typography variant="h6" sx={{ fontWeight: "semi-bold" }}>
          Etsy's Picks
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "24px",
            padding: "6px 16px",
            fontSize: "14px",
            textTransform: "none",
            color: "black",
            border: "1px solid black",
            fontWeight: "bold",
          }}>
          See more
        </Button>
      </Box>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              shopName={product.shopName}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
