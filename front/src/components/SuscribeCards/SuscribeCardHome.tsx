"use client";

import React from "react";
import SuscribeCardListHome from "./SuscribeCardListHome";
import MainButton from "../MainButton/MainButton";
import SuscribeListCardHome from "./SuscribeListCardHome";
import suscribes from "@/utils/subscriptionHome";

const SuscribeCardHome: React.FC = () => {
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
