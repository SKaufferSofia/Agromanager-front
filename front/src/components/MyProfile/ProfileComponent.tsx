"use client";
import { saveUserData } from "@/redux/reducer";
import { useSelector } from "react-redux";
import MainButton from "../MainButton/MainButton";
import Landing from "@/app/page";
import LandingButton from "../LandingButton/LandingButton";
import { IUserForAdmin } from "@/interfaces/interfaces";
import { IUser } from "@/interfaces/interfacesUser";
import { editUserById } from "@/lib/server/petitionAdminInfo";
import { useState } from "react";
import { toast } from "sonner";
import useUserData from "@/hooks/useUserData";

const ProfileComponent = () => {
  const userData = useSelector((state: any) => state.userData);
  const token = useSelector((state: any) => state.token);
  const userId = useSelector((state: any) => state.userData.id);

  const [editUserData, setEditUserData] = useState<IUser>({
    name: "",
    surname: "",
    phone: "",
    placeName: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);
  const { saveUserDataStorage } = useUserData();

  const handleCancelButton = () => {
    setShowForm(false);
  };

  const handleNewUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditUserData((prevData: IUser) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = async (editUserData: IUser) => {
    if (token && editUserData) {
      try {
        const requestBody = {
          name: editUserData.name,
          surname: editUserData.surname,
          phone: editUserData.phone,
          placeName: editUserData.placeName,
          email: editUserData.email,
        };

        await editUserById(userId, requestBody, token);

        saveUserDataStorage({
          ...userData,
          name: editUserData.name,
          surname: editUserData.surname,
          phone: editUserData.phone,
          placeName: editUserData.placeName,
          email: editUserData.email,
        });

        setEditUserData({
          name: "",
          surname: "",
          phone: "",
          placeName: "",
          email: "",
        });
        toast.success(
          `Usuario editado correctamente:
        Nombre: ${requestBody.name} ${requestBody.surname}
        Teléfono: ${requestBody.phone}
        Establecimiento: ${requestBody.placeName}
        Email: ${requestBody.email}`,
          {
            className:
              "w-[28rem] mt-20 text-white bg-footerColor font-semibold text-xl",
            duration: 3000,
          }
        );
        setShowForm(false);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      console.error("No token available for authentication");
    }
  };

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="card card-profile bg-navbarColor p-6 rounded-xl text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Sembrado_de_soja_en_argentina.jpg"
          alt="Image placeholder"
          className="card-img-top w-full h-[15rem] object-cover"
        />
        <div className="flex justify-center mt-4">
          <div className="lg:w-1/3">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                className="rounded-full w-24 h-24"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="card-body pt-0">
          <div className="text-center mt-4">
            <h5 className="text-xl font-bold">
              {userData.name} {userData.surname}
            </h5>
            <h6 className="font-light">{userData.email}</h6>
          </div>
          <div className="flex justify-center p-7">
            <div className="card-profile-stats flex justify-center space-x-8">
              <div className="text-center">
                <span className="heading flex flex-col">
                  Telefono <span className="description">{userData.phone}</span>
                </span>
              </div>
              <div className="text-center p">
                <span className="heading flex flex-col">
                  Establecimiento{" "}
                  <span className="description">{userData.placeName}</span>
                </span>
              </div>
              <div className="text-center">
                <span className="heading flex flex-col">
                  Roles{" "}
                  <span className="description">
                    {userData &&
                      userData.roles.map((role: any) => role.name + " ")}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div onClick={() => setShowForm(true)}>
            <LandingButton text="Editar Perfil" />
          </div>

          {showForm === true && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white w-[80%] max-w-lg p-6 rounded-md shadow-lg relative">
                <h3>Editar usuario</h3>
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
                    className="p-2 w-full text-black flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
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
                    className="p-2 w-full flex text-black justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
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
                    className="p-2 w-full flex text-black justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
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
                    className="p-2 w-full text-black flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editUserData.email}
                    onChange={handleNewUserData}
                    placeholder="Email"
                    className="p-2 w-full flex text-black justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
                  />
                </div>
                <div className="flex justify-around">
                  <div>
                    <button
                      onClick={() => handleEditClick(editUserData)}
                      className="mt-2 p-2 bg-navbarColor text-white rounded"
                    >
                      EDITAR
                    </button>
                  </div>

                  <button
                    onClick={handleCancelButton}
                    className="mt-2 p-2 bg-navbarColor text-white rounded"
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
