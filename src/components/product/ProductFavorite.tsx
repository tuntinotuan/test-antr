import React from "react";
import FavoriteFillIcon from "../icons/FavoriteFillIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";

const ProductFavorite = ({ favorite }: { favorite: boolean }) => {
  return (
    <div className="absolute top-3 right-3 opacity-0 transition-all group-hover:opacity-100 cursor-pointer">
      {favorite ? <FavoriteFillIcon /> : <FavoriteOutlineIcon />}
    </div>
  );
};

export default ProductFavorite;
