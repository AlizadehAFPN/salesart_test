import { createSlice } from '@reduxjs/toolkit';

interface OrderState {
  address: string;
  paymentMethod: string;
  errors: string[];
}

const initialState: OrderState = {
  address: '',
  paymentMethod: '',
  errors: [],
};


export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    validateOrderForm: () => {

    },
    clearErrors: () => {

    },
  },
});

export const { setAddress, setPaymentMethod, validateOrderForm, clearErrors } = orderSlice.actions;
export default orderSlice.reducer;
