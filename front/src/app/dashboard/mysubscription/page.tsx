"use client";

import SideNavbar from "@/components/Navbar/sideNavbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPlotsType } from "@/interfaces/interfaces";
import { fetchPlots } from "@/lib/server/petitionPlots";
import { savePlot } from "@/redux/reducer";
import useDataPlot from "@/hooks/useDataPlot";
import SelectedSubscriptionCard from "@/components/SelectedSubcriptionCard/SelectedSubscriptionCard";
import { ISuscribe } from "@/interfaces/interfacesSupscriptions";
import { formatDateTime } from "@/utils/date";

const MySubscription = () => {
  const dispatch = useDispatch();
  const { savePlotsStorage } = useDataPlot();
  const userId = useSelector((state: any) => state.userData.id);
  const dateSubscription = useSelector(
    (state: any) => state.userData.premiumExpiration
  );
  const token = useSelector((state: any) => state.token);
  const [plots, setPlots] = useState<IPlotsType[]>([]);
  const [subscription, setSubscription] = useState<ISuscribe | null>(null);

  useEffect(() => {
    // Read subscription data from localStorage
    const subscriptionData = localStorage.getItem("subscription");
    if (subscriptionData) {
      setSubscription(JSON.parse(subscriptionData));
    }
  }, []);

  useEffect(() => {
    const getPlots = async () => {
      if (userId && token) {
        try {
          const fetchedPlots = await fetchPlots(userId, token, (plots) => {
            dispatch(savePlot(plots));
            savePlotsStorage(plots);
          });
          setPlots(fetchedPlots);
        } catch (error) {
          console.error("Error fetching plots:", error);
        }
      }
    };

    getPlots();
  }, [userId, token, dispatch]);

  return (
    <div className="w-screen h-full flex flex-col sm:flex-row">
      <div className="mt-[86px] h-min-screen bg-sideNavbarColor bg-opacity-10 ">
        <SideNavbar plots={plots} />
      </div>
      <div className="p-8 flex-grow mt-24 sm:w-3/4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Tus Suscripciones Adquiridas
          </h1>
          <p className="text-lg text-gray-600 poppins-regular-italic">
            Aquí puedes ver las suscripciones que has adquirido. Cada una de
            ellas te ofrece acceso a diferentes funcionalidades y beneficios
            dentro de nuestra aplicación.
          </p>
        </div>

        {subscription ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SelectedSubscriptionCard subscription={subscription} />
            <div className="h-[45%] mt-10 p-4 bg-gray-100 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Detalles de la Suscripción
              </h2>
              <p className="text-lg font-medium text-gray-800">
                <strong>Fecha de Expiración:</strong>{" "}
                {formatDateTime(dateSubscription)}
              </p>
              <p className="text-lg font-medium text-gray-800 mt-2">
                <strong>Método de Pago:</strong> Mercado Pago
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg font-medium text-gray-500">
            No tienes suscripciones activas en este momento.
          </p>
        )}
      </div>
    </div>
  );
};

export default MySubscription;
