import React from "react";
import FavoriteFillIcon from "../icons/FavoriteFillIcon";
import Link from "next/link";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";

const ButtonFavorite = ({ quantity = 9 }: { quantity?: number }) => {
  return (
    <Link href={"/favorite"} className="relative cursor-pointer">
      <span
        className={`absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-white text-xs transition-all z-20 ${
          quantity > 0 ? "bg-green-600" : ""
        } ${quantity > 9 ? "w-5 h-5" : "w-4 h-4 "} ${
          quantity > 99 ? "text-[10px]" : ""
        }`}
      >
        {quantity < 100 ? quantity : "99+"}
      </span>
      {quantity > 0 ? <FavoriteFillIcon /> : <FavoriteOutlineIcon />}
    </Link>
  );
};

export default ButtonFavorite;
