"use client";
import { productListFakeData } from "@/api/mock.api";
import FilterCheckItem from "@/components/filter/FilterCheckItem";
import FilterSelectPrice from "@/components/filter/FilterSelectPrice";
import FilterMain from "@/components/layout/filter/filter.main";
import HeaderMain from "@/components/layout/header/header.main";
import ProductCardList from "@/components/layout/product/product.card.list";
import ProductCard from "@/components/product/ProductCard";
import { useHydrate } from "@/hooks/useHydrate";
import { handleUpdateProductList } from "@/store/slices/productSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const dynamic = "force-dynamic";

export default function Home() {
  const { productList } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(handleUpdateProductList(productListFakeData));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const { hydrated } = useHydrate();
  if (!hydrated) return null; // or a skeleton/placeholder
  return (
    <div className="relative">
      <HeaderMain></HeaderMain>
      <FilterMain></FilterMain>
      <ProductCardList listData={productList}></ProductCardList>
    </div>
  );
}
