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
import StockTable from "./StockTable";

import {
  fetchSuppliesCategories,
  fetchSuppliesMeasurements,
  updateSupply,
  uploadImageSupply,
} from "@/lib/server/petitionStock";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import StockEditForm from "./stockEditForm";
import { updateStock, editStock } from "@/redux/reducer";

import useDataStock from "@/hooks/useDataStock";

const StockPanel: React.FC<StockPanelProps> = ({ supplies }) => {
  const [editingSupply, setEditingSupply] = useState<Supply | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [suppliesUpdated, setSuppliesUpdated] = useState<Supply[]>(
    supplies || []
  );

  const token = useSelector((state: any) => state.token);
  const dispatch = useDispatch();
  const { updateStocksStorage } = useDataStock();

  const handleEditClick = (supply: Supply) => {
    setEditingSupply(supply);
  };

  const handleImageChange = (file: File | null) => {
    setImgFile(file);
  };

  const handleEditSubmit = async (updatedSupply: Supply) => {
    if (!editingSupply) return;

    try {
      let supplyToUpdate = { ...updatedSupply };
      if (imgFile) {
        const uploadResponse = await uploadImageSupply(
          imgFile,
          updatedSupply.id
        );
        supplyToUpdate = { ...supplyToUpdate, imgUrl: uploadResponse.imgUrl };
      }

      const updatedSupplyData = await updateSupply(
        updatedSupply.id,
        {
          ...updatedSupply,
          stock: Number(updatedSupply.stock),
          price: Number(updatedSupply.price),
          imgUrl: supplyToUpdate.imgUrl,
        },
        token
      );

      dispatch(updateStock(updatedSupplyData));
      updateStocksStorage(editingSupply);
      dispatch(editStock(editingSupply.id));

      setEditingSupply(null);
      setImgFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewSupply = (newSupply: Supply) => {
    setSuppliesUpdated((prevSupplies = []) => [...prevSupplies, newSupply]);
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

  useEffect(() => {
    setSuppliesUpdated(supplies);
  }, [supplies]);

  return (
    <div className="w-full max-w-full bgColor min-h-screen flex-col relative">
      <div className="w-[90%] mx-auto mt-8 mb-10 z-10">
        <div className={editingSupply ? "blurred" : ""}>
          <CreateStockForm
            categories={categories}
            measurements={measurements}
            onNewSupply={handleNewSupply}
          />
        </div>

        {error && (
          <div className="p-4 bg-red-500 text-white rounded-lg mb-6">
            {error}
          </div>
        )}

        {editingSupply && (
          <div className="absolute top-0 left-40  w-[75%] h-[50%] flex items-center justify-center z-20">
            <StockEditForm
              supply={editingSupply}
              onSubmit={handleEditSubmit}
              onCancel={() => setEditingSupply(null)}
              onImageChange={handleImageChange}
            />
          </div>
        )}

        <div className={editingSupply ? "blurred" : ""}>
          <StockTable
            supplies={suppliesUpdated}
            handleEditClick={handleEditClick}
          />
        </div>
      </div>
    </div>
  );
};

export default StockPanel;
