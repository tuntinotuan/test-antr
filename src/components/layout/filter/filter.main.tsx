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
    <FilterSelectPrice
      fromDefaultValue={minPriceParam?.toString() || ""}
      toDefaultValue={maxPriceParam?.toString() || ""}
      onClickApplyButon={handleApplyFilterPrice}
    ></FilterSelectPrice>
  );
};

export default FilterMain;
