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
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  }
});

// 선택자 함수
export const selectProduct = state => state.product.selectedProduct;
export const selectProductList = state => state.product.productList;

// 액션 생성 함수
export const { getAllProducts, getSelectedProduct, clearSelectedProduct } = productSlice.actions;

// 리듀서 함수들
export default productSlice.reducer;
