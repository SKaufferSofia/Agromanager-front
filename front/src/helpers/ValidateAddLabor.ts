interface IFormErrors {
  general?: string; 
}

export const validateLaborInput = (data: {
  name: string;
  contractor: string;
  price: string;
  surface: string;
}): IFormErrors => {
  const errors: IFormErrors = {};
  const errorMessages: string[] = [];

  if (!data.name && !data.contractor && !data.price && !data.surface) {
    errors.general = "Debes completar todos los campos";
    return errors; 
  }

  if (!data.name) {
    errorMessages.push("Nombre del labor es requerido");
  }

  if (!data.contractor) {
    errorMessages.push("Contratista es requerido");
  }

  if (!data.price) {
    errorMessages.push("El precio es requerido");
  }

  if (!data.surface) {
    errorMessages.push("La superficie es requerida");
  }

  if (errorMessages.length > 0) {
    errors.general = errorMessages.join(", ");
  }

  return errors;
};
