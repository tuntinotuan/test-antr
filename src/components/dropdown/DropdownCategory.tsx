import React, { useState } from "react";
import CategorySidebar from "../layout/category/category.sidebar";
import CategoryContent from "../layout/category/category.content";

const DropdownCategory = () => {
  const navList = [
    {
      img: "/category-nav-1.png",
      renderContent: <CategoryContent />,
      title: "Bộ lọc dầu",
    },
    {
      img: "/category-nav-2.png",
      renderContent: <p>Bộ lọc không khí</p>,
      title: "Bộ lọc không khí",
    },
    {
      img: "/category-nav-3.png",
      renderContent: <p>Bộ lọc nhiên liệu</p>,
      title: "Bộ lọc nhiên liệu",
    },
    {
      img: "/category-nav-4.png",
      renderContent: <p>Bộ lọc trong cabin</p>,
      title: "Bộ lọc trong cabin",
    },
    {
      img: "/category-nav-5.png",
      renderContent: <p>Bộ lọc gió điều hòa</p>,
      title: "Bộ lọc gió điều hòa",
    },
    {
      img: "/category-nav-6.png",
      renderContent: <p>Bộ lọc gió động cơ</p>,
      title: "Bộ lọc gió động cơ",
    },
    {
      img: "/category-nav-7.jpg",
      renderContent: <p>Bộ lọc dầu nhớt</p>,
      title: "Bộ lọc dầu nhớt",
    },
    {
      img: "/category-nav-8.png",
      renderContent: <p>Bộ lọc xăng</p>,
      title: "Bộ lọc xăng",
    },
  ];
  const [currentNavActive, setCurrentNavActive] = useState<string>(
    navList[0].title
  );
  return (
    <div className="flex items-start justify-start bg-gray-300 bg-opacity-60 overflow-hidden rounded-bl-xl shadow-xl rounded-br-xl">
      <div className="max-13in:w-[1335px] w-[1375.70263671875px] min-h-[714px] flex bg-[#F4F6F8] text-black rounded shadow-xl border border-gray-50 rounded-bl-xl rounded-br-xl cursor-default overflow-hidden">
        <CategorySidebar
          currentNavActive={currentNavActive}
          setCurrentNavActive={setCurrentNavActive}
        />
        {navList.map((item) => (
          <>
            {item.title === currentNavActive && <div>{item.renderContent}</div>}
          </>
        ))}
      </div>
    </div>
  );
};

export default DropdownCategory;
