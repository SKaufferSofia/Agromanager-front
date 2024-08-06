import { ILoginForm, ILoginFormErrors } from "@/interfaces/interfacesUser";

export const validateLogin = (data: ILoginForm): ILoginFormErrors => {
  const errors: ILoginFormErrors = {};

  if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "El email es invalido";
  }

  if (data.password && data.password.length < 8) {
    errors.password =
      "La contraseña debe ser mayor a 8 caracteres, una letra mayuscula, una minuscula y un numero";
  }

  return errors;
};
