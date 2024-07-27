import { configureStore } from "@reduxjs/toolkit";
import { someSlice } from "./reducer";

const store = configureStore({
  reducer: someSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
