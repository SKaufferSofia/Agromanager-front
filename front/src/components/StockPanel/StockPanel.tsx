"use client";
import React, { useState } from "react";
import { PlotPanelProps } from "@/interfaces/interfaces";
import CreateStockForm from "./CreateStockForm";

const TABLE_HEAD = [
  "Name",
  "Provider",
  "Stock",
  "Price",
  "Category",
  "Measurement",
  "User",
  "Edit",
];

const StockPanel: React.FC<PlotPanelProps> = ({ plots }) => {
  const [editingSupply, setEditingSupply] = useState<any>(null);

  //axios put/supply/{id}

  const handleEditClick = (supply: any) => {
    setEditingSupply(supply);
  };

  const handleEditSubmit = (updatedSupply: any) => {
    // Aquí debes manejar la actualización del suministro
    console.log("Updated Supply:", updatedSupply);
    setEditingSupply(null);
  };

  return (
    <div className="w-full max-w-full bgColor min-h-screen flex-col">
      <div className="w-3/4 mx-auto mt-8 mb-10">
        <CreateStockForm />

        {editingSupply && (
          <div className="p-6 bgColor mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Edit Supply</h2>
            <form
              className="grid grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSubmit(editingSupply);
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={editingSupply.name}
                onChange={(e) =>
                  setEditingSupply({ ...editingSupply, name: e.target.value })
                }
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Provider"
                value={editingSupply.provider}
                onChange={(e) =>
                  setEditingSupply({
                    ...editingSupply,
                    provider: e.target.value,
                  })
                }
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Stock"
                value={editingSupply.stock}
                onChange={(e) =>
                  setEditingSupply({ ...editingSupply, stock: e.target.value })
                }
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="number"
                step="0.01"
                placeholder="Price"
                value={editingSupply.price}
                onChange={(e) =>
                  setEditingSupply({ ...editingSupply, price: e.target.value })
                }
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Category"
                value={editingSupply.category}
                onChange={(e) =>
                  setEditingSupply({
                    ...editingSupply,
                    category: e.target.value,
                  })
                }
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Measurement"
                value={editingSupply.measurement}
                onChange={(e) =>
                  setEditingSupply({
                    ...editingSupply,
                    measurement: e.target.value,
                  })
                }
                className="px-4 py-2 border rounded-lg"
              />

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

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
              {plots.length > 0 ? (
                plots.map((plot) =>
                  plot.supplies && plot.supplies.length > 0
                    ? plot.supplies.map((supply, index) => (
                        <tr
                          key={supply.name + "-" + plot.id}
                          className={
                            index === plot.supplies.length - 1
                              ? ""
                              : "border-b border-gray-200"
                          }
                        >
                          <td className="p-4">{supply.name}</td>
                          <td className="p-4">{supply.provider}</td>
                          <td className="p-4">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-md poppins-light bg-green-300 text-green-900">
                              {supply.stock}
                            </span>
                          </td>
                          <td className="p-4">${supply.price.toFixed(2)}</td>
                          <td className="p-4">{supply.category}</td>
                          <td className="p-4">{supply.measurement}</td>
                          <td className="p-4">{supply.user}</td>
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
                                  fill-rule="nonzero"
                                  stroke="none"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  stroke-linejoin="miter"
                                  stroke-miterlimit="10"
                                  stroke-dasharray=""
                                  stroke-dashoffset="0"
                                  font-family="none"
                                  font-weight="none"
                                  font-size="none"
                                  text-anchor="none"
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
                    : []
                )
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

        <div className="p-4 border-t bg-white w-full mx-auto flex justify-between items-center">
          <button className="px-4 py-2 border border-gray-300 rounded-lg">
            Previous
          </button>

          <button className="px-4 py-2 border border-gray-300 rounded-lg">
            Next
          </button>
        </div>
      </div>

      <button className="bg-red-500 text-white m-8 p-4 rounded-lg">
        Go back
      </button>
    </div>
  );
};

export default StockPanel;
