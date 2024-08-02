"use client";
import React, { useState } from "react";
import { IPlotsNavbar, IPlotsType } from "@/interfaces/interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SideNavbar: React.FC<IPlotsNavbar> = ({ plots }) => {
  const [isLotesOpen, setIsLotesOpen] = useState(false);
  const router = useRouter();

  const toggleLotes = () => {
    setIsLotesOpen(!isLotesOpen);
  };

  const handlePlotsClick = () => {
    router.push("/dashboard/plots");
  };

  return (
    <div className="w-full h-auto flex md:flex-col md:min-h-screen md:w-64 p-4  ">
      <div className="mb-8 p-4">
        <h3 className="text-lg poppins-semibold uppercase">Panel de Usuario</h3>
      </div>
      <div className="textColor mb-4">
        <h4
          onClick={handlePlotsClick}
          className="cursor-pointer poppins-regular text-xl py-2 px-4 rounded hover:bg-white flex justify-between items-center"
        >
          Mis Lotes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleLotes}
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
        </h4>

        {isLotesOpen && (
          <ul className="pl-4">
            {plots.map((plot: IPlotsType) => (
              <li
                key={plot.id}
                className="py-2 px-4 rounded poppins-light textColor hover:border-white hover:border-2"
              >
                <Link href={`/dashboard/plots/${plot.id}`}>{plot.cereal}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <a href="/dashboard/stock">
          <h4 className="text-xl py-2 px-4 mt-4 poppins-regular textColor rounded hover:bg-white">
            Inventario
          </h4>
        </a>
      </div>
    </div>
  );
};

export default SideNavbar;
