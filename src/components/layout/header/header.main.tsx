import React, { useEffect, useState } from "react";
import SearchHeader from "../../search/SearchHeader";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonFavorite from "@/components/button/ButtonFavorite";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import HeaderLogo from "@/components/logo/header.logo";
import ButtonHistory from "@/components/button/ButtonHistory";
import ButtonCart from "@/components/button/ButtonCart";

const HeaderMain = ({
  pageTitle,
  hiddenSearch = false,
}: {
  pageTitle?: string;
  hiddenSearch?: boolean;
}) => {
  const { productList, clickedHistories } = useSelector(
    (state: RootState) => state.product
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  const [scrollData, setScrollData] = useState({
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      setScrollData({ scrollTop, scrollHeight, clientHeight });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSearchProduct = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
      router.push(`?${params.toString()}`);
    } else {
      params.delete("search");
      const newQuery = params.toString();
      router.replace(`?${newQuery}`, { scroll: false });
    }
  };
  const quantityFavorite = productList.filter(
    (item) => item.liked === true
  )?.length;
  return (
    <div
      className={`sticky top-0 flex items-center justify-center p-1 bg-white bg-opacity-60 backdrop-blur-sm z-[99] ${
        scrollData.scrollTop > 0 ? "shadow-lg" : ""
      }`}
    >
      {pageTitle && (
        <h1 className="px-2 py-1 text-2xl font-bold">{pageTitle}</h1>
      )}
      <div className="absolute top-1/2 -translate-y-1/2 left-2">
        <HeaderLogo></HeaderLogo>
      </div>
      {!hiddenSearch && (
        <SearchHeader
          placeholder="Tìm kiếm khoá học..."
          width={300}
          setValues={handleSearchProduct}
        ></SearchHeader>
      )}
      <div className="absolute top-2 right-1 flex items-center gap-3">
        {/* <ButtonCart></ButtonCart> */}
        <ButtonFavorite quantity={quantityFavorite} />
        <ButtonHistory quantity={clickedHistories?.length} />
        <Image
          src="/avatar-black-umbrella.jpg"
          alt="Avatar Icon"
          width={30}
          height={30}
          priority
          className="border border-green-300 rounded-full cursor-wait"
          unoptimized
        />
      </div>
    </div>
  );
};

export default HeaderMain;
