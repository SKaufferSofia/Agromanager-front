import React from "react";

const AboutComponent: React.FC = () => {
  return (
    <div className="mx-auto max-w-[80%] py-32 sm:py-38 lg:absolute lg:left-[10%]">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:p-4">
          BIENVENIDO A NUESTRA PLATAFORMA
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Somos una empresa dedicada a ofrecer soluciones innovadoras para la
          gestión agrícola. Nuestra plataforma te permite crear, organizar y
          supervisar tus lotes, labores e insumos de manera eficiente,
          asegurando el éxito de tus actividades agrícolas.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
