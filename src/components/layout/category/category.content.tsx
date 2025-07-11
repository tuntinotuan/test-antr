import React from "react";
import CategoryListItem from "./category.list.item";
import CategoryProductList from "./category.product.list";

const CategoryContent = () => {
  return (
    <div className="flex flex-col p-6">
      <CategoryListItem />
      <CategoryProductList />
    </div>
  );
};

export default CategoryContent;
