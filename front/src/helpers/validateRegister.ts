import {
  IRegisterForm,
  IRegisterFormErrors,
} from "@/interfaces/interfacesUser";

export const validateRegister = (data: IRegisterForm): IRegisterFormErrors => {
  const errors: IRegisterFormErrors = {};

  if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "El email es invalido";
  }

  if (data.password) {
    const password = data.password;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        "La contraseña debe ser mayor a 8 caracteres, una letra mayúscula, una minúscula y un número";
    }
  }

  if (!data.confirmPassword && data.confirmPassword) {
    errors.confirmPassword = "Debes confirmar tu contraseña";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
};
