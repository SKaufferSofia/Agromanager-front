"use client";
import React from "react";
import { validateRegister } from "@/helpers/validateRegister";
import { PetitionLogin, petitionRegister } from "@/lib/server/petitionUser";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useForm from "@/hooks/useForm";
import { toast } from "sonner";
import { ILoginForm } from "@/interfaces/interfacesUser";
import { useDispatch } from "react-redux";
import {
  saveRegisterData,
  saveToken,
  saveUserData,
  signInRedux,
} from "@/redux/reducer";
import Cookies from "js-cookie";
import useUserData from "@/hooks/useUserData";
import MainButton from "../MainButton/MainButton";

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { saveTokenStorage, saveUserDataStorage } = useUserData();

  const {
    regiterData,
    errorRegister,
    setErrorRegister,
    setRegiterData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useForm();

  const handleOnClickShowPassword = () => setShowPassword(!showPassword);
  const handleOnClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegiterData({ ...regiterData, [name]: value });

    setErrorRegister(validateRegister({ ...regiterData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (Object.keys(errorRegister).length === 0) {
      const registerSuccess = await petitionRegister(regiterData);
      if (registerSuccess) {
        const loginData: ILoginForm = {
          email: regiterData.email,
          password: regiterData.password,
        };
        dispatch(saveRegisterData(loginData));
        const loginSuccess = await PetitionLogin(
          loginData,
          (token) => {
            dispatch(saveToken(token));
            saveTokenStorage(token);
          },
          (login) => {
            dispatch(signInRedux(login));
          },
          (data) => {
            dispatch(saveUserData(data));
            saveUserDataStorage(data);
          },
          (data) => Cookies.set("token", data, { expires: 30 })
        );

        if (loginSuccess) {
          router.push("/subscriptions");
        }
      }
    } else {
      toast.warning("Complete todos los campos", {
        className: "bg-red-500 text-white text-xl",
        duration: 3000,
      });
    }
  };

  return (
    <div className="p-8 w-full flex flex-col min-h-screen justify-center items-center">
      <div className="w-full max-w-md">
        <h2 className="text-4xl text-textColor font-semibold mb-4 text-center">
          Registrarse
        </h2>
        <h3 className="text-xl text-textColor poppins-regular-italic mb-4 text-center">
          Comienza con una prueba gratuitab <br />{" "}
          <b className="text-textGreen">por 15 días</b>
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col h-full"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
              {!regiterData.name && <span className="text-red-500"> * </span>}
            </label>
            <input
              type="text"
              name="name"
              value={regiterData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apellido
              {!regiterData.surname && (
                <span className="text-red-500"> * </span>
              )}
            </label>
            <input
              type="text"
              name="surname"
              value={regiterData.surname}
              onChange={handleChange}
              placeholder="Apellido"
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Teléfono
              {!regiterData.phone && <span className="text-red-500"> * </span>}
            </label>
            <input
              type="number"
              name="phone"
              value={regiterData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Establecimiento
              {!regiterData.placeName && (
                <span className="text-red-500"> * </span>
              )}
            </label>
            <input
              type="text"
              name="placeName"
              value={regiterData.placeName}
              onChange={handleChange}
              placeholder="Nombre del campo"
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
              {!regiterData.email && <span className="text-red-500"> * </span>}
            </label>
            <input
              type="text"
              name="email"
              value={regiterData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
            {errorRegister.email && (
              <p className="text-red-500 text-xs mt-1">{errorRegister.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
              {!regiterData.password && (
                <span className="text-red-500"> * </span>
              )}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={regiterData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
              />
              <button type="button" onClick={handleOnClickShowPassword}>
                {showPassword ? (
                  <FaEye
                    size={17}
                    className="absolute right-3 top-5 -translate-y-1/2 text-textGreen"
                  />
                ) : (
                  <FaEyeSlash
                    size={17}
                    className="absolute right-3 top-5 -translate-y-1/2  text-textColor"
                  />
                )}
              </button>
              <div className="-mt-4">
                {errorRegister.password && (
                  <p className="text-red-500 text-xs font-medium">
                    {errorRegister.password}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar contraseña
              {!regiterData.confirmPassword && (
                <span className="text-red-500"> * </span>
              )}
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={regiterData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmar contraseña"
                className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
              />
              <button type="button" onClick={handleOnClickShowConfirmPassword}>
                {showConfirmPassword ? (
                  <FaEye
                    size={17}
                    className="absolute right-3 top-5 -translate-y-1/2 text-textGreen"
                  />
                ) : (
                  <FaEyeSlash
                    size={17}
                    className="absolute right-3 top-5 -translate-y-1/2  text-textColor"
                  />
                )}
              </button>
              <div className="-mt-4">
                {errorRegister.confirmPassword && (
                  <p className="text-red-500 text-xs font-medium">
                    {errorRegister.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5">
            {!regiterData.confirmPassword && (
              <p className=" text-sm text-red-500 font-medium ">
                {" "}
                (*) Todos los campos requeridos
              </p>
            )}
          </div>
          <div className="mt-auto flex justify-center">
            <MainButton text="Registrarme" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
