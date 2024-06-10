import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";

// 전역 상태를 보관하는 저장소 만들기
export const store = configureStore({
  reducer: {
    product: productSlice
  }
});