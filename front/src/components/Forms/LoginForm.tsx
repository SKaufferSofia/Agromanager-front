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
import { toast } from "sonner";
import LoginAuthNext from "./LoginAuthNext";
import MainButton from "../MainButton/MainButton";
import ErrorAlert from "../CustomsAlerts/ErrorAlert";

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
        }
      );

      if (!loginData.password && !loginData.email) {
        toast.error(
          <ErrorAlert message={"Todos los campos son requeridos"} />,
          {
            className:
              "w-[25rem] poppins-regular bg-red-500 text-white text-lg",
            duration: 3000,
          }
        );
      } else if (!loginSuccess) {
        toast.error("Email o contraseña incorrectos", {
          className: "w-[23rem] bg-red-500 text-white text-xl",
          duration: 3000,
        });
      }

      if (loginSuccess) {
        // Obtener el rol principal del usuario
        const mainRole =
          loginSuccess.user.roles
            .map((role: any) => role.name)
            .find((role: any) => role.includes("admin")) || "user";

        // Guardar solo el rol principal en la cookie
        Cookies.set("role", mainRole);
        if (loginSuccess.user.premiumExpiration === null) {
          toast.info("Debe suscribirse", {
            className: "bg-orange-500 text-white text-xl",
            duration: 3000,
          });
          router.push("/subscriptions");
        } else if (mainRole === "admin") {
          toast.success("Login exitoso", {
            className: "mt-20 text-white bg-footerColor font-semibold text-xl",
            duration: 2000,
          });
          Cookies.set("token", loginSuccess.token, { expires: 30 });
          router.push("/dashboard/admin-dashboard");
        } else {
          toast.success("Login exitoso", {
            className: "mt-20 text-white bg-footerColor font-semibold text-xl",
            duration: 2000,
          });
          Cookies.set("token", loginSuccess.token, { expires: 30 });
          router.push("/dashboard/plots");
        }
      }
    } else {
      toast.error("Todos los campos son requeridos", {
        className: "w-[23rem] bg-red-500 text-white text-xl",
        duration: 3000,
      });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full h-[calc(100vh)] max-w-md mt-20">
        <h2 className="text-4xl text-textColor font-semibold mb-4 text-center">
          Iniciar Sesión
        </h2>
        <h3 className="text-xl text-textColor poppins-regular-italic mb-4 text-center">
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
              className="p-2 w-full flex justify-center rounded-md shadow-sm sm:text-sm"
            />
            {errorLogin.email && (
              <p className="text-red-500 text-xs mt-1">{errorLogin.email}</p>
            )}
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
                className="p-2 w-full flex justify-center  rounded-md shadow-sm sm:text-sm"
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
                {errorLogin.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorLogin.password}
                  </p>
                )}
              </button>
            </div>
          </div>
          {!loginData.password && (
            <p className=" text-sm text-red-500 font-medium ">
              {" "}
              (*) Todos los campos requeridos
            </p>
          )}
          <div className="mt-auto flex justify-center">
            <MainButton text="Iniciar Sesion" />
          </div>
          <div className="flex justify-center mt-2 py-4 text-gray-900">
            No tenes una cuenta?{" "}
            <a
              href="/register"
              className="text-textGreen font-semibold md:hover:scale-105 ml-3 md:hover:ease-in-out"
            >
              Registrarte aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
