"use client";

import React, { useState } from "react";
import PickSubscriptionListCard from "./PickSubscriptionListCard";
import MainButton from "../MainButton/MainButton";
import { useRouter } from "next/navigation";
import subscriptions from "@/utils/subscriptions";
import { useDispatch, useSelector } from "react-redux";
import { ISuscribe } from "@/interfaces/interfacesSupscriptions";
import { paymentLink, setSelectedSubscription } from "@/redux/reducer";
import {
  petitionPaymentsMonthly,
  petitionPaymentsYearly,
  petitonPaymentsFree,
} from "@/lib/server/petitionPayments";
import useDataSubscription from "@/hooks/useDataSubscription";
import { toast } from "sonner";

const PickSubscriptionCard: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { saveSubscriptionStorage } = useDataSubscription();

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const userId = useSelector((state: any) => state.userData.id);
  const selectedSubscription = subscriptions.find(
    (sub) => sub.id === selectedCard
  );

  const handleCardClick = (id: number) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const paymentsMonth = async () => {
    try {
      const response = await petitionPaymentsMonthly(userId);
      if (response) {
        dispatch(paymentLink(response));
        window.location.href = response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const paymentsYear = async () => {
    try {
      const response = await petitionPaymentsYearly(userId);
      if (response) {
        dispatch(paymentLink(response));
        window.location.href = response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = async () => {
    if (!selectedCard) {
      toast.info("Debe seleccionar una tarjeta", {
        className: "bg-orange-500 text-white text-xl",
        duration: 3000,
      });
      return;
    }

    if (selectedCard && selectedSubscription) {
      dispatch(setSelectedSubscription(selectedSubscription as ISuscribe));
      saveSubscriptionStorage(selectedSubscription as ISuscribe);
      if (selectedCard === 1) {
        await petitonPaymentsFree(userId);
        router.push("/subscriptions/accept-subscription");
      } else if (selectedCard === 2) {
        await paymentsMonth();
      } else if (selectedCard === 3) {
        await paymentsYear();
      }
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-3/4 mx-auto mt-4 mb-10 text-center">
        <h4 className="text-3xl font-bold text-textColor mb-4">
          Suscríbete para acceder a nuestros beneficios
        </h4>
        <p className="text-textColor text-lg mb-8 poppins-regular-italic">
          Elige la suscripción que mejor se adapte a tus necesidades y disfruta
          de todas las características y beneficios de nuestra aplicación.
        </p>
      </div>
      {subscriptions.map((subscription) => (
        <div key={subscription.id}>
          <PickSubscriptionListCard
            suscribe={subscription}
            isChecked={selectedCard === subscription.id}
            onClick={() => handleCardClick(subscription.id)}
          />
        </div>
      ))}
      <div onClick={handleButtonClick}>
        <MainButton text="SIGUIENTE" />
      </div>
    </div>
  );
};

export default PickSubscriptionCard;
