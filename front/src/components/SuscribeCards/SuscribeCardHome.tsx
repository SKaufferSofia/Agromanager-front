"use client";

import React from "react";
import SuscribeCardListHome from "./SuscribeCardListHome";
import MainButton from "../MainButton/MainButton";

const SuscribeCardHome: React.FC = () => {
  const suscribes = [
    {
      id: 1,
      title: "Suscripcion gratuita",
      price: 0,
      unid: "mo",
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Suscripcion por mes",
      price: 10,
      unid: "mo",
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Suscripcion anual",
      price: 30,
      unid: "mo",
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10">
      {suscribes.map((suscribe) => (
        <div key={suscribe.id}>
          <SuscribeCardListHome suscribe={suscribe} />
        </div>
      ))}
      <div className="col-span-3">
        <MainButton text="Suscribirse" path="/login" />
      </div>
    </div>
  );
};

export default SuscribeCardHome;
