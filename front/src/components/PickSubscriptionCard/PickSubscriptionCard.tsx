"use client";

import React, { useState } from "react";
import PickSubscriptionListCard from "./PickSubscriptionListCard";
import MainButton from "../MainButton/MainButton";
import { useRouter } from "next/navigation";
import subscriptions from "@/helpers/subscriptions";
import { useDispatch, useSelector } from "react-redux";
import { ISuscribe } from "@/interfaces/interfacesSupscriptions";
import { setSelectedSubscription } from "@/redux/reducer";
import { petitionPaymentsMonthly } from "@/lib/server/petitionPayments";

const PickSubscriptionCard: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const userId = useSelector((state: any) => state.userData.id);
  const selectedSubscription = subscriptions.find(
    (sub) => sub.id === selectedCard
  );

  const handleCardClick = (id: number) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const paymentsMonth = async () => {
    const response = await petitionPaymentsMonthly(userId);
    console.log(response);
  };

  const handleButtonClick = () => {
    if (selectedCard === 1) {
      router.push("/subscriptions/accept-subscription");
    }
    // if (selectedCard) {
    //   dispatch(setSelectedSubscription(selectedCard));
    //   router.push("/subscriptions/accept-subscription");
    // }
  };

  return (
    <div className="flex flex-col gap-4">
      {subscriptions.map((subscription) => (
        <div key={subscription.id}>
          <PickSubscriptionListCard
            suscribe={subscription}
            isChecked={selectedCard === subscription}
            onClick={() => handleCardClick(subscription)}
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
