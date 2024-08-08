"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";
import { Category, Supply, SupplyApplied } from "@/interfaces/interfaces";
import { RootState } from "@/redux/store";
import { saveStock, updateSupplies } from "@/redux/reducer";
import useDataPlot from "@/hooks/useDataPlot";
import { toast } from "sonner";
import { fetchSupplies } from "@/lib/server/petitionStock";
import useDataStock from "@/hooks/useDataStock";
import { validateSupplyInput } from "@/helpers/ValidateAddSupply";
import ErrorAlert from "../CustomsAlerts/ErrorAlert";

interface AddSupplyInputProps {
  plotId: string;
}

const AddSupplyInput: React.FC<AddSupplyInputProps> = ({ plotId }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [supplies, setSupplies] = useState<Supply[]>([]);
  const [filteredSupplies, setFilteredSupplies] = useState<Supply[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [supplyId, setSupplyId] = useState("");
  const [quantity, setQuantity] = useState("");
  const userId = useSelector((state: RootState) => state.userData.id);
  const token = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();
  const { saveStockStorage } = useDataStock();
  const { updatePlotsStorageWithSupplies, addSuppliesAppliedStorage } =
    useDataPlot();

  useEffect(() => {
    const getSuppliesByUser = async () => {
      if (userId && token) {
        try {
          const response = await fetchSupplies(userId, token, (supplies) => {
            dispatch(saveStock(supplies));
            saveStockStorage(supplies);
          });
          setSupplies(response);

          const uniqueCategories = Array.from(
            new Set(response.map((supply: Supply) => supply.category.id))
          ).map(
            (id) =>
              response.find((supply: Supply) => supply.category.id === id)
                ?.category
          ) as Category[];
          setCategories(uniqueCategories);
        } catch (error) {
          console.error("Error fetching supplies:", error);
        }
      }
    };
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validateSupplyInput({ supplyId, quantity });

    if (errors.general) {
      toast(<ErrorAlert message={errors.general} />, {
        className: "bg-red-500 text-white",
        duration: 3000,
      });
      return;
    }

    try {
      const response = await axios.post(
        `${NEXT_PUBLIC_API_URL}/plots/addSupply`,
        {
          supplyId,
          plotId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let updatedSuppliesArray: SupplyApplied[] = [];

      updatedSuppliesArray = [...updatedSuppliesArray, response.data];
      dispatch(updateSupplies(updatedSuppliesArray));
      updatePlotsStorageWithSupplies(plotId, updatedSuppliesArray);
      // addSuppliesAppliedStorage(response.data);

      // console.log("Updated supplies:", updatedSupplies);

      // dispatch(updateSupplies(response.data));
      // updatePlotsStorageWithSupplies(plotId, response.data);
      // console.log("Updated supplies:", updatedSupplies);

      // dispatch(updateSupplies({ plotId, supplies: updatedSupplies }));
      toast.success("Insumo Agregado", {
        className: "mt-20 text-white bg-footerColor font-semibold text-xl",
        duration: 2000,
      });
      setActiveCategory(null);
      setQuantity("");
      setFilteredSupplies([]);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const axiosError = error.response.data.message;
        toast(<ErrorAlert message={axiosError} />, {
          className: "bg-[#ffc402]",
          duration: 5000,
        });
      }
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <div className="flex-1 mx-5">
          <label className="block text-sm font-medium text-gray-700 ml-2">
            Categoría
          </label>
          <select
            name="category"
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
            name="supply"
            className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
            onChange={(e) => setSupplyId(e.target.value)}
            value={supplyId}
          >
            <option value="">Selecciona un insumo</option>
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
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Cantidad"
            className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-25 h-9 p-2 flex items-center justify-center  border-footerColor border-2 rounded-md shadow-sm text-md font-medium text-footerColor hover:bg-footerColor hover:text-white hover:ease-in-out focus:ring-offset-2"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplyInput;
