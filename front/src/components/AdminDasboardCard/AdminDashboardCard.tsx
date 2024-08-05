"use client";

import {
  deleteUserById,
  editUserById,
  fetchAllUsers,
} from "@/lib/server/petitionAdminInfo";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUserForAdmin } from "@/interfaces/interfaces";
import { IUser } from "@/interfaces/interfacesUser";
import { toast } from "sonner";

const AdminDashboardCard = () => {
  const token = useSelector((state: any) => state.token);
  const [newArrayUsers, setNewArrayUsers] = useState<IUserForAdmin[]>([]);
  const [editUserData, setEditUserData] = useState<IUser>({
    name: "",
    surname: "",
    phone: "",
    placeName: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [userToEdit, setUserToEdit] = useState<IUserForAdmin | null>(null);
  const [deletedUsers, setDeletedUsers] = useState<boolean>(false);

  useEffect(() => {
    const getAllUsers = async () => {
      if (token) {
        try {
          const fetchedUsers = await fetchAllUsers(token);
          setNewArrayUsers(fetchedUsers);
        } catch (error) {
          console.error("Error fetching plots:", error);
        }
      }
    };
    getAllUsers();
  }, [token, showForm, deletedUsers]);

  const handleOpenFormClick = (user: any) => {
    setShowForm(true);
    setUserToEdit(user);
  };

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
  const handleEditClick = async (
    userToEdit: IUserForAdmin | null,
    editUserData: IUser
  ) => {
    if (token && editUserData && userToEdit) {
      try {
        const requestBody = {
          name: editUserData.name,
          surname: editUserData.surname,
          phone: editUserData.phone,
          placeName: editUserData.placeName,
          email: editUserData.email,
        };

        await editUserById(userToEdit.id, requestBody, token);

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
  const handleDeleteClick = async (userToEdit: IUserForAdmin | null) => {
    if (token && userToEdit) {
      try {
        await deleteUserById(userToEdit.id, token);
        setDeletedUsers(true);
        toast.success(
          `Usuario eliminado correctamente: ${userToEdit.name} ${userToEdit.surname}`,
          {
            className:
              "w-[28rem] mt-20 text-white bg-footerColor font-semibold text-xl",
            duration: 3000,
          }
        );
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      console.error("No token available for authentication");
    }
  };

  return (
    <div>
      <div className="bg-white shadow-md">
        <div className="flex font-bold p-4 justify-between bg-altBgColor ">
          <div className="flex-1 text-start">Nombre</div>
          <div className="flex-1 text-start">Apellido</div>
          <div className="flex-1 text-start">Contacto</div>
          <div className="flex-1 text-center">Establecimiento</div>
          <div className="flex-1 text-end">Activo</div>
          <div className="flex-1 text-end">Editar</div>
          <div className="flex-1 text-end">Borrar</div>
        </div>
        {newArrayUsers &&
          newArrayUsers.map((user) => (
            <div className="flex p-3 border-b border-gray-200" key={user.id}>
              <div className="flex-1 text-start">{user.name}</div>
              <div className="flex-1 text-start">{user.surname}</div>
              <div className="flex-1 text-start">{user.email}</div>
              <div className="flex-1 text-center">{user.placeName}</div>
              <div className="flex-1 text-end">{user.active ? "Si" : "No"}</div>
              <div className="flex-1 text-end">
                <button onClick={() => handleOpenFormClick(user)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,300,150"
                  >
                    <g
                      fill="#719a2d"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <g transform="scale(4,4)">
                        <path d="M39.086,17.914l7,7l-24.581,24.581l-9.201,4.412c-1.367,0.457 -2.668,-0.844 -2.211,-2.211l4.412,-9.201zM41.914,15.086l4.5,-4.5c0.781,-0.781 2.047,-0.781 2.828,0l4.172,4.172c0.781,0.781 0.781,2.047 0,2.828l-4.5,4.5z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="flex-1 text-end">
                <button onClick={() => handleDeleteClick(user)}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 36 36"
                    fill="#FF0000"
                  >
                    <path d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z" />
                    <path d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z" />
                    <rect x="21" y="13" width="2" height="15" />
                    <rect x="13" y="13" width="2" height="15" />
                    <path d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
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
                className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
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
                className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
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
                className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
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
                className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
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
                className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
              />
            </div>
            <div className="flex justify-around">
              <div>
                <button
                  onClick={() => handleEditClick(userToEdit, editUserData)}
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
  );
};

export default AdminDashboardCard;
