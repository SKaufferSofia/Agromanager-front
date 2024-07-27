import { ILoginForm, ILoginFormErrors } from "@/interfaces/interfacesUser";

export const validateLogin = (data: ILoginForm): ILoginFormErrors => {
  const errors: ILoginFormErrors = {};

  if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
};
