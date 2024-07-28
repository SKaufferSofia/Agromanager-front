"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

const AddSupplyInput: React.FC = () => {
	// Mock data for categories and supplies
	const [categories] = useState(["firstCat", "secondCat", "thirdCat"]);
	const [supplies] = useState([
		{ name: "firstSupply", category: "firstCat" },
		{ name: "secondSupply", category: "firstCat" },
		{ name: "thirdSupply", category: "secondCat" },
		{ name: "fourthSupply", category: "secondCat" },
		{ name: "fifthSupply", category: "thirdCat" },
	]);

	const [activeCategory, setActiveCategory] = useState("");
	const [filteredSupplies, setFilteredSupplies] = useState(supplies);

	// Redux selectors to get user ID and token
	const userId = useSelector((state: any) => state.userData.id);
	const token = useSelector((state: any) => state.token);

	console.log(token, userId);
	useEffect(() => {
		const getSuppliesByUser = async () => {
			try {
				const response = await axios.get(
					`${API_PUBLIC}/supplies/${userId}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const data = response.data;
				console.log("Supplies from API:", data);
			} catch (error) {
				console.error("Error fetching supplies:", error);
			}
		};

		getSuppliesByUser();
	}, [userId, token]);

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedCategory = event.target.value;
		setActiveCategory(selectedCategory);
		if (selectedCategory) {
			const suppliesByCategory = supplies.filter(
				(supply) => supply.category === selectedCategory
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
						value={activeCategory}
					>
						<option value="">Selecciona una categoría</option>
						{categories.map((category, index) => (
							<option key={index} value={category}>
								{category}
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
						{filteredSupplies.map((supply, index) => (
							<option key={index} value={supply.name}>
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
