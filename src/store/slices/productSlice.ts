import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  showPopupDetails: boolean;
}

const initialState: ProductState = {
  showPopupDetails: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleShowPopupDetails: (state, action) => ({
      ...state,
      showPopupDetails: action.payload,
    }),
  },
});

export const { handleShowPopupDetails } = productSlice.actions;
export default productSlice.reducer;
