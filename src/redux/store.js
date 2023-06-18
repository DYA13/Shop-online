import { configureStore } from "@reduxjs/toolkit";
import oggetti from './oggettiSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
      oggetti,
      cart
    }
  })