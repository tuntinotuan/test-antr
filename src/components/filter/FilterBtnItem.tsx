import { current } from "@reduxjs/toolkit";
import React from "react";

type FilterBtnItemProps = {
  title: string;
  currentTitleActive: string;
  onClick: () => void;
};

const FilterBtnItem = ({
  title,
  onClick,
  currentTitleActive,
}: FilterBtnItemProps) => {
  const active = title === currentTitleActive;
  return (
    <div
      className={`flex items-center justify-center border rounded py-2 transition-all cursor-pointer ${
        active ? "text-blue600 border-blue600" : "border-gray-200"
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default FilterBtnItem;
