import ButtonFilter from "@/components/button/ButtonFilter";
import Dropdown from "@/components/dropdown/Dropdown";
import React, { useState } from "react";

const ProductMenuFilter = () => {
  const btnList = ["Liên quan", "Bán chạy", "Mới nhất", "Nổi bật"];
  const [currentBtnActive, setCurrentBtnActive] = useState<string>(btnList[0]);
  const itemList = ["Giá: Thấp → Cao", "Giá: Cao → Thấp"];
  const [priceSort, setPriceSort] = useState("Giá: Thấp → Cao");
  return (
    <div className="flex items-center justify-between flex-wrap">
      <p className="text-xl font-semibold">Danh sách sản phẩm</p>
      <div className="flex items-center flex-wrap gap-3">
        <p className="mr-3">Sắp xếp theo</p>
        {btnList.map((item) => (
          <ButtonFilter
            key={item}
            currentBtnActive={currentBtnActive}
            onClick={() => setCurrentBtnActive(item)}
          >
            {item}
          </ButtonFilter>
        ))}
        <Dropdown name={priceSort} className="bg-transparent !text-black">
          <div className="bg-white rounded shadow-sm overflow-hidden">
            {itemList.map((item) => (
              <div
                key={item}
                className={`p-3 transition-all ${
                  item === priceSort
                    ? "cursor-wait text-gray-300"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setPriceSort(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProductMenuFilter;
