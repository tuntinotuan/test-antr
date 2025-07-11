import CategoryItem from "@/components/category/CategoryItem";
import React from "react";

const CategoryListItem = () => {
  const list = [
    { img: "/category-item-1.png", title: "Bộ lọc gió" },
    { img: "/category-item-2.png", title: "Bộ lọc gió" },
    { img: "/category-item-1.png", title: "Bộ lọc gió" },
    { img: "/category-item-2.png", title: "Bộ lọc gió" },
    { img: "/category-item-1.png", title: "Bộ lọc gió" },
    { img: "/category-item-2.png", title: "Bộ lọc gió" },
  ];
  return (
    <div className="flex items-center flex-wrap gap-4 pb-6 border border-b-gray-200 border-transparent mb-6">
      {list.map((item) => (
        <CategoryItem
          src={item.img}
          alt={item.title}
          title={item.title}
          key={item.title}
        ></CategoryItem>
      ))}
    </div>
  );
};

export default CategoryListItem;
