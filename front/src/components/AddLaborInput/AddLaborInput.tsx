import React from "react";

const AddLaborInput: React.FC = () => {
	return (
		<div>
			<form className="flex justify-around">
				<div className="w-1/4 mx-2">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						Nombre del Labor
					</label>
					<input
						type="text"
						name="supplyId"
						placeholder="ID del insumo"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
				</div>
				<div className="w-1/4 mx-2">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						ID del lote
					</label>
					<input
						type="text"
						name="plotId"
						placeholder="ID del lote"
						className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					/>
				</div>
				<div className="w-1/4 mx-2">
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
				<div className="mt-5">
					<button
						type="submit"
						className="w-25 h-10 p-2 flex justify-center border-footerColor border-2 rounded-md shadow-sm text-sm font-medium text-footerColor hover:bg-gray-100 focus:ring-offset-2"
					>
						Agregar
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddLaborInput;
