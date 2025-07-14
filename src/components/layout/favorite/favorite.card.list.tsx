import FavoriteEmpty from "@/components/empty/FavoriteEmpty";
import ProductCard from "@/components/product/ProductCard";
import {
  handleGetDetailsData,
  handleShowPopupDetails,
  handleUpdateProductList,
} from "@/store/slices/productSlice";
import { RootState } from "@/store/store";
import { Id, ProductTypes } from "@/types/product";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoriteCardList = () => {
  const { productList } = useSelector((state: RootState) => state.product);
  const newFavoriteData = productList.filter((item) => item.liked);
  const [data, setData] = useState<ProductTypes[]>(newFavoriteData);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
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
    setData(newFavoriteData.filter((item) => item.id !== id));
  };
  return (
    <>
      {data.length > 0 ? (
        <div className="flex items-start justify-center flex-wrap gap-4 my-5">
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
        <FavoriteEmpty />
      )}
    </>
  );
};

export default FavoriteCardList;
