import React from "react";
import Button from "../button/Button";

const ProductContent = ({ hiddenBtnBuy = false }: any) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="font-semibold line-clamp-2 cursor-pointer">
        Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)
      </p>
      <p className="text-[#B71D18] text-xl font-semibold">299,000 đ</p>
      <div className="flex items-center gap-2">
        <p className="text-[#919EAB]">329,000 đ</p>
        <p className="text-[#B71D18]">-10%</p>
      </div>
      {!hiddenBtnBuy && (
        <Button className="text-blue600 bg-blue50" hover="hover:brightness-95">
          Xem chi tiết
        </Button>
      )}
    </div>
  );
};

export default ProductContent;
