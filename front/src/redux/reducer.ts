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
  edit: string;
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
  edit: "",
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

      console.log(action.payload);
    },
    addStock: (state, action: PayloadAction<Supply>) => {
      state.stock.push(action.payload);
    },
    updateStock: (state, action: PayloadAction<Supply>) => {
      const updatedStock = action.payload;
      state.stock = state.stock.map((stockItem) =>
        stockItem.id === updatedStock.id ? updatedStock : stockItem
      );
    },

    edit: (state, action: PayloadAction<string>) => {
      state.edit = "edit";
      state.edit = action.payload;
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
    updateSupplies: (
      state,
      action: PayloadAction<{ plotId: string; supplies: any[] }>
    ) => {
      const { plotId, supplies } = action.payload;
      const plot = state.plot.find((plot) => plot.id === plotId);
      if (plot) {
        plot.supplies = supplies;
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
  saveStock,
  addStock,
  updateStock,
  edit,
  updateLabors,
  updateSupplies,
} = someSlice.actions;
export default someSlice.reducer;
