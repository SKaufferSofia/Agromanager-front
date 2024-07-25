import React from "react";

const AddSupplyInput: React.FC = () => {
	return (
		<div>
			<form className="flex justify-around">
				<div>
					<label className="block text-sm font-medium text-gray-700">
						ID del insumo
					</label>
					<input
						type="text"
						name="supplyId"
						placeholder="ID del insumo"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						ID del lote
					</label>
					<input
						type="text"
						name="plotId"
						placeholder="ID del lote"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Cantidad
					</label>
					<input
						type="number"
						name="quantity"
						placeholder="Cantidad"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddSupplyInput;
