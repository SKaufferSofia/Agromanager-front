import { IPlotsDashboardType, Supply, SupplyApplied } from "./interfaces";
import { ISuscribe } from "./interfacesSupscriptions";
import { IUser } from "./interfacesUser";

export interface InitialState {
  isLoggin: boolean;
  token: string;
  registerData: {
    email: string;
    password: string;
  };
  userData: IUser;
  plot: IPlotsDashboardType[];
  stock: Supply[];
  editStock: string[];
  suppliesApplied: SupplyApplied[];
  selectedSubscription: ISuscribe | null;
  latitude: string;
  longitude: string;
  paymentLink: string;
  subscription: ISuscribe;
}
