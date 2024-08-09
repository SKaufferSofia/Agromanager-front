"use client";

import SideNavbar from "@/components/Navbar/sideNavbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPlotsDashboardType } from "@/interfaces/interfaces";
import { fetchPlots } from "@/lib/server/petitionPlots";
import { savePlot } from "@/redux/reducer";
import useDataPlot from "@/hooks/useDataPlot";
import ProfileComponent from "@/components/MyProfile/ProfileComponent";
import ProfileCard from "@/components/MyProfile/NewProfile";
import { DetailProfile } from "@/components/MyProfile/DetailProfile";
import { SidebarWithLogo } from "@/components/Navbar/SideNavbarComponent";

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
    <div className="flex flex-col sm:flex-row">
      <div className="mt-[71px] h-min-screen bg-sideNavbarColor bg-opacity-10">
        <SideNavbar plots={plots} />
        {/* <SidebarWithLogo /> */}
      </div>
      <div className="flex-grow w-screen">
        <ProfileCard />
        {/* <ProfileComponent /> */}
        <div className="flex justify-center items-center m-10 py-4">
          <DetailProfile />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
