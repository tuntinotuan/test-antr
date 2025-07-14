import React, { useState } from "react";
import Button from "../button/Button";

const FilterSelectPrice = ({
  onClickApplyButon,
  fromDefaultValue,
  toDefaultValue,
}: {
  onClickApplyButon: (from: string, to: string) => void;
  fromDefaultValue: string;
  toDefaultValue: string;
}) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  return (
    <div className="w-[200px] flex flex-col gap-2 p-2 text-xs">
      <div className="w-full grid grid-cols-2 gap-2">
        <input
          defaultValue={fromDefaultValue}
          type="number"
          value={priceFrom}
          placeholder="₫ Từ"
          className="border border-gray-300 rounded px-3 py-2"
          onChange={(e) => setPriceFrom(e.target.value)}
        />
        <input
          defaultValue={toDefaultValue}
          type="number"
          value={priceTo}
          placeholder="₫ Đến"
          className="border border-gray-300 rounded px-3 py-2"
          onChange={(e) => setPriceTo(e.target.value)}
        />
      </div>
      <Button
        className="w-full bg-green-500 text-white"
        disable={!priceFrom && !priceTo}
        onClick={() => onClickApplyButon(priceFrom, priceTo)}
      >
        Áp dụng
      </Button>
    </div>
  );
};

export default FilterSelectPrice;
