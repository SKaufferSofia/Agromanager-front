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
import useDataStock from "@/hooks/useDataStock";

const StockDashboard: React.FC = () => {
  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);

  const [supplies, setSupplies] = useState<Supply[]>([]);

  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const edit = useSelector((state: any) => state.editStock);
  const { saveStockStorage } = useDataStock();

  useEffect(() => {
    if (userId && token) {
      const loadSupplies = async () => {
        try {
          const suppliesData = await fetchSupplies(
            userId,
            token,
            (supplies) => {
              dispatch(saveStock(supplies));
              saveStockStorage(supplies);
            }
          );
          setSupplies(suppliesData);
        } catch (error) {
          console.log(error);
        }
      };
      loadSupplies();
    }
  }, [edit, token, userId, dispatch]);

  const { plots, error: plotsError } = useFetchPlots(userId, token);

  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row ">
      <div className={`absolute inset-0 z-0 h-full `}>
        <video
          autoPlay
          muted
          loop
          className="w-full h-full blur-sm object-cover  "
        >
          <source
            src="/videos/4800100-uhd_4096_2160_30fps.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="w-full bg-white opacity-55 absolute inset-0"></div>
      </div>
      <div className="mt-[86px] h-min-screen bg-sideNavbarColor bg-opacity-20 z-10">
        {plotsError ? (
          <div className="p-4 bg-red-500 text-white rounded-lg mb-6">
            {plotsError}
          </div>
        ) : (
          <SideNavbar plots={plots} />
        )}
      </div>
      <div className="flex-grow mt-24 w-screen z-10 ">
        <StockPanel supplies={supplies} />
      </div>
    </div>
  );
};

export default StockDashboard;
