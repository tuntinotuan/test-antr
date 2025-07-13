import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const FavoriteFillIcon = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <div onClick={onClick}>
      <FavoriteRoundedIcon
        className="text-red-500 drop-shadow-lg"
        // sx={{
        //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // you can customize this shadow
        // }}
      ></FavoriteRoundedIcon>
    </div>
  );
};

export default FavoriteFillIcon;
