"use client";
import { productList } from "@/api/mock.api";
import FilterCheckItem from "@/components/filter/FilterCheckItem";
import FilterSelectPrice from "@/components/filter/FilterSelectPrice";
import FilterMain from "@/components/layout/filter/filter.main";
import HeaderMain from "@/components/layout/header/header.main";
import ProductCardList from "@/components/layout/product/product.card.list";
import ProductCard from "@/components/product/ProductCard";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="relative">
      <HeaderMain></HeaderMain>
      <FilterMain></FilterMain>
      <ProductCardList></ProductCardList>
    </div>
  );
}
