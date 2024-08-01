import React from "react";
import SelectedSubscriptionCard from "@/components/SelectedSubcriptionCard/SelectedSubscriptionCard";
import MainButton from "@/components/MainButton/MainButton";
import subscriptions from "@/helpers/subscriptions";
import AceptPickSubscriptionCard from "@/components/PickSubscriptionCard/AceptPickSubscriptionCard";

const AcceptSubscription: React.FC = () => {
  return (
    <div>
      <AceptPickSubscriptionCard />
    </div>
  );
};

export default AcceptSubscription;
