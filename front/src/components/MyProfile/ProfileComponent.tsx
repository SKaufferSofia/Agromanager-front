"use client";
import { saveUserData } from "@/redux/reducer";
import { useSelector } from "react-redux";
import MainButton from "../MainButton/MainButton";
import LandingButton from "../LandingButton/LandingButton";
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
    setEditUserData((prevData) => ({ ...prevData, [name]: value }));
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
    <div className="w-1/2 relative">
      <div className="card card-profile bg-navbarColor p-6 rounded-xl text-white shadow-lg relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Sembrado_de_soja_en_argentina.jpg"
          alt="Image placeholder"
          className="card-img-top w-full h-[15rem] object-cover rounded-t-xl"
        />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="rounded-full w-24 h-24 border-4 border-white shadow-md transition-transform duration-300 transform hover:scale-110"
              alt="Profile"
            />
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="text-center mt-24">
            <h5 className="text-xl font-bold">
              {userData.name} {userData.surname}
            </h5>
            <h6 className="font-light">{userData.email}</h6>
          </div>
          <div className="flex justify-center p-7">
            <div className="card-profile-stats flex justify-center space-x-8">
              <div className="text-center">
                <span className="heading flex flex-col">
                  Telefono
                  <span className="description">
                    {userData.phone} <span>lapiz</span>
                  </span>
                </span>
              </div>
              <div className="text-center">
                <span className="heading flex flex-col">
                  Establecimiento
                  <span className="description">{userData.placeName}</span>
                </span>
              </div>
              <div className="text-center">
                <span className="heading flex flex-col">
                  Roles
                  <span className="description">
                    {userData &&
                      userData.roles.map((role: any) => role.name + " ")}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div onClick={() => setShowForm(true)}>
            <LandingButton text="Editar perfil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
