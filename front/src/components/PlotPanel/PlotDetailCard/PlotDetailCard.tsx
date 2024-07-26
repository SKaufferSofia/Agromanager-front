import React from "react";
import { PlotDetailCardProps } from "@/interfaces/interfaces";
import Link from "next/link";

const PlotDetailCard: React.FC<PlotDetailCardProps> = ({
  id,
  surface,
  cereal,
  labors,
  supplies,
}) => {
  const suppliesCount = supplies?.length || 0;

  return (
    <div
      className="w-full h-auto flex flex-col p-6 border border-gray-300 bg-white rounded-lg 
                 transition-shadow duration-300 ease-in-out 
                  hover:shadow-custom-green hover:bg-navbarColor"
    >
      <p className="poppins-bold uppercase">Plot: {cereal}</p>
      <hr className="my-2 border-gray-500" />
      <p className="py-2">
        <span className="poppins-medium">Surface: </span> {surface} hectáreas
      </p>
      <div className="flex justify-between">
        <p className="py-2">
          <span className="poppins-medium">Labors Quantity: </span>{" "}
          {labors?.length || "No labors"}
        </p>
        <Link href={`/dashboard/plots/${id}`} className="py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
            <path
              d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
      <div className="flex justify-between">
        <p className="py-2">
          <span className="poppins-medium">Supplies Quantity: </span>
          {supplies && supplies.length > 0 ? (
            <span>{suppliesCount}</span>
          ) : (
            "No supplies"
          )}
        </p>
        <Link href={`/dashboard/plots/${id}`} className="py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
            <path
              d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PlotDetailCard;
