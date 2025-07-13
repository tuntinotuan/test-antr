import React from "react";
import FavoriteFillIcon from "../icons/FavoriteFillIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";

const ProductFavorite = ({
  favorite,
  onClick,
}: {
  favorite: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="absolute top-3 right-3 opacity-0 transition-all group-hover:opacity-100 cursor-pointer"
      onClick={onClick}
    >
      {favorite ? <FavoriteFillIcon /> : <FavoriteOutlineIcon />}
    </div>
  );
};

export default ProductFavorite;
