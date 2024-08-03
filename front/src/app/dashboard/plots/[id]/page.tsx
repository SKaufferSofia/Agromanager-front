"use client";

import React, { useEffect, useState } from "react";
import AddSupplyInput from "@/components/AddSupplyInput/AddSupplyInput";
import AddLaborInput from "@/components/AddLaborInput/AddLaborInput";
import DetailSupplyLaborCard from "@/components/DetailSupplyLaborCard/DetailSupplyLaborCard";
import SideNavbar from "@/components/Navbar/sideNavbar";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { IPlotsType } from "@/interfaces/interfaces";
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
    (plot: IPlotsType) => String(plot.id) === idFromPath
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
    <div className=" w-screen h-full flex flex-col sm:flex-row">
      <div className="w-1/6 mt-24 h-min-screen  bg-sideNavbarColor bg-opacity-20 ">
        <SideNavbar plots={plots} />
      </div>
      <div className="mt-36 w-5/6 ">
        <h2 className="text-4xl font-semibold text-center mb-4">
          Lote {currentPlot.cereal}
        </h2>
        <div className="right-0 m-4 flex bg-custom-linear-gradient shadow-md rounded-full p-4 w-36 h-36 text-white mx-auto items-center justify-center">
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
            <p className="text-center text-lg font-medium">
              Loading weather data...
            </p>
          )}
        </div>
        <div className="m-10 flex justify-around text-lg font-semibold">
          <p>Superficie: {currentPlot.surface} HA</p>
          <p>Cereal: {currentPlot.cereal}</p>
          <p>
            Lugar: {location}, {country}
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Labores</h2>
          <AddLaborInput plotId={idFromPath} />
          <h2 className="text-2xl font-semibold text-center mt-4 mb-4">
            Insumos
          </h2>
          <AddSupplyInput plotId={idFromPath} />
        </div>
        <div className=" bg-altBgColor">
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
