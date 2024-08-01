"use client";
import React from "react";
import SelectedSubscriptionCard from "../SelectedSubcriptionCard/SelectedSubscriptionCard";
import MainButton from "../MainButton/MainButton";
import { useSelector } from "react-redux";

const AceptPickSubscriptionCard: React.FC = () => {
  const subscriptions = useSelector((state: any) => state.selectedSubscription);
  if (!subscriptions) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-28">
        Suscripción no encontrada
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-28">
      <SelectedSubscriptionCard subscription={subscriptions} />
      <div className="p-14">
        <MainButton text="CONFIRMAR" path="/dashboard/plots" />
      </div>
    </div>
  );
};

export default AceptPickSubscriptionCard;
