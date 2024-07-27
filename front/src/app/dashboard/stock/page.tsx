"use client";

import React, { useEffect, useState } from "react";
//import plots from "@/helpers/plotsArray";
import SideNavbar from "@/components/Navbar/sideNavbar";
import StockPanel from "@/components/StockPanel/StockPanel";
import { IPlotsType, PlotPanelProps } from "@/interfaces/interfaces";
import { useSelector } from "react-redux";
import { fetchStock } from "@/lib/server/petitionStock";
import { fetchPlots } from "@/lib/server/petitionPlots";
import { useDispatch } from "react-redux";
import { savePlot } from "@/redux/reducer";

const StockDashboard: React.FC = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state: any) => state.userData.id);
  console.log("User ID:", userId);
  const token = useSelector((state: any) => state.token);
  console.log("Token:", token);
  const [plots, setPlots] = useState<IPlotsType[]>([]);

  // useEffect(() => {
  //   const getStock = async () => {
  //     if (userId && token) {
  //       try {
  //         const fetchedPlots = await fetchStock(userId);
  //         setPlots(fetchedPlots);
  //         console.log("Fetched plots:", fetchedPlots);
  //       } catch (error) {
  //         console.error("Error fetching plots:", error);
  //       }
  //     }
  //   };

  //   getStock();
  // }, [userId, token]);

  useEffect(() => {
    const getPlots = async () => {
      if (userId && token) {
        try {
          const fetchedPlots = await fetchPlots(userId, token, (plots) => {
            dispatch(savePlot(plots));
          });
          setPlots(fetchedPlots);
          console.log("Fetched plots:", fetchedPlots);
        } catch (error) {
          console.error("Error fetching plots:", error);
        }
      }
    };

    getPlots();
  }, [userId, token]);

  console.log();

  return (
    <div className="w-screen h-full flex flex-col sm:flex-row">
      <div className="mt-24 h-min-screen  bg-sideNavbarColor bg-opacity-20 ">
        <SideNavbar plots={plots} />
      </div>
      <div className=" flex-grow mt-24 w-screen">
        <StockPanel plots={plots} setPlots={setPlots} />
      </div>
    </div>
  );
};

export default StockDashboard;
