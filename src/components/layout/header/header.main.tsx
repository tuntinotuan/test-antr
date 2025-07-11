import HeaderLogo from "@/components/logo/header.logo";
import React from "react";
import SearchHeader from "../../search/SearchHeader";
import HeaderControl from "./header.control";

const HeaderMain = () => {
  return (
    <div className="page-container flex items-center justify-between flex-wrap gap-2 my-4">
      <HeaderLogo />
      <SearchHeader />
      <HeaderControl />
    </div>
  );
};

export default HeaderMain;
