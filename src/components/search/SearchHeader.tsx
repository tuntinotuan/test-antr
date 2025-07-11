import React from "react";
import CameraIcon from "../icons/CameraIcon";
import SearchIcon from "../icons/SearchIcon";

const SearchHeader = () => {
  return (
    <label
      htmlFor="search-header"
      className="max-13in:w-[550px] max-lg:w-[320px] flex items-center justify-between gap-2 w-[739px] border-2 border-blue500 rounded-full p-2 cursor-pointer"
    >
      <input
        type="search"
        id="search-header"
        className={`flex-1 ml-3`}
        placeholder="Tìm sản phẩm"
      />
      <div className="flex items-center gap-3">
        <CameraIcon />
        <div className="py-3 px-6 bg-blue500 text-white rounded-full cursor-pointer">
          <SearchIcon />
        </div>
      </div>
    </label>
  );
};

export default SearchHeader;
