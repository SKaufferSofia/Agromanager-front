"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBriefcase, FaEnvelope, FaIndustry, FaTrash } from "react-icons/fa";
import { Button, IconButton } from "@material-tailwind/react";
import MainButton from "../MainButton/MainButton";
import { IUserEdit } from "@/interfaces/interfacesUser";
import { editProfileUser } from "@/lib/server/petitionUser";
import useUserData from "@/hooks/useUserData";
import { toast } from "sonner";
import { saveUserData } from "@/redux/reducer";

const ProfileCard = () => {
  const userData = useSelector((state: any) => state.userData);
  const token = useSelector((state: any) => state.token);
  const userId = useSelector((state: any) => state.userData.id);
  const [showForm, setShowForm] = React.useState(false);
  const { saveUserDataStorage } = useUserData();
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setShowForm(!showForm);
    setEditUserData(userData);
  };

  const [editUserData, setEditUserData] = React.useState<IUserEdit>(userData);

  const handleNewUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = async (editUserData: IUserEdit) => {
    if (token && editUserData) {
      try {
        const requestBody = {
          name: editUserData.name,
          surname: editUserData.surname,
          phone: editUserData.phone,
          placeName: editUserData.placeName,
        };

        await editProfileUser(userId, requestBody, token);

        dispatch(saveUserData({ ...userData, ...editUserData }));
        saveUserDataStorage({
          ...userData,
          name: editUserData.name,
          surname: editUserData.surname,
          phone: editUserData.phone,
          placeName: editUserData.placeName,
        });

        toast.success(" Usuario editado correctamente", {
          className:
            "w-[28rem] mt-20 text-white bg-footerColor font-semibold text-xl",
          duration: 2000,
        });
        setShowForm(false);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      console.error("No token available for authentication");
    }
  };

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
        <Button
          className="bg-textGreen hover:bg-navbarColor"
          onClick={handleEditClick}
        >
          Editar perfil
        </Button>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm transition-opacity duration-300 ease-out bg-black bg-opacity-50">
          <div className="bg-white w-[80%] max-w-lg p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-textGreen">
              Editar usuario
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={editUserData.name}
                  onChange={handleNewUserData}
                  placeholder="Nombre"
                  className="w-full px-4 py-1 text-sm border rounded-lg text-gray-700 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  name="surname"
                  value={editUserData.surname}
                  onChange={handleNewUserData}
                  placeholder="Apellido"
                  className="w-full px-4 py-1 text-sm border rounded-lg text-gray-700 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contacto
                </label>
                <input
                  type="text"
                  name="phone"
                  value={editUserData.phone}
                  onChange={handleNewUserData}
                  placeholder="Contacto"
                  className="w-full px-4 py-1 text-sm border rounded-lg text-gray-700 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Establecimiento
                </label>
                <input
                  type="text"
                  name="placeName"
                  value={editUserData.placeName}
                  onChange={handleNewUserData}
                  placeholder="Establecimiento"
                  className="w-full px-4 py-1 text-sm border rounded-lg text-gray-700 font-medium"
                />
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <div onClick={() => handleEditSubmit(editUserData)}>
                <MainButton text="Guardar" />
              </div>
              <div onClick={handleEditClick}>
                <MainButton text="Cancelar" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
