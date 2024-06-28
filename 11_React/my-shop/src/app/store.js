import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";

// 전역 상태를 보관하는 저장소 만들기
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer
  }
});