import {
  IRegisterForm,
  IRegisterFormErrors,
} from "@/interfaces/interfacesUser";

export const validateRegister = (data: IRegisterForm): IRegisterFormErrors => {
  const errors: IRegisterFormErrors = {};
  if (!data.name) {
    errors.name = "El nombre es requerido";
  }

  if (!data.surname) {
    errors.surname = "El apellido es requerido";
  }

  if (!data.placeName) {
    errors.placeName = "El nombre de la tienda es requerido";
  }

  if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "El email es invalid";
  }

  if (data.password && data.password.length < 8) {
    errors.password =
      "La contraseña debe ser mayor a 8 caracteres, una letra mayuscula, una minuscula y un numero";
  }

  if (!data.confirmPassword && data.confirmPassword) {
    errors.confirmPassword = "Debes confirmar tu contraseña";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
};
