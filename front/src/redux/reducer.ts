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
  plot: [],
};

export const someSlice = createSlice({
  name: "some",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isLoggin = action.payload;
    },
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    savePlot: (state, action) => {
      console.log(action.payload);
      state.plot = action.payload;
    },
  },
});

export const { signIn, saveToken, saveUserData, savePlot } = someSlice.actions;
export default someSlice.reducer;
