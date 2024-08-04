"use client";

import React, { useEffect, useState } from "react";
import SelectedSubscriptionCard from "../SelectedSubcriptionCard/SelectedSubscriptionCard";
import MainButton from "../MainButton/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getUserById } from "@/lib/server/petitionUser";
import { saveUserData } from "@/redux/reducer";
import useUserData from "@/hooks/useUserData";

const AceptPickSubscriptionCard: React.FC = () => {
  const subscription = useSelector((state: any) => state.selectedSubscription);
  const token = useSelector((state: any) => state.token);
  const userId = useSelector((state: any) => state.userData.id);

  const router = useRouter();
  const { saveUserDataStorage } = useUserData();

  const dispatch = useDispatch();

  const [isClient, setIsClient] = useState(false);

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
    alert("Login exitoso");
    router.push("/dashboard/plots");
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
