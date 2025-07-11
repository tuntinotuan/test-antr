import { productList } from "@/api/mock.api";
import ProductCard from "@/components/product/ProductCard";
import SkeletonProductCard from "@/components/skeleton/SkeletonProductCard";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductCardList = () => {
  const [items, setItems] = useState(productList);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 27) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems((prev) => [...prev, ...productList]);
    }, 2000);
  };
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<SkeletonProductCard />}
      endMessage={<p></p>}
      className="hide-scrollbar flex items-start gap-5 flex-wrap mt-5 overflow-y-hidden overflow-x-hidden"
    >
      {items.map((item, index) => (
        <ProductCard key={index} imageSrc={item.image}></ProductCard>
      ))}
    </InfiniteScroll>
  );
};

export default ProductCardList;
