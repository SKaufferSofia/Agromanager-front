"use client";
import React from "react";
import MainButton from "../MainButton/MainButton";
import LandingButton from "../LandingButton/LandingButton";
import { IContactForm } from "@/interfaces/interfacesUser";
import { sendEmailContact } from "@/lib/server/petitionUser";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [contactData, setContactData] = React.useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const petitionContact = await sendEmailContact(contactData);
    if (petitionContact) {
      setContactData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Error al enviar el email, complete todos los campos", {
        className: "w-[25rem] bg-red-500 text-white text-xl",
        duration: 3000,
      });
    }
  };

  return (
    <div className="p-7 w-[50%] ml-10 flex flex-col justify-center items-center rounded-2xl z-10 bg-black bg-opacity-60">
      <div className="w-full max-w-md">
        <h2 className="text-4xl text-gray-50 font-semibold mb-4 text-center">
          Estamos para ayudarte.
        </h2>
        <h3 className="text-md text-gray-50 font-medium mb-4 text-center">
          Envíanos tu mensaje y te responderemos a la brevedad
        </h3>
        <form
          className="space-y-5 flex flex-col h-full"
          onSubmit={handleSumbit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-50">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={contactData.name}
              placeholder="Nombre"
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-50">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={contactData.email}
              placeholder="E-mail"
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-50">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Mensaje"
              onChange={handleChange}
              value={contactData.message}
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div className="mt-auto flex justify-center">
            <LandingButton text="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
