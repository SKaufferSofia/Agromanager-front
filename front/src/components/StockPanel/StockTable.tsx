// StockTable.tsx
import React from "react";
import { StockTableProps, Supply } from "@/interfaces/interfaces";
import Image from "next/image";

const TABLE_HEAD = [
  "Name",
  "Provider",
  "Stock",
  "Price",
  "Category",
  "Measurement",
  "Image",
  "Edit",
];

const StockTable: React.FC<StockTableProps> = ({
  supplies,
  handleEditClick,
}) => {
  const list = supplies.map((supply) => supply.id);

  return (
    <div className="overflow-x-auto p-4 w-full mx-auto bg-white">
      <table className="table-auto w-full mx-auto bg-white">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b bg-gray-100 p-4 text-left text-gray-600"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {supplies?.length > 0 ? (
            supplies.map((supply) => (
              <tr key={supply.id}>
                <td className="p-4">{supply.name}</td>
                <td className="p-4">{supply.provider}</td>
                <td className="p-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-md poppins-light bg-green-300 text-green-900">
                    {supply.stock}
                  </span>
                </td>
                <td className="p-4">${supply.price.toFixed(2)}</td>
                <td className="p-4">{supply.category.name}</td>
                <td className="p-4">{supply.measurement.name}</td>
                <td className="p-4">
                  {supply.imgUrl && (
                    <Image
                      width={80}
                      height={80}
                      src={supply.imgUrl}
                      alt={supply.name}
                      className="object-cover rounded-xl"
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
                No supplies available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
