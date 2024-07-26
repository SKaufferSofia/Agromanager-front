export interface IUser {
  id?: string;
  name: string;
  surname: string;
  placeName: string;
  email: string;
  phone?: number;
  roles: IRoles[];
  active: boolean;
}

export interface IRoles {
  id: number;
  name: string;
}

export interface IRegisterForm {
  name: string;
  surname: string;
  phone?: number;
  placeName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterFormErrors {
  [key: string]: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginFormErrors {
  [key: string]: string;
}

export interface Supply {
  name: string;
  provider: string;
  stock: number;
  price: number;
  category: string;
  measurement: string;
  user: string;
}

export interface IPlotsType {
  id: number;
  surface: number;
  cereal: string;
  labors: string[] | null;
  supplies: Supply[] | "";
}

export interface Labors {
  id: string;
  name: string;
  contractor: string;
  price: number;
  surface: number;
  plot: IPlotsType;
}

export interface IPlotsNavbar {
  plots: IPlotsType[];
}

export interface PlotDetailCardProps {
  id: number;
  surface: number;
  cereal: string;
  labors: string[] | null;
  supplies?: Supply[] | "";
}

export interface PlotPanelProps {
  plots: IPlotsType[];
}

export interface ISuscribe {
  id: number;
  title: string;
  price: number;
  unid: string;
  describe: string;
}

export type SaveToken = (arg: string) => void;
export type SaveUserData = (arg: IUser) => void;