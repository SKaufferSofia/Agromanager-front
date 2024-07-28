import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="p-5 w-full flex flex-col justify-center items-center ">
      <div className="w-full max-w-md">
        <h2 className="text-4xl text-textColor font-semibold mb-4 text-center">
          Contáctanos
        </h2>
        <h3 className="text-xl text-textColor font-semibold mb-4 text-center">
          Envíanos tu mensaje y te responderemos a la brevedad
        </h3>
        <form className="space-y-5 flex flex-col h-full">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Mensaje"
              className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
            />
          </div>

          <div className="mt-auto flex justify-center">
            <button className="w-32 p-2 flex justify-center border-footerColor border-2 rounded-md shadow-sm text-sm font-medium text-footerColor hover:bg-gray-200 focus:ring-offset-2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
