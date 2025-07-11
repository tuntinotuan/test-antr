import React from "react";
import ProductLeft from "../product/product.left";
import ProductRight from "../product/product.right";

const HomeProduct = () => {
  return (
    <div className="flex gap-5 mt-8">
      <ProductLeft />
      <ProductRight />
    </div>
  );
};

export default HomeProduct;
