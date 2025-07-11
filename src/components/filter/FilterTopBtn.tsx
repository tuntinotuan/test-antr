import React from "react";
import ArrowUpIcon from "../icons/arrow/ArrowUpIcon";
import ArrowDownIcon from "../icons/arrow/ArrowDownIcon";

type FilterTopBtnProps = {
  onClick: () => void;
  show: boolean;
  title: string;
};

const FilterTopBtn = ({ onClick, show, title }: FilterTopBtnProps) => {
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={onClick}
    >
      <p className="text-xl font-semibold"> {title}</p>
      {show ? (
        <ArrowUpIcon fontSize="medium" />
      ) : (
        <ArrowDownIcon fontSize="medium" />
      )}
    </div>
  );
};

export default FilterTopBtn;
