import FilterBox from "@/components/filter/FilterBox";
import FilterIcon from "@/components/icons/FilterIcon";
import React from "react";

const ProductLeft = () => {
  const filterProduct = {
    title: "Danh mục sản phẩm",
    show: true,
    checkList: [
      {
        checked: true,
        name: "Lọc gió Động cơ - Air Filter",
        quantity: 24,
      },
      {
        checked: true,
        name: "Lọc Nhiên Liệu - Fuel Filter",
        quantity: 24,
      },
      {
        checked: true,
        name: "Bộ lọc dầu",
        quantity: 24,
      },
      {
        checked: false,
        name: "Chưa phân loại",
        quantity: 24,
      },
      {
        checked: false,
        name: "Khác",
        quantity: 24,
      },
    ],
  };
  const filterPrice = {
    title: "Khoảng giá",
    show: true,
    btnList: [
      {
        name: "Dưới 100,000 đ",
      },
      {
        name: "100,000 đ - 300,000 đ",
      },
      {
        name: "300,000 đ - 500,000 đ",
      },
      {
        name: "Trên 500,000 đ",
      },
    ],
  };
  const filterRest = [
    {
      title: "Thương hiệu",
      show: true,
      checkList: [
        {
          checked: false,
          name: "Asakashi",
          quantity: 24,
        },
        {
          checked: false,
          name: "Bosch",
          quantity: 24,
        },
        {
          checked: false,
          name: "Huyndai",
          quantity: 24,
        },
      ],
    },
    {
      title: "Năm sản xuất",
      show: true,
      checkList: [
        {
          checked: false,
          name: "2021",
          quantity: 24,
        },
        {
          checked: false,
          name: "2020",
          quantity: 24,
        },
        {
          checked: false,
          name: "2019",
          quantity: 24,
        },
        {
          checked: false,
          name: "2018",
          quantity: 24,
        },
      ],
    },
    {
      title: "Xuất xứ",
      show: true,
      checkList: [
        {
          checked: false,
          name: "Đức",
          quantity: 24,
        },
        {
          checked: false,
          name: "Nhật Bản",
          quantity: 24,
        },
        {
          checked: false,
          name: "Trung Quốc",
          quantity: 24,
        },
      ],
    },
  ];
  return (
    <div className="w-[315px] flex flex-col h-auto">
      <div className="bg-white rounded-lg">
        <div className="flex items-center gap-3 border border-transparent border-b-gray-200 p-3">
          <FilterIcon></FilterIcon>
          <p className="text-2xl text-blue500 font-bold">Bộ lọc</p>
        </div>
        <FilterBox
          type="checked"
          show={filterProduct.show}
          title={filterProduct.title}
          list={filterProduct.checkList}
        ></FilterBox>
        <FilterBox
          type="button"
          show={filterPrice.show}
          title={filterPrice.title}
          list={filterPrice.btnList}
        ></FilterBox>
        {filterRest.map((item) => (
          <FilterBox
            key={item.title}
            type="checked"
            show={item.show}
            title={item.title}
            list={item.checkList}
          ></FilterBox>
        ))}
      </div>
    </div>
  );
};

export default ProductLeft;
