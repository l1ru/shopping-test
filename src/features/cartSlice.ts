import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

type ProductCart = {
  id: number,
  quantity: number,
}

export interface CartState {
  products: ProductCart[];
  opened: boolean;
}

const initialState: CartState = {
  products: [],
  opened: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleOpened: (state: CartState) => {
      state.opened = !state.opened
    },
    increment: (state: CartState, action: PayloadAction<number>) => {
      if (state.products.find(product => product.id === action.payload)) {
        state.products[state.products.findIndex(product => product.id === action.payload)].quantity += 1
      } else {
        state.products = [...state.products, {
          id: action.payload,
          quantity: 1,
        }];
      }
    },
    decrement: (state: CartState, action: PayloadAction<number>) => {
      if (state.products.find(product => product.id === action.payload)) {
        let product = state.products[state.products.findIndex(product => product.id === action.payload)]
        if(product.quantity === 0) {
            let newProducts = state.products.filter((productValue) => {
              return productValue.id !== product.id
            })
        } else { 
          product.quantity -= 1
        }
      }
    }
  },
});

export const { increment, decrement, toggleOpened } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cartSlice;


export default cartSlice.reducer;
