import React from "react";
import Button from "../button/Button";

const ProductContent = ({
  name,
  price,
  describe,
}: {
  name: string;
  describe: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="font-semibold line-clamp-1 cursor-pointer">{name}</p>
      <p className="text-xs text-gray-500 font-semibold line-clamp-1 cursor-pointer">
        {describe}
      </p>
      <p className="text-[#B71D18] text-xl font-semibold">{price}</p>
      <Button className="text-blue600 bg-blue50" hover="hover:brightness-95">
        Xem chi tiết
      </Button>
    </div>
  );
};

export default ProductContent;
