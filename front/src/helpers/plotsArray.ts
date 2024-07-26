import { IPlotsType } from "@/interfaces/interfaces";

const plots: IPlotsType[] = [
  {
    id: 1,
    surface: 50,
    cereal: "Maíz",
    labors: ["Laboreo Inicial"],
    supplies: [
      {
        name: "Fertilizante",
        provider: "Proveedor X",
        stock: 100,
        price: 50,
        category: "Fertilizante",
        measurement: "kg",
        user: "UUID-1",
      },
      {
        name: "Herbicida",
        provider: "Proveedor Y",
        stock: 200,
        price: 75,
        category: "Herbicida",
        measurement: "l",
        user: "UUID-2",
      },
    ],
  },
  {
    id: 2,
    surface: 75,
    cereal: "Soja",
    labors: ["Laboreo de Mantenimiento"],
    supplies: [
      {
        name: "Fertilizante",
        provider: "Proveedor Z",
        stock: 150,
        price: 60,
        category: "Fertilizante",
        measurement: "kg",
        user: "UUID-3",
      },
    ],
  },
  {
    id: 3,
    surface: 75,
    cereal: "Cannabis",
    labors: ["Laboreo de Mantenimiento"],
    supplies: [
      {
        name: "Fertilizante",
        provider: "Proveedor Z",
        stock: 150,
        price: 60,
        category: "Fertilizante",
        measurement: "kg",
        user: "UUID-3",
      },
    ],
  },
  {
    id: 3,
    surface: 75,
    cereal: "Opio",
    labors: ["Laboreo de Mantenimiento"],
    supplies: [
      {
        name: "Fertilizante",
        provider: "Proveedor Z",
        stock: 150,
        price: 60,
        category: "Fertilizante",
        measurement: "kg",
        user: "UUID-3",
      },
    ],
  },
  {
    id: 3,
    surface: 75,
    cereal: "Opio",
    labors: ["Laboreo de Mantenimiento"],
    supplies: [
      {
        name: "Fertilizante",
        provider: "Proveedor Z",
        stock: 150,
        price: 60,
        category: "Fertilizante",
        measurement: "kg",
        user: "UUID-3",
      },
      {
        name: "Fertilizante",
        provider: "Proveedor Z",
        stock: 150,
        price: 60,
        category: "Fertilizante",
        measurement: "kg",
        user: "UUID-3",
      },
      {
        name: "Fertilizante",
        provider: "Proveedor Z",
        stock: 150,
        price: 60,
        category: "Fertilizante",
        measurement: "kg",
        user: "UUID-3",
      },
    ],
  },
];

export default plots;
