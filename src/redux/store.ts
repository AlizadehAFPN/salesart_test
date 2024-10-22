import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart_slices'; // Import cart slice reducer
import orderSlice from './slices/order_slices'; // Import order slice reducer

// Combine reducers into a root reducer
const rootReducer = {
  cart: cartSlice,
  order: orderSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
