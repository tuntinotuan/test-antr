import PopupViewDetails from "@/components/popup/PopupViewDetails";
import ProductCard from "@/components/product/ProductCard";
import SkeletonProductCard from "@/components/skeleton/SkeletonProductCard";
import {
  handleGetDetailsData,
  handleShowPopupDetails,
  handleUpdateProductList,
} from "@/store/slices/productSlice";
import { RootState } from "@/store/store";
import { Id, ProductTypes } from "@/types/product";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

const ProductCardList = ({ listData }: { listData: ProductTypes[] }) => {
  const { showPopupDetails, productList } = useSelector(
    (state: RootState) => state.product
  );
  const [data, setData] = useState(productList);
  const dispatch = useDispatch();
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
      setData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTextParam, minPriceParam, maxPriceParam]);
  const handleClickViewBtn = (id: Id) => {
    const singleData = productList.find((item) => item.id === id);
    dispatch(handleShowPopupDetails(true));
    dispatch(handleGetDetailsData(singleData));
  };
  const handleClickFavoriteBtn = (id: Id, liked: boolean) => {
    console.log("favorite", id, liked);
    const newLists = productList.map((item) => {
      if (item.id !== id) return item;
      return { ...item, liked: !liked };
    });
    dispatch(handleUpdateProductList(newLists));
    setData(newLists);
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
          onClickFavoriteBtn={() =>
            handleClickFavoriteBtn(product.id, product.liked)
          }
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
