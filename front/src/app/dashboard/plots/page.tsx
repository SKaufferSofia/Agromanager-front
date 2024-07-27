// pages/PlotDashboard.tsx
"use client";
import React from "react";

import PlotPanel from "@/components/PlotPanel/PlotPanel";
import plots from "@/helpers/plotsArray";
import { IPlotsType } from "@/interfaces/interfaces";
import SideNavbar from "@/components/Navbar/sideNavbar";
import { useSelector } from "react-redux";

console.log(plots);

const PlotDashboard: React.FC = () => {
  const userId = useSelector((state: any) => state.userData.id);
  console.log(userId);

  return (
    <div className="  w-screen h-full flex flex-col sm:flex-row">
      <div className="mt-24 h-min-screen  bg-sideNavbarColor bg-opacity-20 ">
        <SideNavbar plots={plots} />
      </div>
      <div className="p-8 flex-grow mt-24 w-screen">
        <PlotPanel plots={plots} />
      </div>
    </div>
  );
};

export default PlotDashboard;
