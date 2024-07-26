// reducers/someReducer.ts
import { createSlice } from "@reduxjs/toolkit";

const someSlice = createSlice({
  name: "some",
  initialState: {},
  reducers: {
    // Define tus reducers aquí
  },
});

export const { actions, reducer } = someSlice;
export default reducer;
