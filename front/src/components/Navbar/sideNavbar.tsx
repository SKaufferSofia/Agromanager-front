"use client";
import React, { useState } from "react";
import { IPlotsNavbar, IPlotsType } from "@/interfaces/interfaces";

const SideNavbar: React.FC<IPlotsNavbar> = ({ plots }) => {
  const [isLotesOpen, setIsLotesOpen] = useState(false);

  const toggleLotes = () => {
    setIsLotesOpen(!isLotesOpen);
  };

  return (
    <div className="w-full h-auto flex md:flex-col md:min-h-screen md:w-64 p-4 ">
      <div className="mb-8 p-4">
        <h3 className="text-lg poppins-semibold uppercase">Panel de Usuario</h3>
      </div>
      <div className="textColor mb-4">
        <h4
          onClick={toggleLotes}
          className="cursor-pointer poppins-regular text-xl py-2 px-4 rounded hover:bg-white"
        >
          Mis Lotes
        </h4>

        {isLotesOpen && (
          <ul className="pl-4">
            {plots.map((plot: IPlotsType) => (
              <li
                key={plot.id}
                className="py-2 px-4 rounded poppins-light textColor hover:border-white hover:border-2"
              >
                {plot.cereal}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <a href="/dashboard/stock">
          <h4 className="text-xl py-2 px-4 mt-4 poppins-regular textColor rounded hover:bg-white">
            Stock
          </h4>
        </a>
      </div>
    </div>
  );
};

export default SideNavbar;
