import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null,
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => { 
      state.productList = action.payload;
    }
  }
});

console.log(productSlice);

export const selectProduct = state => state.product.productList;

export const { getAllProducts } = productSlice.actions;

export default productSlice.reducer;
