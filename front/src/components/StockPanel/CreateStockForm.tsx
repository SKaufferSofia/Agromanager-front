"use client";
import React, { useState } from "react";
import { Category, Measurement, Supply } from "@/interfaces/interfaces";
import { createSupply, uploadImageSupply } from "@/lib/server/petitionStock";
import { useDispatch, useSelector } from "react-redux";
import useDataStock from "@/hooks/useDataStock";
import MainButton from "../MainButton/MainButton";
import { toast } from "sonner";
import { addStock } from "@/redux/reducer";

interface CreateStockFormProps {
	categories: Category[];
	measurements: Measurement[];
	onNewSupply: (supply: Supply) => void;
}

const CreateStockForm: React.FC<CreateStockFormProps> = ({
	categories,
	measurements,
	onNewSupply,
}) => {
  const [name, setName] = useState("");
  const [provider, setProvider] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [imgFile, setImgFile] = useState<File | string>("");
  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);
  const dispatch = useDispatch();
  //PROBANDO REDUCER Y LOCA LS.
  const { addStockStorage } = useDataStock();

	//AL SUBMIT CREATE FORM
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const newSupply = {
				name,
				provider,
				stock,
				price,
				category,
				measurement,
				imgUrl: "",
			};


      const newSupplyResponse = await createSupply(
        userId,
        newSupply,
        token,
        (data) => {
          dispatch(addStock(data));
          addStockStorage(data);
        }
      );
      const createdSupplyId = newSupplyResponse.id;
        toast.success("Insumo agregado", {
				className:
					"mt-20 text-white bg-footerColor font-semibold text-xl",
				duration: 3000,
			});
      if (imgFile) {
        const uploadResponse = await uploadImageSupply(
          imgFile,
          createdSupplyId,
          token
        );

				const updatedSupply = {
					...newSupplyResponse,
					imgUrl: uploadResponse.imgUrl,
				};
        onNewSupply(updatedSupply);
      } else {
        onNewSupply(newSupplyResponse);
      }

      setName("");
      setProvider("");
      setStock(0);
      setPrice(0);
      setCategory("");
      setImgFile("");
      setMeasurement("");
    } catch (error) {
      console.error("Error agregando un insumo:", error);
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImgFile(e.target.files[0]);
    }
  };

  return (
    <div className="mb-8 bgColor w-[80%] mx-auto ">
      <h2 className="text-4xl poppins-bold text-gray-800">
        Crea un Nuevo Insumo
      </h2>
      <form
        className="grid grid-cols-2 gap-4 mt-14 poppins-light"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded-lg text-gray-700 font-medium"
        />
        <input
          type="text"
          placeholder="Proveedor"
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="px-4 py-2 border rounded-lg text-gray-700 font-medium"
        />
        <div className="grid grid-cols-2 gap-2 bg-white rounded-lg">
          <label className="py-2 px-4 text-gray-700 font-normal">
            Cantidad
          </label>
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg text-gray-700 font-medium"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 bg-white rounded-lg">
          <label className="py-2 px-4 text-gray-700 font-normal">Precio</label>
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg text-gray-700 font-medium"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg text-gray-700 font-medium"
        >
          <option value="" className="text-gray-400">
            Selecciona Categoria
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          value={measurement}
          onChange={(e) => setMeasurement(e.target.value)}
          className="px-4 py-2 border rounded-lg text-gray-700 font-medium"
        >
          <option value="" className="text-gray-400">
            Selecciona Medida
          </option>
          {measurements.map((mes) => (
            <option key={mes.id} value={mes.id}>
              {mes.name}
            </option>
          ))}
        </select>
        <input type="file" onChange={handleImageChange} className="px-4 py-2" />
        <MainButton text="Crear Insumo" path="/dashboard/stock"></MainButton>
      </form>
    </div>
  );
};

export default CreateStockForm;
