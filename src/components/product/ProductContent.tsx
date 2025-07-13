import React from "react";
import Button from "../button/Button";
import { convertNumberToComma } from "@/utils/process.number";

const ProductContent = ({
  name,
  price,
  describe,
  onClick,
}: {
  name: string;
  describe: string;
  price: number;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="font-semibold line-clamp-1 cursor-pointer">{name}</p>
      <p className="text-xs text-gray-500 font-semibold line-clamp-1 cursor-pointer">
        {describe}
      </p>
      <p className="text-green-600 text-xl font-semibold">
        ₫{convertNumberToComma(price)}
      </p>
      <Button
        className="text-green-500 bg-green-50"
        hover="hover:brightness-95"
        onClick={onClick}
      >
        Xem chi tiết
      </Button>
    </div>
  );
};

export default ProductContent;
