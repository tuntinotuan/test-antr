import React, { useEffect, useState } from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchHeader = ({
  disable,
  placeholder,
  width,
  className,
  setValues,
}: {
  disable?: boolean;
  placeholder: string;
  width: number | string;
  className?: string;
  setValues?: any;
}) => {
  const [localValue, setLocalValue] = useState("");
  const handleChangeInput = (e: any) => {
    setLocalValue(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      localValue ? setValues(localValue) : setValues("");
    }, 500);

    return () => clearTimeout(timer); // Cleanup timeout on each keystroke
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localValue]);
  return (
    <label
      htmlFor="searchInputId"
      className={`flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm hover:border-gray-500 transition-all cursor-text ${
        disable ? "cursor-wait" : ""
      } ${className}`}
      style={{ width: width }}
    >
      <SearchIcon
        fontSize="medium"
        className="text-gray-500 hover:border-gray-500"
      ></SearchIcon>
      <input
        type="search"
        id="searchInputId"
        placeholder={placeholder}
        className={`w-full placeholder:font-light placeholder:text-gray-500 ${
          disable ? "cursor-wait" : ""
        }`}
        disabled={disable}
        onChange={handleChangeInput}
      ></input>
    </label>
  );
};

export default SearchHeader;
