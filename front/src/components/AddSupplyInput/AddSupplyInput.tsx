import React from "react";

const AddSupplyInput: React.FC = () => {
	return (
		<div>
			<form className="flex justify-around">
				<div className="flex-1 mx-2">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						Proveedor
					</label>
					<select
						name="provider"
						className="p-2 w-full border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					>
						<option value="">Seleccione una proveedor</option>
						<option value="insumo1">Proveedor 1</option>
						<option value="insumo2">Proveedor 2</option>
						<option value="insumo3">Proveedor 3</option>
					</select>
				</div>
				<div className="flex-1 mx-2">
					<label className="block text-sm font-medium text-gray-700 ml-2">
						Nombre del insumo
					</label>
					<select
						name="name"
						className="p-2 w-full border border-gray-300 rounded-sm shadow-sm sm:text-sm"
					>
						<option value="">Seleccione un insumo</option>
						<option value="insumo1">Insumo 1</option>
						<option value="insumo2">Insumo 2</option>
						<option value="insumo3">Insumo 3</option>
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
						name="Price"
						placeholder="Precio"
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

export default AddSupplyInput;
