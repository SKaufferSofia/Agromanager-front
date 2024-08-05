"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import {
  IPlotsDashboardType,
  Labors,
  Supply,
  SupplyApplied,
} from "@/interfaces/interfaces";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useDataPlot from "@/hooks/useDataPlot";
import { saveSuppliesApplied } from "@/redux/reducer";

interface DetailSupplyLaborCardProps {
  currentPlot: IPlotsDashboardType;
}

const DetailSupplyLaborCard: React.FC<DetailSupplyLaborCardProps> = ({
  currentPlot,
}) => {
  const [activeTab, setActiveTab] = useState("Labores");
  const [suppliesAdded, setFetchedSupplies] = useState<SupplyApplied[]>([]);
  const token = useSelector((state: RootState) => state.token);
  const supplies = useSelector((state: RootState) => state.suppliesApplied);
  const dispatch = useDispatch();
  const { saveSuppliesAppliedStorage } = useDataPlot();

  const calculateLaborTotalPrice = (items: Labors[] | null): number => {
    let totalPrice = 0;
    if (!items) return 0;
    items.forEach((labor) => {
      totalPrice += labor.price * labor.surface;
    });
    return totalPrice;
  };

  const calculateSuppliesTotalPrice = (
    items: SupplyApplied[] | null
  ): number => {
    let totalPrice = 0;

    if (!items) return 0;
    items.forEach((supply) => {
      if (supply.supply) {
        totalPrice += supply.quantity * supply.supply.price;
      }
    });
    return totalPrice;
  };
  const newArrayId: string[] = [];
  if (currentPlot.supplies) {
    currentPlot.supplies.forEach((supply) => {
      newArrayId.push(supply.id);
    });
  }

  useEffect(() => {
    const suppliesByIds: any[] = [];
    const fetchSupplies = async () => {
      try {
        for (const id of newArrayId) {
          const response = await axios.get(
            `${NEXT_PUBLIC_API_URL}/plots/supplies/applied/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(
            `Fetched supplies for plot ${id}:`,
            suppliesByIds.push(response.data)
          );
          dispatch(saveSuppliesApplied(suppliesByIds));
          saveSuppliesAppliedStorage(suppliesByIds);
        }
      } catch (error) {
        console.error("Error fetching supplies:", error);
      }
    };
    fetchSupplies();
  }, [currentPlot]);

  const totalLaborPrice = calculateLaborTotalPrice(currentPlot.labors);
  const totalSupplyPrice = calculateSuppliesTotalPrice(supplies);

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
            value="Labores"
            onClick={() => setActiveTab("Labores")}
            className={`p-2 text-xl ${
              activeTab === "Labores" ? "text-white" : ""
            }`}
          >
            Labores
          </Tab>
          <Tab
            value="Insumos"
            onClick={() => setActiveTab("Insumos")}
            className={`p-2 text-xl ${
              activeTab === "Insumos" ? "text-white" : ""
            }`}
          >
            Insumos
          </Tab>
        </TabsHeader>
        {activeTab === "Insumos" && (
          <TabsBody className="bg-white h-4/5 w-10/12 rounded-md mx-auto mt-8 mb-10">
            <div className="flex font-bold p-4">
              <div className="flex-1">Nombre</div>
              <div className="flex-1">Proveedor</div>
              <div className="flex-1">Cantidad</div>
              <div className="flex-1">Precio</div>
              <div className="flex-1">Precio total</div>
            </div>
            {supplies &&
              supplies.map((supply) => (
                <div className="flex p-4" key={supply.id}>
                  <div className="flex-1">{supply.supply.name}</div>
                  <div className="flex-1">{supply.supply.provider}</div>
                  <div className="flex-1">{supply.quantity}</div>
                  <div className="flex-1">{supply.supply.price}</div>
                  <div className="flex-1">
                    {supply.supply.price * supply.quantity}
                  </div>
                </div>
              ))}
            <div className="flex justify-end font-bold">
              <div className="px-6 py-4">Precio Total</div>
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
              <div className="flex-1">Precio unitario</div>
              <div className="flex-1">Precio total</div>
            </div>
            <div>
              {currentPlot.labors &&
                currentPlot.labors.map((labor, index) => (
                  <div className="flex justify-around p-4" key={index}>
                    <div className="flex-1">{labor.name}</div>
                    <div className="flex-1">{labor.contractor}</div>
                    <div className="flex-1">{labor.surface}</div>
                    <div className="flex-1">${labor.price}</div>
                    <div className="flex-1">${labor.price * labor.surface}</div>
                  </div>
                ))}
              <div className="flex font-bold justify-end">
                <div className="px-6 py-4">Precio Total</div>
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
