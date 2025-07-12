import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const FavoriteFillIcon = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <div onClick={onClick}>
      <FavoriteRoundedIcon></FavoriteRoundedIcon>
    </div>
  );
};

export default FavoriteFillIcon;
