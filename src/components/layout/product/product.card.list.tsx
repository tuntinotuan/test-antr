import { productList } from "@/api/mock.api";
import ProductCard from "@/components/product/ProductCard";
import SkeletonProductCard from "@/components/skeleton/SkeletonProductCard";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductCardList = () => {
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
  const searchTextParam = searchParams.get("search");
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 my-5">
      <p>{searchTextParam}</p>
      {productList.map((product) => (
        <ProductCard
          key={product.name}
          imageSrc={product.image}
          name={product.name}
          describe={product.des}
          price={product.price}
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
