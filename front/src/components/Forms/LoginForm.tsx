"use client";
import { useRouter } from "next/navigation";
import useForm from "@/hooks/useForm";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useUserData from "@/hooks/useUserData";
import { PetitionLogin } from "@/lib/server/petitionUser";
import { validateLogin } from "@/helpers/valitateLogin";
import { useDispatch } from "react-redux";
import { signInRedux, saveToken, saveUserData } from "@/redux/reducer";
import Cookies from "js-cookie";
import LoginAuthNext from "./LoginAuthNext";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    loginData,
    setLoginData,
    errorLogin,
    setErrorLogin,
    showPassword,
    setShowPassword,
  } = useForm();

  const { saveTokenStorage, saveUserDataStorage } = useUserData();

  const handleOnclickPassword = () => setShowPassword(!showPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    setErrorLogin(validateLogin({ ...loginData, [name]: value }));
  };

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (Object.keys(errorLogin).length === 0) {
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
        alert("Login exitoso");
        router.push("/dashboard/plots");
      }
    } else {
      alert("Complete todos los campos");
    }
  };

  return (
    <div className="p-8 w-full flex flex-col min-h-screen justify-center items-center">
      <div className="w-full max-w-md mb-24">
        <h2 className="text-4xl text-textColor font-semibold mb-4 text-center">
          Iniciar Sesión
        </h2>
        <h3 className="text-xl text-textColor font-semibold mb-4 text-center">
          Comienza con tu prueba gratuita
        </h3>
        <div className="flex justify-center items-center p-5">
          <LoginAuthNext />
        </div>
        <form
          onSubmit={handleSumbit}
          className="space-y-5 flex flex-col h-full"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
              {!loginData.email && <span className="text-red-500"> * </span>}
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="E-mail"
              className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
              {!loginData.password && <span className="text-red-500"> * </span>}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="Contraseña"
                className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
              />
              <button type="button" onClick={handleOnclickPassword}>
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
            </div>
          </div>

          <div className="mt-auto flex justify-center">
            <button
              type="submit"
              className="w-32 p-2 flex justify-center border-footerColor border-2 rounded-md shadow-sm text-sm font-medium text-footerColor hover:bg-gray-200 focus:ring-offset-2"
            >
              INICIAR SESION
            </button>
          </div>
          <div className="mt-1">
            {!loginData.password && (
              <p className=" text-sm text-red-500 font-medium ">
                {" "}
                (*) Todos los campos requeridos
              </p>
            )}
          </div>
          <div className="flex justify-center mt-4 py-4">
            <a
              href="/register"
              className="text-textColor md:hover:scale-105 md:hover:ease-in-out"
            >
              No tenes una cuenta? Suscribite aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
