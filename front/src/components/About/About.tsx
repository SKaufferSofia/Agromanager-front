import React from "react";

const AboutComponent: React.FC = () => {
  return (
    <div className="mx-auto max-w-[80%] py-32 sm:py-38 lg:absolute lg:left-[10%]">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:p-4">
          ACERCA DE NOSOTROS
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          saepe, exercitationem perspiciatis iure, inventore totam quae maxime
          expedita deleniti tempora aspernatur id? Nisi vitae dolore explicabo
          corrupti impedit quod quos!
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
