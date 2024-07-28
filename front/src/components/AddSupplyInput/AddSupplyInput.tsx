"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";
import { Category, Supply } from "@/interfaces/interfaces";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

const AddSupplyInput: React.FC = () => {
  // Mock data for categories and supplies
  const [categories, setCategories] = useState<Category[]>([]);
  const [supplies, setSupplies] = useState<Supply[]>([]);
  const [filteredSupplies, setFilteredSupplies] = useState<Supply[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  // Redux selectors to get user ID and token
  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);

  useEffect(() => {
    const getSuppliesByUser = async () => {
      if (userId && token) {
        try {
          const response = await axios.get(`${API_PUBLIC}/supplies/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = response.data;

          setSupplies(data);
          setCategories(data.map((supply: Supply) => supply.category));
        } catch (error) {
          console.error("Error fetching supplies:", error);
        }
      }
    };

    // TODO: Once The add/fetch logic is completed, I'll add the category detection logic here

    getSuppliesByUser();
  }, [userId, token]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategoryId = event.target.value;
    const selectedCategory =
      categories.find((category) => category.id === selectedCategoryId) || null;
    setActiveCategory(selectedCategory);
    if (selectedCategory) {
      const suppliesByCategory = supplies.filter(
        (supply) => supply.category.id === selectedCategory.id
      );
      setFilteredSupplies(suppliesByCategory);
    } else {
      setFilteredSupplies(supplies);
    }
  };

  return (
    <div>
      <form className="flex">
        <div className="flex-1 mx-5">
          <label className="block text-sm font-medium text-gray-700 ml-2">
            Categoría
          </label>
          <select
            name="supplyId"
            className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
            onChange={handleCategoryChange}
            value={activeCategory ? activeCategory.id : ""}
          >
            <option value="">Selecciona una categoría</option>
            {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex-1 mx-2">
          <label className="block text-sm font-medium text-gray-700 ml-2">
            Nombre del insumo
          </label>
          <select
            name="plotId"
            className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
          >
            <option value="" disabled>
              Selecciona un insumo
            </option>
            {filteredSupplies &&
              filteredSupplies.map((supply) => (
                <option key={supply.id} value={supply.id}>
                  {supply.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex-1 mx-2">
          <label className="block text-sm font-medium text-gray-700 ml-2">
            Cantidad
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Cantidad"
            className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex-1 mx-2">
          <label className="block text-sm font-medium text-gray-700 ml-2">
            Precio
          </label>
          <input
            type="number"
            name="price"
            placeholder="Precio"
            className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-25 h-9 p-2 flex items-center justify-center border-footerColor border-2 rounded-md shadow-sm text-sm font-medium text-footerColor hover:bg-gray-100 focus:ring-offset-2"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplyInput;
