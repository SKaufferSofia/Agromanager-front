"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlotPanel from "@/components/PlotPanel/PlotPanel";
import SideNavbar from "@/components/Navbar/sideNavbar";
import { IPlotsType } from "@/interfaces/interfaces";
import { fetchPlots } from "@/lib/server/petitionPlots";
import { savePlot } from "@/redux/reducer";

const PlotDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.userData.id);
  console.log("User ID:", userId);
  const token = useSelector((state: any) => state.token);
  console.log("Token:", token);
  const [plots, setPlots] = useState<IPlotsType[]>([]);

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

  console.log(plots);

  return (
    <div className="w-screen h-full flex flex-col sm:flex-row">
      <div className="mt-24 h-min-screen bg-sideNavbarColor bg-opacity-20">
        <SideNavbar plots={plots} />
      </div>
      <div className="p-8 flex-grow mt-24 w-screen">
        <PlotPanel plots={plots} setPlots={setPlots} />
      </div>
    </div>
  );
};

export default PlotDashboard;
