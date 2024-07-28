"use client";

import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";

interface AddLaborInputProps {
	plotId: string;
}

const AddLaborInput: React.FC<AddLaborInputProps> = ({ plotId }) => {
	const [name, setName] = useState("");
	const [contractor, setContractor] = useState("");
	const [price, setPrice] = useState("");
	const [surface, setSurface] = useState("");
	const token = useSelector((state: any) => state.token);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				`${NEXT_PUBLIC_API_URL}/plots/addLabor`,
				{
					labor: {
						name,
						contractor,
						price: parseFloat(price),
						surface: parseFloat(surface),
					},
					plotId: plotId,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			console.log(response.data);
		} catch (error) {
			console.error("Error creating labor:", error);
		}
	};
	return (
		<div>
			<form className="flex" onSubmit={handleSubmit}>
				<div className="flex-1 mx-5">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						Nombre del Labor
					</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Nombre del labor"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
				</div>
				<div className="flex-1 mx-2">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						Contratista
					</label>
					<input
						type="text"
						name="contractor"
						value={contractor}
						onChange={(e) => setContractor(e.target.value)}
						placeholder="Contratista"
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
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						placeholder="Precio"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
				</div>
				<div className="flex-1 mx-2">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						Superficie
					</label>
					<input
						type="number"
						name="surface"
						value={surface}
						onChange={(e) => setSurface(e.target.value)}
						placeholder="Cantidad"
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

export default AddLaborInput;
