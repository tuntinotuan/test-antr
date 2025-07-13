import { productList } from "@/api/mock.api";
import PopupViewDetails from "@/components/popup/PopupViewDetails";
import ProductCard from "@/components/product/ProductCard";
import SkeletonProductCard from "@/components/skeleton/SkeletonProductCard";
import {
  handleGetDetailsData,
  handleShowPopupDetails,
} from "@/store/slices/productSlice";
import { RootState } from "@/store/store";
import { Id } from "@/types/product";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

const ProductCardList = () => {
  const [data, setData] = useState(productList);
  // const [showPopupDetails, setShowPopupDetails] = useState(false);
  const dispatch = useDispatch();
  const { showPopupDetails } = useSelector((state: RootState) => state.product);
  // const [items, setItems] = useState(productList);
  // const [hasMore, setHasMore] = useState(true);

  // const fetchMoreData = () => {
  //   if (items.length >= 27) {
  //     setHasMore(false);
  //     return;
  //   }
  //   setTimeout(() => {
  //     setItems((prev) => [...prev, ...productList]);
  //   }, 2000);
  // };
  const searchParams = useSearchParams();
  const searchTextParam = searchParams.get("search")?.toLowerCase() || "";
  const minPriceParam = Number(searchParams.get("minPrice"));
  const maxPriceParam = Number(searchParams.get("maxPrice"));

  useEffect(() => {
    if (searchTextParam || minPriceParam || maxPriceParam) {
      const newData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTextParam) && minPriceParam
          ? item.price > minPriceParam
          : true && maxPriceParam && item.price < maxPriceParam
      );
      setData(newData);
    } else {
      setData(productList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTextParam, minPriceParam, maxPriceParam]);
  const handleClickViewBtn = (id: Id) => {
    const singleData = productList.find((item) => item.id === id);
    dispatch(handleShowPopupDetails(true));
    dispatch(handleGetDetailsData(singleData));
  };
  return (
    <div className="flex items-start justify-center flex-wrap gap-4 my-5">
      <PopupViewDetails
        show={showPopupDetails}
        onClose={() => dispatch(handleShowPopupDetails(false))}
      ></PopupViewDetails>
      {data.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.image}
          name={product.name}
          describe={product.des}
          price={product.price}
          favorite={product.liked}
          onClickDetailsBtn={() => handleClickViewBtn(product.id)}
        ></ProductCard>
      ))}
    </div>
    // <InfiniteScroll
    //   dataLength={items.length}
    //   next={fetchMoreData}
    //   hasMore={hasMore}
    //   loader={<SkeletonProductCard />}
    //   endMessage={<p></p>}
    //   className="hide-scrollbar flex items-start gap-5 flex-wrap mt-5 overflow-y-hidden overflow-x-hidden"
    // >
    //   {items.map((item, index) => (
    //     <ProductCard key={index} imageSrc={item.image}></ProductCard>
    //   ))}
    // </InfiniteScroll>
  );
};

export default ProductCardList;
