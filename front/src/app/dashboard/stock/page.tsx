"use client";
import React, { useEffect, useState } from "react";
import SideNavbar from "@/components/Navbar/sideNavbar";
import StockPanel from "@/components/StockPanel/StockPanel";

import useDataPlot from "@/hooks/useDataPlot";

import useFetchPlots from "@/hooks/plotsHooksPetitions";
import { Supply } from "@/interfaces/interfaces";
import { fetchSupplies } from "@/lib/server/petitionStock";
import { useDispatch, useSelector } from "react-redux";
import { saveStock, updateStock } from "@/redux/reducer";

const StockDashboard: React.FC = () => {
  const { savePlotsStorage } = useDataPlot();
  const userId = useSelector((state: any) => state.userData.id);
  console.log(userId);
  const token = useSelector((state: any) => state.token);
  console.log(token);

  const [supplies, setSupplies] = useState<Supply[]>([]);

  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const edit = useSelector((state: any) => state.editStock);

  useEffect(() => {
    const id = userId;

    if (userId && token) {
      const loadSupplies = async () => {
        try {
          const suppliesData = await fetchSupplies(id, token, (supplies) => {
            dispatch(saveStock(supplies));
          });
          setSupplies(suppliesData);
        } catch (error) {
          console.log(error);
        }
      };
      loadSupplies();
    }

    console.log(supplies);
  }, [edit, token, userId, dispatch]);

  const { plots, error: plotsError } = useFetchPlots(userId, token);

  return (
    <div className="w-screen h-full flex flex-col sm:flex-row">
      <div className="mt-24 h-min-screen bg-sideNavbarColor bg-opacity-20">
        {plotsError ? (
          <div className="p-4 bg-red-500 text-white rounded-lg mb-6">
            {plotsError}
          </div>
        ) : (
          <SideNavbar plots={plots} />
        )}
      </div>
      <div className="flex-grow mt-24 w-screen">
        <StockPanel supplies={supplies} />
      </div>
    </div>
  );
};

export default StockDashboard;
