"use client";

import SideNavbar from "@/components/Navbar/sideNavbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPlotsDashboardType } from "@/interfaces/interfaces";
import { fetchPlots } from "@/lib/server/petitionPlots";
import { savePlot } from "@/redux/reducer";
import useDataPlot from "@/hooks/useDataPlot";
import ProfileComponent from "@/components/MyProfile/ProfileComponent";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { savePlotsStorage } = useDataPlot();
  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);
  const [plots, setPlots] = useState<IPlotsDashboardType[]>([]);

  useEffect(() => {
    const getPlots = async () => {
      if (userId && token) {
        try {
          const fetchedPlots = await fetchPlots(userId, token, (plots) => {
            dispatch(savePlot(plots));
            savePlotsStorage(plots);
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
      <div className="mt-[86px] h-min-screen bg-sideNavbarColor bg-opacity-10 ">
        <SideNavbar plots={plots} />
      </div>
      <div className="p-8 flex-grow mt-24 sm:w-3/4">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default MyProfile;
