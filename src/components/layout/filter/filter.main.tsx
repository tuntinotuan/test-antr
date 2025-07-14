import Dropdown from "@/components/dropdown/Dropdown";
import FilterSelectPrice from "@/components/filter/FilterSelectPrice";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const FilterMain = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const minPriceParam = searchParams.get("minPrice");
  const maxPriceParam = searchParams.get("maxPrice");
  const handleApplyFilterPrice = (from: any, to: any) => {
    if (!from && !to) return;
    const params = new URLSearchParams(window.location.search);
    params.set("minPrice", from);
    params.set("maxPrice", to);
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex items-center justify-center mt-3">
      <Dropdown
        name="Khoảng giá"
        className="w-[200px] justify-between bg-white !text-black !py-2 px-2"
      >
        <div className="bg-white rounded shadow-sm overflow-hidden">
          <FilterSelectPrice
            fromDefaultValue={minPriceParam?.toString() || ""}
            toDefaultValue={maxPriceParam?.toString() || ""}
            onClickApplyButon={handleApplyFilterPrice}
          ></FilterSelectPrice>
        </div>
      </Dropdown>
    </div>
  );
};

export default FilterMain;
