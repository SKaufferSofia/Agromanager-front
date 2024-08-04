"use client";
import React, { useState } from "react";
import { Category, Measurement, Supply } from "@/interfaces/interfaces";
import { createSupply, uploadImageSupply } from "@/lib/server/petitionStock";
import { useSelector } from "react-redux";
import useDataStock from "@/hooks/useDataStock";
import MainButton from "../MainButton/MainButton";
import { toast } from "sonner";

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
	//PROBANDO REDUCER Y LOCA LS.
	const { saveStockStorage } = useDataStock();

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
				token
			);
			const createdSupplyId = newSupplyResponse.id;
			toast.success("Insumo agregado", {
				className:
					"mt-20 text-white bg-footerColor font-semibold text-xl",
				duration: 3000,
			});
			console.log("New Supply Response:", newSupplyResponse);

			if (imgFile) {
				const uploadResponse = await uploadImageSupply(
					imgFile,
					createdSupplyId
				);

				const updatedSupply = {
					...newSupplyResponse,
					imgUrl: uploadResponse.imgUrl,
				};

				onNewSupply(updatedSupply);
				saveStockStorage([updatedSupply]);
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
			toast.warning("Debes completar todos lo campos", {
				className: "bg-red-500 text-white text-lg ",
				duration: 3000,
			});
		}
	};
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImgFile(e.target.files[0]);
		}
	};
	return (
		<div className="mb-8 bgColor w-[80%] mx-auto ">
			<h2 className="text-xl font-semibold text-gray-800">
				Create New Supply
			</h2>
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
					placeholder="Price"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
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
				<input
					type="file"
					onChange={handleImageChange}
					className="px-4 py-2 border rounded-lg"
				/>
				<MainButton
					text="Crear Stock"
					path="/dashboard/stock"
				></MainButton>
			</form>
		</div>
	);
};

export default CreateStockForm;
