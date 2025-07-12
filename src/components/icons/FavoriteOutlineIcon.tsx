import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const FavoriteOutlineIcon = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <div onClick={onClick}>
      <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
    </div>
  );
};

export default FavoriteOutlineIcon;
