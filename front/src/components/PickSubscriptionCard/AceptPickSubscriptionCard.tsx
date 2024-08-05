"use client";

import React, { useEffect, useState } from "react";
import SelectedSubscriptionCard from "../SelectedSubcriptionCard/SelectedSubscriptionCard";
import MainButton from "../MainButton/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getUserById } from "@/lib/server/petitionUser";
import { saveUserData } from "@/redux/reducer";
import useUserData from "@/hooks/useUserData";
import { toast } from "sonner";
import Cookies from "js-cookie";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const AceptPickSubscriptionCard: React.FC = () => {
  const subscription = useSelector((state: any) => state.selectedSubscription);
  const token = useSelector((state: any) => state.token);
  const userId = useSelector((state: any) => state.userData.id);

  const router = useRouter();
  const { saveUserDataStorage } = useUserData();

  const dispatch = useDispatch();

  const [isClient, setIsClient] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (userId && token) {
      const getUser = async () => {
        try {
          const user = await getUserById(userId, token, (user) => {
            dispatch(saveUserData(user));
            saveUserDataStorage(user);
          });
          dispatch(saveUserData(user));
          saveUserDataStorage(user);
          Cookies.set("token", user.token, { expires: 30 });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };

      getUser();
    }
  }, [token, userId, dispatch]);

  if (!isClient) {
    return null;
  }

  if (!subscription) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-28">
        Suscripción no encontrada
      </div>
    );
  }

  const handleSumbit = async () => {
    toast.success("Login exitoso", {
      className: "mt-20 text-white bg-footerColor font-semibold text-xl",
      duration: 2000,
    });
    router.push("/dashboard/plots");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-28">
      <Confetti width={width} height={height} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-textColor mb-4">
          ¡Felicitaciones!
        </h1>
        <p className="text-xl text-gray-700">
          Ya eres usuario premium y puedes disfrutar de todas las
          funcionalidades de nuestra aplicación.
        </p>
      </div>
      <SelectedSubscriptionCard subscription={subscription} />
      <div className="p-14" onClick={handleSumbit}>
        <MainButton text="CONFIRMAR" />
      </div>
    </div>
  );
};

export default AceptPickSubscriptionCard;
