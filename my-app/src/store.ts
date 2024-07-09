import { configureStore, createSlice } from "@reduxjs/toolkit";

interface CartState {
  counter: number;
}

const initialState: CartState = {
  counter: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state) => {
      state.counter += 1;
    },
    remove: (state) => {
      state.counter -= 1;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
