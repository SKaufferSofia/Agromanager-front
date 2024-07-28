import { IPlotsType } from "@/interfaces/interfaces";
import { IInitialState } from "@/interfaces/interfacesRedux";
import { IUser } from "@/interfaces/interfacesUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

const initialState: IInitialState = {
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
    signIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggin = action.payload;
    },
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    saveUserData: (state, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
    savePlot: (state, action: PayloadAction<IPlotsType[]>) => {
      console.log(action.payload);
      state.plot = action.payload;
    },
  },
});

export const { signIn, saveToken, saveUserData, savePlot } = someSlice.actions;
export default someSlice.reducer;
