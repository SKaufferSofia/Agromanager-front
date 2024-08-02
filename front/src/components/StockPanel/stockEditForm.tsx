"use client";
import React, { useState } from "react";
import { StockEditFormProps, Supply } from "@/interfaces/interfaces";
import useDataStock from "@/hooks/useDataStock";
import { useDispatch } from "react-redux";
import { updateStock } from "@/redux/reducer";
import MainButton from "../MainButton/MainButton";

const StockEditForm: React.FC<StockEditFormProps> = ({
  supply,
  onSubmit,
  onCancel,
  onImageChange,
}) => {
  const [updatedSupply, setUpdatedSupply] = useState<Supply>(supply);
  const { updateStocksStorage } = useDataStock();
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedSupply((prevSupply) => ({ ...prevSupply, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageChange(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(updatedSupply);
    dispatch(updateStock(updatedSupply));
    updateStocksStorage(updatedSupply);
    setUpdatedSupply(supply);
  };

  return (
    <div className="bg-white w-[80%] mx-auto p-6 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Supply</h2>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={updatedSupply.name}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          name="provider"
          placeholder="Provider"
          value={updatedSupply.provider}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={updatedSupply.stock}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={updatedSupply.price}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="px-4 py-2 border rounded-lg"
        />
        <div className="flex justify-around col-span-2">
          <MainButton text="Guardar" path="/dashboard/stock" />
          <button
            type="button"
            onClick={onCancel}
            className="w-32 p-2 flex justify-center border-footerColor border-2 rounded-md shadow-sm text-sm font-medium text-footerColor hover:bg-gray-100 focus:ring-offset-2"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default StockEditForm;
