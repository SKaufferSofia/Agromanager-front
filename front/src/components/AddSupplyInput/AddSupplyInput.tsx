"use client";
import React, { useState } from "react";

const AddSupplyInput: React.FC = () => {
	// Demo Array used for Development, to be removed once
	// the component is completed with the fetch logic
	const [supplies, setSupplies] = useState([
		"firstCat",
		"secondCat",
		"thirdCat",
	]);

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
					>
						<option value="" disabled selected>
							Selecciona una categoría
						</option>
						{supplies.map((supply, index) => (
							<option key={index} value={supply}>
								{supply}
							</option>
						))}
					</select>
				</div>
				<div className="flex-1 mx-2">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						Nombre del insumo
					</label>
					<input
						type="text"
						name="plotId"
						placeholder="Nombre del insumo"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
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
