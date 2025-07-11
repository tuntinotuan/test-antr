import CategoryNavItem from "@/components/category/CategoryNavItem";
import React from "react";

const CategorySidebar = ({ currentNavActive, setCurrentNavActive }: any) => {
  const navList = [
    { img: "/category-nav-1.png", title: "Bộ lọc dầu" },
    { img: "/category-nav-2.png", title: "Bộ lọc không khí" },
    { img: "/category-nav-3.png", title: "Bộ lọc nhiên liệu" },
    { img: "/category-nav-4.png", title: "Bộ lọc trong cabin" },
    { img: "/category-nav-5.png", title: "Bộ lọc gió điều hòa" },
    { img: "/category-nav-6.png", title: "Bộ lọc gió động cơ" },
    { img: "/category-nav-7.jpg", title: "Bộ lọc dầu nhớt" },
    { img: "/category-nav-8.png", title: "Bộ lọc xăng" },
  ];
  return (
    <div className="h-full w-[263.70269775390625px] shrink-0 bg-white">
      {navList.map((item) => (
        <CategoryNavItem
          key={item.title}
          src={item.img}
          alt={item.title}
          title={item.title}
          currentTextHover={currentNavActive}
          onMouseEnter={() => setCurrentNavActive(item.title)}
        ></CategoryNavItem>
      ))}
    </div>
  );
};

export default CategorySidebar;
