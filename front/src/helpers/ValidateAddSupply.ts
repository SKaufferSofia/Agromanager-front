interface ISupplyFormErrors {
  general?: string; 
}

export const validateSupplyInput = (data: {
  supplyId: string;
  quantity: string;
}): ISupplyFormErrors => {
  const errors: ISupplyFormErrors = {};
  const errorMessages: string[] = [];

  if (!data.supplyId && !data.quantity) {
    errors.general = "Debes completar todos los campos";
    return errors; 
  }

  if (!data.supplyId) {
    errorMessages.push("Debes seleccionar un insumo");
  }

  if (!data.quantity) {
    errorMessages.push("Cantidad es requerida");
  } 

  if (errorMessages.length > 0) {
    errors.general = errorMessages.join(", ");
  }

  return errors;
};
