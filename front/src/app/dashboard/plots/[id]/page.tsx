"use client";

import React, { useEffect, useState } from "react";
import AddSupplyInput from "@/components/AddSupplyInput/AddSupplyInput";
import AddLaborInput from "@/components/AddLaborInput/AddLaborInput";
import DetailSupplyLaborCard from "@/components/DetailSupplyLaborCard/DetailSupplyLaborCard";
import SideNavbar from "@/components/Navbar/sideNavbar";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { IPlotsDashboardType } from "@/interfaces/interfaces";
import MainButton from "@/components/MainButton/MainButton";
import { RootState } from "@/redux/store";
import { API_WEATHER_PROPS } from "@/lib/server/envs";

import axios from "axios";

const PlotDetailDashboard: React.FC = () => {
  let location = "";
  let country = "";
  // Parse path (URL) to get plot ID
  const splitPath = usePathname().split("/");
  const idFromPath = splitPath[splitPath.length - 1];
  const plots = useSelector((state: any) => state.plot);
  const [fetchedWeather, setFetchedWeather]: any = useState(null);

  const currentPlot = plots.find(
    (plot: IPlotsDashboardType) => String(plot.id) === idFromPath
  );

  useEffect(() => {
    if (currentPlot) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${API_WEATHER_PROPS}&q=${currentPlot.latitude},${currentPlot.longitude}&lang=es`
          );

          setFetchedWeather(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };

      fetchWeather();
    }
  }, [currentPlot]);

  if (fetchedWeather) {
    console.log("Weather Data:", fetchedWeather);
    location = fetchedWeather.location.name;
    country = fetchedWeather.location.country;
  }

  if (!currentPlot) {
    return (
      <div className=" w-screen h-full flex flex-col sm:flex-row">
        <h1 className="h-screen mt-24">Lote no encontrado</h1>;
      </div>
    );
  }

  return (
    <div className=" w-screen h-full flex flex-col sm:flex-row bg-gradient-to-r text-textColor">
      <div className="mt-[86px] h-min-screen bg-sideNavbarColor bg-opacity-20 ">
        <SideNavbar plots={plots} />
      </div>
      <div className="mt-36 w-5/6 ">
        <h2 className="text-4xl font-semibold text-center mb-4">
          Lote {currentPlot.cereal}
        </h2>
        <div className=" m-4 flex bg-gradient-to-r text-textColor from-altBgColor shadow-sm poppins-semibold  p-4 w-full h-36 mx-auto items-center ">
          {fetchedWeather ? (
            <div className=" text-center">
              {fetchedWeather.current.temp_c}°C
              <picture className="flex justify-center">
                <img
                  className="fit-picture w-20 h-20"
                  src={fetchedWeather.current.condition.icon}
                  alt="Weather icon"
                />
              </picture>
              {fetchedWeather.current.condition.text}
            </div>
          ) : (
            <p className="text-center text-lg font-medium">Binvenido</p>
          )}

          <div className="m-10 flex  text-lg font-semibold">
            <p className="m-10 flex  text-lg font-semibold">
              Superficie en Ha: {currentPlot.surface}
            </p>
            <p className="m-10 flex text-lg font-semibold">
              Tipo de cereal: {currentPlot.cereal}
            </p>
            {location && country && (
              <p className="m-10 flex text-lg font-semibold">
                Ubicación: {location}, {country}
              </p>
            )}
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Labores</h2>
          <AddLaborInput plotId={idFromPath} />
          <h2 className="text-2xl font-semibold text-center mt-4 mb-4">
            Insumos
          </h2>
          <AddSupplyInput plotId={idFromPath} />
        </div>
        <div className="bg-altBgColor ">
          <DetailSupplyLaborCard currentPlot={currentPlot} />
        </div>
        <div className="p-9">
          <MainButton text="Ver Lotes" path="/dashboard/plots" />
        </div>
      </div>
    </div>
  );
};

export default PlotDetailDashboard;
