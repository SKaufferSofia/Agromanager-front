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
  surface: string;
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
  surface: string;
  cereal: string;
  labors: string[] | null;
  supplies?: Supply[] | "";
}

export interface PlotPanelProps {
  plots: IPlotsType[];
  setPlots: React.Dispatch<React.SetStateAction<IPlotsType[]>>;
}

export interface ICreatePlot {
  id: number;
  surface: string;
  cereal: string;
  user: string;
}

export type SaveDataPlot = (arg: IPlotsType[]) => void;
