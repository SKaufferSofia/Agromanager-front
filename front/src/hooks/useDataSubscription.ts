import { ISuscribe } from "@/interfaces/interfacesSupscriptions";
import { setSelectedSubscription } from "@/redux/reducer";
import React from "react";
import { useDispatch } from "react-redux";

const useDataSubscription = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const subscription = localStorage.getItem("subscription");
    if (subscription) {
      dispatch(setSelectedSubscription(JSON.parse(subscription)));
    }
  }, [dispatch]);

  const saveSubscriptionStorage = (subscription: ISuscribe) => {
    localStorage.setItem("subscription", JSON.stringify(subscription));
    dispatch(setSelectedSubscription(subscription));
  };

  return { saveSubscriptionStorage };
};

export default useDataSubscription;
