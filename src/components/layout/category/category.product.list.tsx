import { categoryProductList } from "@/api/mock.api";
import ArrowRightIcon from "@/components/icons/arrow/ArrowRightIcon";
import ProductCard from "@/components/product/ProductCard";
import React from "react";

const CategoryProductList = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sản phẩm bán chạy</h2>
        <div className="flex items-center gap-2 text-base text-blue500 cursor-pointer">
          Xem tất cả
          <ArrowRightIcon />
        </div>
      </div>
      <div className="flex items-center justify-around flex-wrap gap-2 mt-6">
        {categoryProductList.map((item) => (
          <ProductCard
            imageSrc={item.image}
            key={item.image}
            cardWidth={195}
            hiddenBtnBuy
          ></ProductCard>
        ))}
      </div>
    </>
  );
};

export default CategoryProductList;
