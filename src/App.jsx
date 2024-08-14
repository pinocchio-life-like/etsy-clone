import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import FeaturedProduct from "./components/FeaturedProduct";
import products from "./constants/products";

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
