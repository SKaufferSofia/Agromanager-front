"use client";
import React, { useEffect, useState } from "react";
import {
  Category,
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
import { updateStock, edit } from "@/redux/reducer";

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

  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);

  //PROBANDO REDUCER Y LOCAL.S

  const dispatch = useDispatch();
  const { updateStocksStorage } = useDataStock();

  //AL EDITO FORM
  const handleEditClick = (supply: Supply) => {
    setEditingSupply(supply);
  };

  //AL EDIT FORM
  const handleImageChange = (file: File | null) => {
    setImgFile(file);
  };

  //AL SUBMIT EDIT FORM
  const handleEditSubmit = async (updatedSupply: Supply) => {
    if (!editingSupply) return;

    try {
      if (imgFile) {
        const uploadResponse = await uploadImageSupply(
          imgFile,
          updatedSupply.id
        );
        updatedSupply.imgUrl = uploadResponse.imgUrl;
      }

      const updatedSupplyData = await updateSupply(
        updatedSupply.id,
        updatedSupply,
        token
      );

      console.log("Updated Supply:", updatedSupplyData);

      dispatch(updateStock(updatedSupplyData));
      updateStocksStorage(updatedSupplyData);
      console.log(editingSupply.id);
      dispatch(edit(editingSupply.id));

      setEditingSupply(null);
      setImgFile(null);
      //window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //AL CREATE STOCK
  const handleNewSupply = (newSupply: Supply) => {
    setSuppliesUpdated((prevSupplies = []) => [...prevSupplies, newSupply]);
  };

  //PIDO LAS CATEGORIAS Y MEDIDAS
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
    <div className="w-full max-w-full bgColor min-h-screen flex-col">
      <div className="w-[90%] mx-auto mt-8 mb-10">
        <CreateStockForm
          categories={categories}
          measurements={measurements}
          onNewSupply={handleNewSupply}
        />

        {error && (
          <div className="p-4 bg-red-500 text-white rounded-lg mb-6">
            {error}
          </div>
        )}

        {editingSupply && (
          <StockEditForm
            supply={editingSupply}
            onSubmit={handleEditSubmit}
            onCancel={() => setEditingSupply(null)}
            onImageChange={handleImageChange}
          />
        )}

        <StockTable
          supplies={suppliesUpdated}
          handleEditClick={handleEditClick}
        />
      </div>
    </div>
  );
};

export default StockPanel;
