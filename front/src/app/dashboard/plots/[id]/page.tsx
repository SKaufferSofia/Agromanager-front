"use client";

import React from "react";
import AddSupplyInput from "@/components/AddSupplyInput/AddSupplyInput";
import AddLaborInput from "@/components/AddLaborInput/AddLaborInput";
import DetailSupplyLaborCard from "@/components/DetailSupplyLaborCard/DetailSupplyLaborCard";
import SideNavbar from "@/components/Navbar/sideNavbar";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import { IPlotsType } from "@/interfaces/interfaces";

const PlotDetailDashboard: React.FC = () => {
  // Parse path (URL) to get plot ID
  const splitPath = usePathname().split("/");
  const idFromPath = splitPath[splitPath.length - 1];

  const plots = useSelector((state: any) => state.plot);
  const currentPlot = plots.find(
    (plot: IPlotsType) => String(plot.id) === idFromPath
  );

  if (!currentPlot) {
    return (
      <div className=" w-screen h-full flex flex-col sm:flex-row">
        <h1 className="h-screen mt-24"> Plot ID not found</h1>;
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
        <div className="m-10 flex justify-around text-lg font-semibold">
          <p>Superficie: {currentPlot.surface} HA</p>
          <p>Cereal: {currentPlot.cereal}</p>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Labores</h2>
          <AddLaborInput plotId={idFromPath} />
          <h2 className="text-2xl font-semibold text-center mt-4 mb-4">
            Insumos
          </h2>
          <AddSupplyInput />
        </div>
        <div className=" bg-altBgColor">
          <DetailSupplyLaborCard currentPlot={currentPlot} />
        </div>
      </div>
    </div>
  );
};

export default PlotDetailDashboard;
