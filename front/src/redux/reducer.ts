// reducers/someReducer.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggin: false,
  token: "",
  userData: {
    id: "",
    name: "",
    surname: "",
    phone: "",
    placeName: "",
    email: "",
    active: false,
    roles: [],
  },
};

export const someSlice = createSlice({
  name: "some",
  initialState,
  reducers: {
    signIn: (state, action) => {
      console.log(action.payload);
      state.isLoggin = action.payload;
    },
    saveToken: (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
    },
    saveUserData: (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
    },
  },
});

export const { signIn, saveToken, saveUserData } = someSlice.actions;
export default someSlice.reducer;
