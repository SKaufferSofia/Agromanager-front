"use client";
import React from "react";
import { Supply } from "@/interfaces/interfaces";
import Image from "next/image";

interface StockTableProps {
  supplies: Supply[];
  handleEditClick: (supply: Supply) => void;
}
const TABLE_HEAD = [
  "Nombre",
  "Proveedor",
  "Cantidad",
  "Precio",
  "Categoria",
  "Medidas",
  "Imagen",
  "Editar",
];

const StockTable: React.FC<StockTableProps> = ({
  supplies,
  handleEditClick,
}) => {
  return (
    <div className="w-full h-auto flex flex-col">
      <table className="table-auto w-full mx-auto glass-background shadow-lg shadow-gray-800 ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b bg-navbarColor bg-opacity-60 p-4 text-left text-lg text-gray-900 poppins-medium"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {supplies?.length > 0 ? (
            supplies.map((supply) => (
              <tr
                key={supply.id}
                className="border-gray-400 border-y-2 hover:bg-gray-300  transition duration-150 ease-in-out"
              >
                <td className="p-4 text-navbarColor poppins-bold">
                  {supply.name}
                </td>
                <td className="p-4 text-gray-900 poppins-light">
                  {supply.provider}
                </td>
                <td className="p-4 text-gray-900 poppins-light">
                  <span
                    className={`p-[10px] inline-flex items-center w-10 h-10 text-center rounded-full text-md poppins-light ${
                      supply.stock <= 5
                        ? "bg-yellow-700 text-gray-900 p-[14px]"
                        : "bg-light-green-700 text-gray-900"
                    }`}
                  >
                    {supply.stock}
                  </span>
                </td>
                <td className="p-4 text-gray-900 poppins-light">
                  ${supply.price.toFixed(2)}
                </td>
                <td className="p-4 text-gray-900 poppins-light">
                  {supply.category.name}
                </td>
                <td className="p-4 text-gray-900 poppins-light">
                  {supply.measurement.name}
                </td>
                <td className="p-4">
                  {supply.imgUrl && (
                    <Image
                      width={80}
                      height={90}
                      src={
                        typeof supply.imgUrl === "string" ? supply.imgUrl : ""
                      }
                      alt={supply.name}
                      className="object-cover rounded-xl hover:scale-150 transition duration-300 ease-in-out"
                    />
                  )}
                </td>
                <td className="p-4">
                  <button onClick={() => handleEditClick(supply)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0,0,300,150"
                    >
                      <g
                        fill="#719a2d"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(4,4)">
                          <path d="M39.086,17.914l7,7l-24.581,24.581l-9.201,4.412c-1.367,0.457 -2.668,-0.844 -2.211,-2.211l4.412,-9.201zM41.914,15.086l4.5,-4.5c0.781,-0.781 2.047,-0.781 2.828,0l4.172,4.172c0.781,0.781 0.781,2.047 0,2.828l-4.5,4.5z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={TABLE_HEAD.length}
                className="p-4 text-center text-gray-500"
              >
                No hay insumos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
