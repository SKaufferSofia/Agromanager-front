import React from "react";

const ContactComponent: React.FC = () => {
  return (
    <div className="m-8 max-w-[40%] sm:py-38 z-10">
      <div className="text-left">
        <h1 className="text-4xl font-bold tracking-tight text-textColor sm:text-5xl sm:p-4">
          Contáctanos
        </h1>
        <p className="mt-6 text-lg leading-10 text-textColor font-normal">
          Si tienes alguna pregunta, comentario o simplemente deseas saber más
          sobre nosotros, no dudes en ponerte en contacto. Nuestro equipo está
          aquí para ayudarte y responder a todas tus inquietudes.
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
