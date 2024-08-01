"use client";

import React from "react";
import SelectedSubscriptionCard from "@/components/SelectedSubcriptionCard/SelectedSubscriptionCard";
import MainButton from "@/components/MainButton/MainButton";

const AcceptSubscription: React.FC = () => {
  const subscriptions = [
    {
      id: 1,
      title: "Suscripcion gratuita",
      price: 0,
      unid: "mo",
      describe:
        "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-28">
      {subscriptions.map((subscription) => (
        <div key={subscription.id}>
          <SelectedSubscriptionCard subscription={subscription} />
        </div>
      ))}
      <div className="p-14">
        <MainButton text="CONFIRMAR" path="/dashboard/plots" />
      </div>
    </div>
  );
};

export default AcceptSubscription;
