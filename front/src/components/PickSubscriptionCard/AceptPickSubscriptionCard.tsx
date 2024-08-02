"use client";

import React, { useEffect, useState } from "react";
import SelectedSubscriptionCard from "../SelectedSubcriptionCard/SelectedSubscriptionCard";
import MainButton from "../MainButton/MainButton";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AceptPickSubscriptionCard: React.FC = () => {
  const subscription = useSelector((state: any) => state.selectedSubscription);
  const router = useRouter();

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

  const handleSumbit = () => {
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
