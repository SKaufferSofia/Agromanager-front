"use client";

import React, { useEffect, useState } from "react";
import SelectedSubscriptionCard from "../SelectedSubcriptionCard/SelectedSubscriptionCard";
import MainButton from "../MainButton/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { PetitionLogin } from "@/lib/server/petitionUser";
import { saveToken, saveUserData, signIn } from "@/redux/reducer";
import useUserData from "@/hooks/useUserData";
import Cookies from "js-cookie";

const AceptPickSubscriptionCard: React.FC = () => {
  const subscription = useSelector((state: any) => state.selectedSubscription);
  const email = useSelector((state: any) => state.registerData.email);
  const password = useSelector((state: any) => state.registerData.password);
  const { saveTokenStorage, saveUserDataStorage } = useUserData();
  const router = useRouter();
  const dispatch = useDispatch();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    const loginData = {
      email,
      password,
    };

    const loginSuccess = await PetitionLogin(
      loginData,
      (token) => {
        dispatch(saveToken(token));
        saveTokenStorage(token);
      },
      (login) => {
        dispatch(signIn(login));
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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-28">
      <SelectedSubscriptionCard subscription={subscription} />
      <div className="p-14" onClick={handleSumbit}>
        <MainButton text="CONFIRMAR" />
      </div>
    </div>
  );
};

export default AceptPickSubscriptionCard;
