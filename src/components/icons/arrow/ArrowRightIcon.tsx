import React from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const ArrowRightIcon = ({ className, fontSize = "inherit", ...rest }: any) => {
  return (
    <div className={`cursor-pointer ${className}`} {...rest}>
      <KeyboardArrowRightRoundedIcon fontSize={fontSize} />
    </div>
  );
};

export default ArrowRightIcon;
