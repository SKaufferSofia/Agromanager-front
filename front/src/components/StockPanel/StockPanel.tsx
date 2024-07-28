// StockPanel.tsx
"use client";
import React, { useEffect, useState } from "react";
import {
  Category,
  ISupplyEditForm,
  Measurement,
  StockPanelProps,
  Supply,
} from "@/interfaces/interfaces";
import CreateStockForm from "./CreateStockForm";
import {
  fetchSuppliesCategories,
  fetchSuppliesMeasurements,
  updateSupply,
  uploadImageSupply,
} from "@/lib/server/petitionStock";
import StockTable from "./StockTable";
import { useSelector } from "react-redux";

const StockPanel: React.FC<StockPanelProps> = ({ supplies }) => {
  const [editingSupply, setEditingSupply] = useState<Supply | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);

  const handleEditClick = (supply: Supply) => {
    setEditingSupply(supply);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImgFile(e.target.files[0]);
    }
  };

  // useEffect(() => {
  //   if (editingSupply) {
  //     console.log("Editing supply updated:", editingSupply);
  //   }
  // }, [editingSupply]);

  const supplyIdtest = "4d74dc51-101f-4e0c-83ed-48c384675914";
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingSupply((prevSupply) => {
      if (prevSupply) {
        return { ...prevSupply, [name]: value };
      }
      return null;
    });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSupply) return;

    try {
      if (imgFile) {
        const uploadResponse = await uploadImageSupply(
          imgFile,
          editingSupply.id
        );
        setEditingSupply(uploadResponse);
      }

      const updatedSupply = await updateSupply(
        editingSupply.id,
        editingSupply,
        token
      );
      return updatedSupply;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await fetchSuppliesCategories();
        setCategories(categoriesData);
      } catch (error) {
        setError("Failed to fetch categories.");
      }
    };

    const fetchMeasurements = async () => {
      try {
        const measurementsData = await fetchSuppliesMeasurements();
        setMeasurements(measurementsData);
      } catch (error) {
        setError("Failed to fetch measurements.");
      }
    };

    fetchCategories();
    fetchMeasurements();
  }, []);

  return (
    <div className="w-full max-w-full bgColor min-h-screen flex-col">
      <div className="w-3/4 mx-auto mt-8 mb-10">
        <CreateStockForm categories={categories} measurements={measurements} />

        {error && (
          <div className="p-4 bg-red-500 text-white rounded-lg mb-6">
            {error}
          </div>
        )}

        {editingSupply && (
          <div className="p-6 bgColor mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Edit Supply</h2>
            <form
              className="grid grid-cols-2 gap-4"
              onSubmit={handleEditSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={editingSupply.name}
                onChange={handleInputChange}
                className="px-4 py-2 border rounded-lg"
              />

              <input
                type="text"
                name="provider"
                placeholder="Provider"
                value={editingSupply.provider}
                onChange={handleInputChange}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="stock"
                placeholder="Stock"
                value={editingSupply.stock}
                onChange={handleInputChange}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="price"
                step="0.01"
                placeholder="Price"
                value={editingSupply.price}
                onChange={handleInputChange}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="px-4 py-2 border rounded-lg"
              />
              <button
                type="submit"
                className="col-span-2 px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Save
              </button>
            </form>
          </div>
        )}

        <StockTable supplies={supplies} handleEditClick={handleEditClick} />
      </div>
    </div>
  );
};

export default StockPanel;
