// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Map the cart slice reducer under the 'cart' state key
  },
});
