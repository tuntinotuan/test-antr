import React from "react";
import ProductMenuFilter from "./product.menu.filter";
import ProductCardList from "./product.card.list";

const ProductRight = () => {
  return (
    <div className="flex-1">
      <ProductMenuFilter />
      <ProductCardList />
    </div>
  );
};

export default ProductRight;
