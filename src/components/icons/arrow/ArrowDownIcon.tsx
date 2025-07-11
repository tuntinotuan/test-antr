import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
const ArrowDownIcon = ({ className, fontSize = "inherit", ...rest }: any) => {
  return (
    <div className={`cursor-pointer ${className}`} {...rest}>
      <KeyboardArrowDownRoundedIcon fontSize={fontSize} />
    </div>
  );
};

export default ArrowDownIcon;
