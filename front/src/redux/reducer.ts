import {
  IPlotsDashboardType,
  Labors,
  Supply,
  SupplyApplied,
} from "@/interfaces/interfaces";
import { IUser } from "@/interfaces/interfacesUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISuscribe } from "@/interfaces/interfacesSupscriptions";
import { InitialState } from "@/interfaces/interfacesRedux";

const savedSubscription =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("subscription") || "null")
    : null;

const initialState: InitialState = {
  isLoggin: false,
  token: "",
  registerData: {
    email: "",
    password: "",
  },
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
  latitude: "",
  longitude: "",
  selectedSubscription: savedSubscription, // Cargar la suscripción desde localStorage
  subscription: {
    id: 0,
    title: "",
    price: 0,
    describe: "",
    unid: "",
  },
  paymentLink: "",
};

export const someSlice = createSlice({
  name: "some",
  initialState,
  reducers: {
    signInRedux: (state, action: PayloadAction<boolean>) => {
      state.isLoggin = action.payload;
    },
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    saveUserData: (state, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
    saveRegisterData: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.registerData = action.payload;
    },
    savePlot: (state, action: PayloadAction<IPlotsDashboardType[]>) => {
      state.plot = action.payload;
    },

    addPlot: (state, action: PayloadAction<IPlotsDashboardType>) => {
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
    saveLatitude: (state, action: PayloadAction<string>) => {
      state.latitude = action.payload;
    },
    saveLongitude: (state, action: PayloadAction<string>) => {
      state.longitude = action.payload;
    },
    setSelectedSubscription: (state, action: PayloadAction<ISuscribe>) => {
      state.selectedSubscription = action.payload;
      console.log(action.payload);
      console.log(state.selectedSubscription);
    },

    paymentLink: (state, action: PayloadAction<string>) => {
      state.paymentLink = action.payload;
    },
  },
});

export const {
  signInRedux,
  saveToken,
  saveRegisterData,
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
  saveLatitude,
  saveLongitude,
  setSelectedSubscription,
  paymentLink,
} = someSlice.actions;
export default someSlice.reducer;
