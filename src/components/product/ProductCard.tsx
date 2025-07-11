import React from "react";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";

type ProductCardProps = {
  name: string;
  describe: string;
  price: number;
  imageSrc: string;
  cardWidth?: number;
};

const ProductCard = ({
  imageSrc,
  cardWidth,
  name,
  describe,
  price,
}: ProductCardProps) => {
  return (
    <div
      className={`max-13in:w-[300px] w-[352px] flex flex-col gap-2 bg-white hover:shadow-md rounded-lg overflow-hidden transition-all`}
      style={{ width: cardWidth }}
    >
      <ProductImage src={imageSrc} alt="product-image-1" />
      <ProductContent name={name} describe={describe} price={price} />
    </div>
  );
};

export default ProductCard;
