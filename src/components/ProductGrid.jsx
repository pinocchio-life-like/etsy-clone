import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
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
  );
};

export default ProductGrid;
