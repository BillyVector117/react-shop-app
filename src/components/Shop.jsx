import React from "react";
import Products from "./Products";
const Shop = ({ products, addProductToCar }) => {
  return (
    <div>
      <h1>Shop</h1>
      <Products products={products} addProductToCar={addProductToCar} />
    </div>
  );
};

export default Shop;
