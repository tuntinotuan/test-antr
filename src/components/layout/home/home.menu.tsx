import React from "react";
import Dropdown from "../../dropdown/Dropdown";
import HomePageList from "./home.page.list";
import HomeServiceList from "./home.service.list";
import DropdownCategory from "@/components/dropdown/DropdownCategory";

const HomeMenu = () => {
  return (
    <div className="page-container flex items-center justify-between flex-wrap gap-2">
      <div className="flex items-center gap-6">
        <Dropdown
          name="Danh mục sản phẩm"
          activeClassName="!rounded-br-none !rounded-bl-none"
        >
          <DropdownCategory></DropdownCategory>
        </Dropdown>
        <HomePageList></HomePageList>
      </div>
      <HomeServiceList></HomeServiceList>
    </div>
  );
};

export default HomeMenu;
