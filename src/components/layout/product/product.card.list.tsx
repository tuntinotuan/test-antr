import ProductEmpty from "@/components/empty/ProductEmpty";
import PopupViewDetails from "@/components/popup/PopupViewDetails";
import ProductCard from "@/components/product/ProductCard";
import SkeletonProductCard from "@/components/skeleton/SkeletonProductCard";
import { useNotify } from "@/contexts/notifyStates";
import {
  handleGetDetailsData,
  handleShowPopupDetails,
  handleUpdateClickedHistories,
  handleUpdateProductList,
} from "@/store/slices/productSlice";
import { RootState } from "@/store/store";
import { Id, ProductTypes } from "@/types/product";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

const ProductCardList = ({ listData }: { listData: ProductTypes[] }) => {
  const { showPopupDetails, productList, clickedHistories } = useSelector(
    (state: RootState) => state.product
  );
  const { setActiveNormal, setTitle } = useNotify();
  const [data, setData] = useState(productList);
  const [loading, setLoading] = useState<boolean>(true);
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
    setLoading(true);
    async function fetchData() {
      if (searchTextParam) {
        const newData = productList.filter((item) =>
          item.name.toLowerCase().includes(searchTextParam)
        );
        setData(newData);
      } else {
        setData(productList);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTextParam]);
  useEffect(() => {
    setLoading(true);
    if (minPriceParam || maxPriceParam) {
      const newData = productList.filter((item) => {
        if (!maxPriceParam || maxPriceParam === 0)
          return item.price > minPriceParam;
        if (!minPriceParam || minPriceParam === 0)
          return item.price < maxPriceParam;
        item.price > minPriceParam && item.price < maxPriceParam;
      });
      setData(newData);
    } else {
      setData(productList);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPriceParam, maxPriceParam]);
  const handleClickViewBtn = (id: Id) => {
    const singleData = productList.find((item) => item.id === id);
    dispatch(handleShowPopupDetails(true));
    dispatch(handleGetDetailsData(singleData));
    //
    const newHistories = clickedHistories.filter((num) => num !== id);
    dispatch(handleUpdateClickedHistories([id, ...newHistories]));
  };
  const handleClickFavoriteBtn = (id: Id, liked: boolean) => {
    console.log("favorite", id, liked);
    const newLists = productList.map((item) => {
      if (item.id !== id) return item;
      return { ...item, liked: !liked };
    });
    dispatch(handleUpdateProductList(newLists));
    setData(newLists);
    if (!liked) {
      setActiveNormal(true);
      setTitle("Đã thêm vào yêu thích");
    }
  };
  console.log("clickedHistories", clickedHistories);
  return (
    <div className="px-2">
      {!loading && (
        <>
          {data.length > 0 ? (
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
          ) : (
            <ProductEmpty />
          )}
        </>
      )}
      {loading && <SkeletonProductCard></SkeletonProductCard>}
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
