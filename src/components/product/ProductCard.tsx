import React from "react";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import ProductFavorite from "./ProductFavorite";

type ProductCardProps = {
  name: string;
  describe: string;
  price: number;
  imageSrc: string;
  favorite: boolean;
  cardWidth?: number;
  onClickDetailsBtn?: () => void;
  onClickFavoriteBtn?: () => void;
};

const ProductCard = ({
  imageSrc,
  cardWidth,
  name,
  describe,
  price,
  favorite,
  onClickDetailsBtn,
  onClickFavoriteBtn,
}: ProductCardProps) => {
  return (
    <div
      className={`relative max-13in:w-[300px] w-[352px] flex flex-col gap-2 bg-white hover:shadow-md rounded-lg overflow-hidden transition-all group`}
      style={{ width: cardWidth }}
    >
      <ProductFavorite
        favorite={favorite}
        onClick={onClickFavoriteBtn ? onClickFavoriteBtn : () => {}}
      ></ProductFavorite>
      <ProductImage src={imageSrc} alt={name} />
      <ProductContent
        name={name}
        describe={describe}
        price={price}
        onClick={onClickDetailsBtn ? onClickDetailsBtn : () => {}}
      />
    </div>
  );
};

export default ProductCard;
