import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
const ArrowLeftIcon = ({ className, fontSize = "inherit", ...rest }: any) => {
  return (
    <div className={`cursor-pointer ${className}`} {...rest}>
      <KeyboardArrowLeftRoundedIcon fontSize={fontSize} />
    </div>
  );
};

export default ArrowLeftIcon;
