export interface Category {
  id: string;
  name: string;
}

export interface Measurement {
  id: string;
  name: string;
}

export interface Supply {
  id: string | "";
  name: string;
  provider: string;
  stock: number;
  price: number;
  category: Category;
  measurement: Measurement;
  imgUrl?: File | "";
}

export interface ISupplyEditForm {
  name?: string;
  provider?: string;
  stock?: number;
  price?: number;
  imgUrl?: File | string;
}

export interface IPlotsDashboardType {
  id: string;
  surface: string;
  cereal: string;
  labors: Labors[] | null;
  supplies: SupplyApplied[] | null;
  latitude?: string;
  longitude?: string;
}

export interface Labors {
  id: string;
  name: string;
  contractor: string;
  price: number;
  surface: number;
  plot: IPlotsDashboardType;
}

export interface IPlotsNavbar {
  plots: IPlotsDashboardType[];
}

export interface PlotDetailCardProps {
  id: string;
  surface: string;
  cereal: string;
  labors: Labors[] | null;
  supplies?: SupplyApplied[] | null;
}

export interface PlotPanelProps {
  plots: IPlotsDashboardType[];
  setPlots: React.Dispatch<React.SetStateAction<IPlotsDashboardType[]>>;
}
export interface StockPanelProps {
  supplies: Supply[];
}

export interface CreateStockFormProps {
  categories: Category[];
  measurements: Measurement[];
}
export interface ICreatePlot {
  id: number;
  surface: string;
  cereal: string;
  user: string;
  latitude?: string;
  longitude?: string;
}

export interface StockTableProps {
  supplies: Supply[];
  handleEditClick: (supply: Supply) => void;
}

export interface StockEditFormProps {
  supply: Supply;
  onSubmit: (updatedSupply: Supply) => void;
  onCancel: () => void;
  onImageChange: (file: File | null) => void;
}

export interface SupplyApplied {
  id: string;
  quantity: number;
  supply: Supply;
}

export interface IRole {
  active: boolean
  name?:string

}
export interface IUserForAdmin {
  id: string;
  name: string;
  surname: string;
  phone?: string;
  placeName: string;
  email: string;
  active: boolean;
  plots: IPlotsDashboardType[];
  supplies?: SupplyApplied[];
  roles: IRole[];
}

export type SaveDataPlot = (arg: IPlotsDashboardType[]) => void;
export type AddDataPlot = (arg: IPlotsDashboardType) => void;
