import React from "react";
import FireIcon from "../icons/FireIcon";

const ProductSaleTag = () => {
  return (
    <div className="w-max flex items-center gap-2 bg-gradient-to-br from-warningLight to-warningMain rounded-full p-2">
      <FireIcon />
      <p className="font-semibold text-errDarker">Giá cực sốc</p>
    </div>
  );
};

export default ProductSaleTag;
