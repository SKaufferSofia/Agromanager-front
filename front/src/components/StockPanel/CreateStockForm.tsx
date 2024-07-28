import React, { useState } from "react";
import {
  Category,
  CreateStockFormProps,
  Measurement,
} from "@/interfaces/interfaces";
import { createSupply } from "@/lib/server/petitionStock";
import { useSelector } from "react-redux";
import { uploadImageSupply } from "@/lib/server/petitionStock";

const CreateStockForm: React.FC<CreateStockFormProps> = ({
  categories,
  measurements,
}) => {
  const [name, setName] = useState("");
  const [provider, setProvider] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [measurement, setMeasurement] = useState("");
  const userId = useSelector((state: any) => state.userData.id);
  const token = useSelector((state: any) => state.token);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImgFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Crear el suministro sin imagen
      const newSupply = {
        name,
        provider,
        stock,
        price,
        category,
        measurement,
        imgUrl: "", // imgUrl estará vacío al principio
      };

      const newSupplyResponse = await createSupply(userId, newSupply, token);
      const createdSupplyId = newSupplyResponse.id;
      console.log("New Supply Response:", newSupplyResponse);
      console.log("Supply ID:", createdSupplyId);

      // Subir la imagen si existe
      if (imgFile) {
        const uploadResponse = await uploadImageSupply(
          imgFile,
          createdSupplyId
        );
        console.log("Upload Response:", uploadResponse);

        // Actualizar el suministro con la URL de la imagen
        const updatedSupply = {
          ...newSupplyResponse,
          imgUrl: uploadResponse.imgUrl, // imgUrl obtenido después de la carga
        };

        // Aquí deberías enviar una solicitud para actualizar el suministro con la URL de la imagen
        // Si tu API ya actualiza el suministro automáticamente, este paso puede ser opcional
        console.log("Updated Supply with Image URL:", updatedSupply);
      }

      // Restablecer el estado
      setName("");
      setProvider("");
      setStock(0);
      setPrice(0);
      setCategory("");
      setImgFile(null);
      setMeasurement("");
    } catch (error) {
      console.error("Error adding new stock:", error);
    }
  };

  return (
    <div className="mb-8 bgColor">
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800">Add New Stock</h2>
        <p className="text-gray-600">
          Fill out the form to add a new stock item.
        </p>
      </div>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Provider"
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="px-4 py-2 border rounded-lg"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          value={measurement}
          onChange={(e) => setMeasurement(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Select Measurement</option>
          {measurements.map((mes) => (
            <option key={mes.id} value={mes.id}>
              {mes.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Add Stock
        </button>
      </form>
    </div>
  );
};

export default CreateStockForm;
