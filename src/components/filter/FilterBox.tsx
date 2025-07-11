import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterTopBtn from "./FilterTopBtn";
import FilterCheckItem from "./FilterCheckItem";
import FilterBtnItem from "./FilterBtnItem";

type FilterBoxProps = {
  type: "button" | "checked";
  show: boolean;
  title: string;
  list: any;
};

const FilterBox = ({ type, show, title, list }: FilterBoxProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(show);
  const [currentBtnActive, setCurrentBtnActive] = useState("");
  return (
    <div className="p-3">
      <FilterTopBtn
        show={showDropdown}
        onClick={() => setShowDropdown((pre) => !pre)}
        title={title}
      ></FilterTopBtn>
      {type === "checked" && showDropdown && (
        <FilterDropdown>
          {list.map((item: any) => (
            <FilterCheckItem
              key={item.title}
              checked={item.checked}
              title={item.name}
              quantity={item.quantity}
            ></FilterCheckItem>
          ))}
        </FilterDropdown>
      )}
      {type === "button" && showDropdown && (
        <FilterDropdown>
          {list.map((item: any) => (
            <FilterBtnItem
              currentTitleActive={currentBtnActive}
              key={item.name}
              title={item.name}
              onClick={() =>
                setCurrentBtnActive(
                  item.name === currentBtnActive ? "" : item.name
                )
              }
            ></FilterBtnItem>
          ))}
        </FilterDropdown>
      )}
    </div>
  );
};

export default FilterBox;
