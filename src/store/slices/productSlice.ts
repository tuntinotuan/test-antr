import { productListFakeData } from "@/api/mock.api";
import { ProductTypes } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  showPopupDetails: boolean;
  detailsData: ProductTypes;
  productList: ProductTypes[];
}

const initialState: ProductState = {
  showPopupDetails: false,
  detailsData: {
    id: 111,
    kind: "course",
    name: "Học Toeic cấp tốc 550+",
    image: "toeic-550.jpg",
    price: 1500000,
    des: "Learn data science, automation, build websites, games and apps!",
    liked: false,
  },
  productList: productListFakeData,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleShowPopupDetails: (state, action) => ({
      ...state,
      showPopupDetails: action.payload,
    }),
    handleGetDetailsData: (state, action) => ({
      ...state,
      detailsData: action.payload,
    }),
    handleUpdateProductList: (state, action) => ({
      ...state,
      productList: action.payload,
    }),
  },
});

export const {
  handleShowPopupDetails,
  handleGetDetailsData,
  handleUpdateProductList,
} = productSlice.actions;
export default productSlice.reducer;
