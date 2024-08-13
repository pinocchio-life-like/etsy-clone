import React from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import FeaturedProduct from "./components/FeaturedProduct";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Football Field Pencil Case",
    price: 19.0,
    rating: 5,
    shopName: "efratul",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Soccer Ball Necklace",
    price: 50.79,
    rating: 4,
    shopName: "DreamBeadsDovi",
  },
  // Add more product objects here
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <FeaturedProduct product={products[0]} />
      <FilterBar />
      <ProductGrid products={products} />
    </div>
  );
};

export default App;
