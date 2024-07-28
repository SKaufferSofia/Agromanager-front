"use client";

import React, { useEffect, useState } from "react";
//import plots from "@/helpers/plotsArray";
import SideNavbar from "@/components/Navbar/sideNavbar";
import StockPanel from "@/components/StockPanel/StockPanel";
import { IPlotsType, PlotPanelProps, Supply } from "@/interfaces/interfaces";
import { useSelector } from "react-redux";
import { fetchSupplies } from "@/lib/server/petitionStock";
import { fetchPlots } from "@/lib/server/petitionPlots";
import { useDispatch } from "react-redux";
import { savePlot } from "@/redux/reducer";

const StockDashboard: React.FC = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);
  const [plots, setPlots] = useState<IPlotsType[]>([]);
  const [supplies, setSupplies] = useState<Supply[]>([]);

  useEffect(() => {
    const getStock = async () => {
      if (userId && token) {
        try {
          const fetchedSupplies = await fetchSupplies(userId, token);
          setSupplies(fetchedSupplies);
        } catch (error) {
          console.error("Error fetching supplies:", error);
        }
      }
    };

    getStock();
  }, [userId, token]);

  useEffect(() => {
    const getPlots = async () => {
      if (userId && token) {
        try {
          const fetchedPlots = await fetchPlots(userId, token, (plots) => {
            dispatch(savePlot(plots));
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
      <div className="mt-24 h-min-screen  bg-sideNavbarColor bg-opacity-20 ">
        <SideNavbar plots={plots} />
      </div>
      <div className=" flex-grow mt-24 w-screen">
        <StockPanel supplies={supplies} />
      </div>
    </div>
  );
};

export default StockDashboard;
