"use client";

import React from "react";
import SuscribeCardListHome from "./SuscribeCardListHome";
import MainButton from "../MainButton/MainButton";
import SuscribeListCardHome from "./SuscribeListCardHome";

const SuscribeCardHome: React.FC = () => {
  const suscribes = [
    {
      id: 1,
      title: "Suscripción gratuita",
      price: 0,
      unid: "mo",
      describe:
        "Accede a las funcionalidades básicas de la aplicación sin costo alguno.",
    },
    {
      id: 2,
      title: "Suscripción mensual",
      price: 10,
      unid: "mo",
      describe:
        "Disfruta de todas las funcionalidades premium por un precio accesible cada mes.",
    },
    {
      id: 3,
      title: "Suscripción anual",
      price: 30,
      unid: "yr",
      describe:
        "Ahorra más con nuestra suscripción anual y accede a todas las funciones premium.",
    },
  ];

  return (
    <div className="px-10 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl poppins-bold-italic text-textColor mb-4">
          Planes de Suscripción
        </h2>
        <p className="text-lg text-opacity-80">
          Elige el plan que mejor se adapte a tus necesidades y comienza a
          gestionar tus lotes de manera más eficiente.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 mt-12">
        {suscribes.map((suscribe) => (
          <div key={suscribe.id}>
            <SuscribeListCardHome suscribe={suscribe} />
            {/* <SuscribeCardListHome suscribe={suscribe} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuscribeCardHome;
