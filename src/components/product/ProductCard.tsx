import React from "react";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";

type ProductCardProps = {
  imageSrc: string;
  cardWidth?: number;
  hiddenBtnBuy?: boolean;
  width?: string;
};

const ProductCard = ({
  imageSrc,
  cardWidth,
  hiddenBtnBuy = false,
  width,
}: ProductCardProps) => {
  return (
    <div
      className={`max-13in:w-[230px] w-[252px] flex flex-col gap-2 bg-white hover:shadow-md rounded-lg overflow-hidden transition-all ${
        width ? width : ""
      }`}
      style={{ width: cardWidth }}
    >
      <ProductImage src={imageSrc} alt="product-image-1" />
      <ProductContent hiddenBtnBuy={hiddenBtnBuy} />
    </div>
  );
};

export default ProductCard;
