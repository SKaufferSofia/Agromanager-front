import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="p-5 w-[80%] flex flex-col justify-center items-center z-10 bg-black bg-opacity-60">
      <div className="w-full max-w-md">
        <h2 className="text-4xl text-gray-50 font-semibold mb-4 text-center">
          Estamos para ayudarte.
        </h2>
        <h3 className="text-md text-gray-50 font-medium mb-4 text-center">
          Envíanos tu mensaje y te responderemos a la brevedad
        </h3>
        <form className="space-y-5 flex flex-col h-full">
          <div>
            <label className="block text-sm font-medium text-gray-50">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="p-2 w-full flex justify-center border border-gray-50 rounded-sm shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-50">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="p-2 w-full flex justify-center border border-gray-50 rounded-sm shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-50">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Mensaje"
              className="p-2 w-full flex justify-center border border-gray-50 rounded-sm shadow-sm sm:text-sm"
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
