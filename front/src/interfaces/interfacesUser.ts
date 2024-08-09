export interface IUser {
  id?: string;
  name: string;
  surname: string;
  placeName: string;
  email: string;
  phone?: string;
  roles?: IRoles[];
  active?: boolean;
}

export interface IUserEdit {
  name?: string;
  surname?: string;
  phone?: string;
  placeName?: string;
}

export interface IUserGoogle {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface IRoles {
  id: number;
  name: string;
}

export interface IContactForm {
  name: string;
  email: string;
  message: string;
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

export type SignIn = (arg: boolean) => void;
export type SaveToken = (arg: string) => void;
export type SaveUserData = (arg: IUser) => void;
export type SaveUserDataGoogle = (arg: IUserGoogle) => void;
export type SaveRoles = (arg: IRoles[]) => void;
