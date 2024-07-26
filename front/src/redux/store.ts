// store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; // Asegúrate de tener un archivo con tus reducers

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
