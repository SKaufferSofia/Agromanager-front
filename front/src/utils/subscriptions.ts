import { ISuscribe } from "@/interfaces/interfacesSupscriptions";

const subscriptions: ISuscribe[] = [
  {
    id: 1,
    title: "Suscripción gratuita",
    price: 0,
    unid: "gratis",
    describe:
      "Disfruta de todos los beneficios de nuestra aplicación durante 30 días de forma totalmente gratuita. Perfecta para probar todas las características antes de decidirte por una suscripción de pago. No se requiere tarjeta de crédito.",
  },
  {
    id: 2,
    title: "Suscripción mensual",
    price: 10,
    unid: "por mes",
    describe:
      "Accede a todas las funciones premium de nuestra aplicación abonando una cuota mensual. Ideal para quienes prefieren la flexibilidad de pagar mes a mes sin comprometerse a largo plazo.",
  },
  {
    id: 3,
    title: "Suscripción anual",
    price: 30,
    unid: "por año",
    describe:
      "Obtén un descuento significativo al suscribirte por un año completo. Disfruta de todos los beneficios premium de nuestra aplicación y ahorra en comparación con la suscripción mensual.",
  },
];

export default subscriptions;
