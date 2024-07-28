"use client";

import React, { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import { IPlotsType, Labors, Supply } from "@/interfaces/interfaces";

interface DetailSupplyLaborCardProps {
  currentPlot: IPlotsType;
}
const DetailSupplyLaborCard: React.FC<DetailSupplyLaborCardProps> = ({
  currentPlot,
}) => {
  const [activeTab, setActiveTab] = useState("Labores");

  const calculateTotalPrice = (items: Labors[] | Supply[] | null): number => {
    if (!items) return 0;
    return items.reduce((total, item) => total + item.price, 0);
  };

  const totalLaborPrice = calculateTotalPrice(currentPlot.labors);
  const totalSupplyPrice = calculateTotalPrice(currentPlot.supplies);

  return (
    <div className=" mt-8 ">
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          <Tab
            value="Insumos"
            onClick={() => setActiveTab("Insumos")}
            className={`p-2 text-xl ${
              activeTab === "Insumos" ? "text-white" : ""
            }`}
          >
            Insumos
          </Tab>
          <Tab
            value="Labores"
            onClick={() => setActiveTab("Labores")}
            className={`p-2 text-xl ${
              activeTab === "Labores" ? "text-white" : ""
            }`}
          >
            Labores
          </Tab>
        </TabsHeader>
        {activeTab === "Insumos" && (
          <TabsBody className="bg-white h-4/5 w-10/12 rounded-md mx-auto mt-8 mb-10">
            <div className="flex font-bold p-4">
              <div className="flex-1">Nombre</div>
              <div className="flex-1">Proveedor</div>
              <div className="flex-1">Cantidad</div>
              <div className="flex-1">Precio</div>
            </div>
            {currentPlot.supplies &&
              currentPlot.supplies.map((supply) => (
                <div className="flex p-4" key={supply.id}>
                  <div className="flex-1">{supply.name}</div>
                  <div className="flex-1">{supply.provider}</div>
                  <div className="flex-1">{supply.stock}</div>
                  <div className="flex-1">${supply.price}</div>
                </div>
              ))}
            <div className="flex justify-end font-bold">
              <div className="px-6 py-4">Total Price</div>
              <div className="px-6 py-4">{totalSupplyPrice}</div>
            </div>
          </TabsBody>
        )}
        {activeTab === "Labores" && (
          <TabsBody className="bg-white h-4/5 w-10/12 rounded-md mx-auto mt-8 mb-10">
            <div className="flex font-bold flex-1 p-4">
              <div className="flex-1">Nombre</div>
              <div className="flex-1">Contratista</div>
              <div className="flex-1">Superficie</div>
              <div className="flex-1">Precio</div>
            </div>
            <div>
              {currentPlot.labors &&
                currentPlot.labors.map((labor) => (
                  <div className="flex justify-around p-4" key={labor.id}>
                    <div className="flex-1">{labor.name}</div>
                    <div className="flex-1">{labor.contractor}</div>
                    <div className="flex-1">{labor.surface}</div>
                    <div className="flex-1">${labor.price}</div>
                  </div>
                ))}
              <div className="flex font-bold justify-end">
                <div className="px-6 py-4">Total Price</div>
                <div className="px-6 py-4">${totalLaborPrice}</div>
              </div>
            </div>
          </TabsBody>
        )}
      </Tabs>
    </div>
  );
};

export default DetailSupplyLaborCard;
