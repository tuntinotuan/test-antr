import React from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
const ArrowUpIcon = ({ className, fontSize = "inherit", ...rest }: any) => {
  return (
    <div className={`cursor-pointer ${className}`} {...rest}>
      <KeyboardArrowUpRoundedIcon fontSize={fontSize} />
    </div>
  );
};

export default ArrowUpIcon;
