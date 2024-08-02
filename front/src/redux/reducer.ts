import {
  IPlotsDashboardType,
  IPlotsType,
  Labors,
  Supply,
  SupplyApplied,
} from "@/interfaces/interfaces";
import { IUser } from "@/interfaces/interfacesUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isLoggin: boolean;
  token: string;
  userData: IUser;
  plot: IPlotsType[];
  stock: Supply[];
  editStock: string[];
  suppliesApplied: SupplyApplied[];
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
  stock: [],
  editStock: [],
  suppliesApplied: [],
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
    saveStock: (state, action: PayloadAction<Supply[]>) => {
      state.stock = action.payload;
    },
    addStock: (state, action: PayloadAction<Supply>) => {
      state.stock.push(action.payload);
    },
    updateStock: (state, action: PayloadAction<Supply>) => {
      state.stock.push;
    },

    editStock: (state, action: PayloadAction<string>) => {
      state.editStock.push(action.payload);
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
    updateSupplies: (state, action: PayloadAction<SupplyApplied[]>) => {
      state.suppliesApplied.push(...action.payload);
      console.log(action.payload);
    },
    saveSuppliesApplied: (state, action: PayloadAction<SupplyApplied[]>) => {
      state.suppliesApplied = action.payload;
      // console.log(action.payload);
    },
  },
});

export const {
  signIn,
  saveToken,
  saveUserData,
  savePlot,
  addPlot,
  saveStock,
  addStock,
  updateStock,
  editStock,
  updateLabors,
  updateSupplies,
  saveSuppliesApplied,
} = someSlice.actions;
export default someSlice.reducer;
