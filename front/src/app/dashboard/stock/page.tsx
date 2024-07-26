import React from "react";
import plots from "@/helpers/plotsArray";
import SideNavbar from "@/components/Navbar/sideNavbar";
import StockPanel from "@/components/StockPanel/StockPanel";
import { PlotPanelProps } from "@/interfaces/interfaces";

const StockDashboard: React.FC = () => {
  return (
    <div className="w-screen h-full flex flex-col sm:flex-row">
      <div className="mt-24 h-min-screen  bg-sideNavbarColor bg-opacity-20 ">
        <SideNavbar plots={plots} />
      </div>
      <div className=" flex-grow mt-24 w-screen">
        <StockPanel plots={plots} />
      </div>
    </div>
  );
};

export default StockDashboard;
