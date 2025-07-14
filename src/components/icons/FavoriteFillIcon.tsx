import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const FavoriteFillIcon = ({
  onClick,
  className,
}: {
  onClick?: () => {};
  className?: string;
}) => {
  return (
    <div onClick={onClick}>
      <FavoriteRoundedIcon className="text-red-500 drop-shadow-lg"></FavoriteRoundedIcon>
    </div>
  );
};

export default FavoriteFillIcon;
