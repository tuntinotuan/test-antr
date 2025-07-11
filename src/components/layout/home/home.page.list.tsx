import React from "react";

const HomePageList = () => {
  const pageLists = ["Về chúng tôi", "Bài viết", "Catalog", "Liên hệ"];
  return (
    <div className="flex items-center gap-5">
      {pageLists.map((item) => (
        <p
          key={item}
          className="font-medium hover:text-blue600 cursor-pointer transition-all"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default HomePageList;
