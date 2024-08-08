"use client";
import React from "react";
import { useSelector } from "react-redux";
import { FaBriefcase, FaEnvelope, FaIndustry, FaTrash } from "react-icons/fa";
import { Button, IconButton } from "@material-tailwind/react";

const ProfileCard = () => {
  const userData = useSelector((state: any) => state.userData);

  return (
    <div className="relative h-[27rem] isolate bg-gray-900 py-24 sm:py-32 text-bgColor">
      {/* <div className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-72 z-10">
        <IconButton className="bg-textColor hover:bg-red-600">
          <FaTrash />
        </IconButton>
      </div> */}
      <img
        alt=""
        src="/Sembrado_de_soja_en_argentina.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter brightness-[60%]"
      />
      <div className="-mt-5 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="rounded-full w-24 h-24 shadow-md transition-transform duration-300 transform hover:scale-110"
            alt="Profile"
          />
        </div>
        <div className="text-center mt-6">
          <h5 className="text-xl font-bold py-1">
            {userData.name} {userData.surname}
          </h5>
          <div className="flex justify-center items-center space-x-4">
            <FaBriefcase />
            <h6 className="font-medium p-2">{userData.placeName}</h6>
            <FaEnvelope />
            <h6 className="font-light text-sm">{userData.email}</h6>
          </div>
        </div>
        <div className="card-profile-stats flex justify-center space-x-12 py-5">
          <div className="text-center transition-transform duration-300 transform hover:scale-105">
            <span className="heading flex flex-col">
              <span className="text-lg">{userData.phone}</span>
              <span className="poppins-extralight"> Teléfono</span>
            </span>
          </div>
          <div className="text-center transition-transform duration-300 transform hover:scale-105">
            <span className="heading flex flex-col">
              <span className="text-lg">
                {userData.roles &&
                userData.roles.length > 0 &&
                userData.roles[0]
                  ? userData.roles[0].name.toUpperCase()
                  : "Sin rol"}
              </span>
              <span className="poppins-extralight"> Rol</span>
            </span>
          </div>
          <div className="text-center transition-transform duration-300 transform hover:scale-105">
            <span className="heading flex flex-col">
              <span className="text-lg">
                {userData.roles &&
                userData.roles.length > 1 &&
                userData.roles[1]
                  ? userData.roles[1].name.toUpperCase()
                  : "Sin Membresía"}
              </span>
              <span className="poppins-extralight"> Membresía</span>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
        <Button className="bg-textGreen hover:bg-navbarColor">
          Editar perfil
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
