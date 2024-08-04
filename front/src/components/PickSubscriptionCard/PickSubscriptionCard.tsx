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
    <div className="flex flex-col gap-4">
      {subscriptions.map((subscription) => (
        <div key={subscription.id}>
          <PickSubscriptionListCard
            suscribe={subscription}
            isChecked={selectedCard === subscription.id}
            onClick={() => handleCardClick(subscription.id)}
          />
        </div>
      ))}
      <div className="p-14" onClick={handleButtonClick}>
        <MainButton text="SIGUIENTE" />
      </div>
    </div>
  );
};

export default PickSubscriptionCard;
