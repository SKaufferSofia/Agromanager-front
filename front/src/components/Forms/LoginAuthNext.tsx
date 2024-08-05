"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { Button } from "@material-tailwind/react";
import { loginGoogle } from "@/lib/server/petitionUser";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { saveToken, saveUserData, signInRedux } from "@/redux/reducer";
import useUserData from "@/hooks/useUserData";
import { toast } from "sonner";

const LoginAuthNext = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const { saveTokenStorage, saveUserDataStorage } = useUserData();
  const [hasRequested, setHasRequested] = useState(false);

  useEffect(() => {
    if (session && !hasRequested) {
      saveDataBase();
    }
  }, [session, hasRequested]);

  const saveDataBase = async () => {
    setHasRequested(true);
    const dataGoogle = Cookies.get("dataGoogle");
    if (dataGoogle) {
      const data = JSON.parse(dataGoogle);
      console.log(data);

      const response = await loginGoogle(
        data,
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

      const mainRole =
        response.user.roles
          .map((role: any) => role.name)
          .find((role: any) => role.includes("admin")) || "user";

      Cookies.set("role", mainRole);

      if (response) {
        if (response.user.premiumExpiration === null) {
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
          router.push("/dashboard/admin-dashboard");
        } else {
          toast.success("Login exitoso", {
            className: "mt-20 text-white bg-footerColor font-semibold text-xl",
            duration: 2000,
          });
          router.push("/dashboard/plots");
        }
      }
      return response;
    }
  };

  const signInWithGoogle = async () => {
    signIn("google");
  };

  return (
    <div>
      <Button
        size="sm"
        variant="outlined"
        className="flex items-center gap-3 text-textColor border border-textGreen hover:text-gray-900 hover:scale-105 hover:bg-gray-100"
        onClick={signInWithGoogle}
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        Inicia Sesion con Google
      </Button>
    </div>
  );
};

export default LoginAuthNext;
