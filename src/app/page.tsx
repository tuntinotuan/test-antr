"use client";
import { productList } from "@/api/mock.api";
import HeaderMain from "@/components/layout/header/header.main";
import ProductCardList from "@/components/layout/product/product.card.list";
import ProductCard from "@/components/product/ProductCard";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="relative">
      <HeaderMain></HeaderMain>
      <ProductCardList></ProductCardList>
    </div>
  );
}
