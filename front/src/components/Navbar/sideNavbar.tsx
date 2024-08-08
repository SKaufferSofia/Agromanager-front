"use client";
import React, { useState } from "react";
import { IPlotsDashboardType, IPlotsNavbar } from "@/interfaces/interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SideNavbar: React.FC<IPlotsNavbar> = ({ plots }) => {
  const [isLotesOpen, setIsLotesOpen] = useState(false);
  const router = useRouter();

  const toggleLotes = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evita que el clic en el ícono afecte otros elementos
    setIsLotesOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-auto flex md:flex-col md:min-h-screen md:w-64 p-4">
      <div className="mb-8 p-4">
        <h3 className="text-lg text-gray-900 poppins-semibold uppercase">
          Panel de Usuario
        </h3>
      </div>
      <div className="text-gray-800 mb-4">
        <div className="flex justify-between items-center text-xl text-gray-800 py-2 px-4 mt-4 poppins-regular textColor rounded hover:bg-white hover:text-textGreen">
          <Link href="/dashboard/plots">
            <h4 className="">Mis Lotes</h4>
          </Link>
          <div
            onClick={toggleLotes}
            className="flex items-center bg-textGreen/50 p-2 rounded-full cursor-pointer hover:bg-white transition-colors duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 transform transition-transform ${
                isLotesOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {isLotesOpen && (
          <ul className="pl-4">
            {plots.map((plot: IPlotsDashboardType) => (
              <li
                key={plot.id}
                className="py-2 px-4 rounded poppins-light textColor hover:bg-white hover:text-textGreen"
              >
                <Link href={`/dashboard/plots/${plot.id}`}>{plot.cereal}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Link href="/dashboard/stock">
          <h4 className="text-xl text-gray-800 py-2 px-4 mt-4 poppins-regular textColor rounded hover:bg-white hover:text-textGreen">
            Inventario
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
