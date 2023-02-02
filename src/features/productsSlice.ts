import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'
import { RootState } from '../app/store';

export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string,
  updatedAt: string
}

export type ProductState = {
  products: Product[],
  count: number
}

const initialState: ProductState = {
  products: [],
  count: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state: ProductState, { payload }: PayloadAction<ProductState>) => {
      state.count = payload.count
      state.products = payload.products
    },
  },
});

export const { setProducts } = productSlice.actions;

export const getProducts = (state: RootState) => state.productSlice;

export default productSlice.reducer;
