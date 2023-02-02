import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import cartSlice from "../features/cartSlice";
import productSlice from '../features/productsSlice'

export const store = configureStore({
  reducer: {
    cartSlice,
    productSlice
  } 
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
