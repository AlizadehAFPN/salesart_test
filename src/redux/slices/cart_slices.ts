import { createSlice } from '@reduxjs/toolkit';

interface Product {
  productName: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: Product[];
  discount: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  discount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: () => {
      // const product = action.payload;

    },
    removeFromCart: () => {
      // const productName = action.payload;

    },
    clearCart: () => {

    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
