import { IPlotsType, Labors } from "@/interfaces/interfaces";
import { IUser } from "@/interfaces/interfacesUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isLoggin: boolean;
  token: string;
  userData: IUser;
  plot: IPlotsType[];
}

const initialState: InitialState = {
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
      state.plot = action.payload;
    },
    addPlot: (state, action: PayloadAction<IPlotsType>) => {
      state.plot.push(action.payload);
    },
    updateLabors: (
      state,
      action: PayloadAction<{ plotId: string; labors: Labors[] }>
    ) => {
      const { plotId, labors } = action.payload;
      const plot = state.plot.find((plot) => plot.id === plotId);
      if (plot) {
        plot.labors = labors;
      }
    },
  },
});

export const {
  signIn,
  saveToken,
  saveUserData,
  savePlot,
  addPlot,
  updateLabors,
} = someSlice.actions;
export default someSlice.reducer;
