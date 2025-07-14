"use client";
import FavoriteCardList from "@/components/layout/favorite/favorite.card.list";
import HeaderMain from "@/components/layout/header/header.main";
import { useHydrate } from "@/hooks/useHydrate";
import React from "react";

const FavoritePage = () => {
  const { hydrated } = useHydrate();
  if (!hydrated) return null;
  return (
    <div>
      <HeaderMain pageTitle="Danh sách yêu thích" hiddenSearch></HeaderMain>
      <FavoriteCardList></FavoriteCardList>
    </div>
  );
};

export default FavoritePage;
