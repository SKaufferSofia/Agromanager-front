"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";
import { updateLabors } from "@/redux/reducer";
import useDataPlot from "@/hooks/useDataPlot";
import { RootState } from "@/redux/store";
import { Labors } from "@/interfaces/interfaces";
import { toast } from "sonner";
import ErrorAlert from "../CustomsAlerts/ErrorAlert";
import { validateLaborInput } from "@/helpers/ValidateAddLabor";

interface AddLaborInputProps {
	plotId: string;
}

const AddLaborInput: React.FC<AddLaborInputProps> = ({ plotId }) => {
	const [name, setName] = useState("");
	const [contractor, setContractor] = useState("");
	const [price, setPrice] = useState("");
	const [surface, setSurface] = useState("");
	const token = useSelector((state: RootState) => state.token);
	const dispatch = useDispatch();
	const { updatePlotsStorage } = useDataPlot();
	const [showForm, setShowForm] = useState(false);

	const handleOpendModal = () => {
		setShowForm(true);
	};
	const handleCloseModal = () => {
		setShowForm(false);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const errors = validateLaborInput({ name, contractor, price, surface });

		if (errors.general) {
			toast(<ErrorAlert message={errors.general} />, {
				className: "bg-red-400 text-white",
				duration: 5000,
			});
			return;
		}

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
			const updatedLabors: Labors[] = response.data.labors;
			console.log(updatedLabors);

			dispatch(updateLabors({ plotId, labors: updatedLabors }));
			updatePlotsStorage(plotId, updatedLabors);
			toast.success("Labor added successfully", {
				className:
					"mt-20 text-white bg-footerColor font-semibold text-xl",
				duration: 3000,
			});
			setName("");
			setContractor("");
			setPrice("");
			setSurface("");
			setShowForm(false);
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				const axiosError = error.response.data.message;
				console.log(axiosError);
				toast(<ErrorAlert message={axiosError} />, {
					className: "bg-[#ffc402]",
					duration: 5000,
				});
			}
		}
	};

	return (
		<div>
			<div>
				<button
					onClick={handleOpendModal}
					className="w-[9rem] p-2 flex justify-center border-white border-2 rounded-md shadow-sm text-md font-medium text-white hover:bg-gray-200 hover:text-gray-900 focus:ring-offset-2"
				>
					Labores
				</button>
			</div>
			{showForm === true && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white w-[80%] h-[50%] max-w-lg p-6 rounded-md shadow-lg relative">
						<form className="flex-col" onSubmit={handleSubmit}>
							<h2 className="text-center font-semibold text-lg">
								Labores
							</h2>
							<div className="flex-1 mt-2 mx-2">
								<label className="block text-sm font-medium text-gray-700 ml-2">
									Nombre del Labor
								</label>
								<input
									type="text"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Nombre del labor"
									className="w-full px-4 py-2 text-sm border rounded-lg text-gray-700 font-medium justify-center border-gray-300  shadow-sm  bg-gray-100"
								/>
							</div>
							<div className="flex-1 mt-2 mx-2">
								<label className="block text-sm font-medium text-gray-700 ml-2">
									Contratista
								</label>
								<input
									type="text"
									name="contractor"
									value={contractor}
									onChange={(e) =>
										setContractor(e.target.value)
									}
									placeholder="Contratista"
									className="w-full px-4 py-2 text-sm border rounded-lg text-gray-700 font-medium justify-center border-gray-300  shadow-sm  bg-gray-100"
								/>
							</div>
							<div className="flex-1 mt-2 mx-2">
								<label className="block text-sm font-medium text-gray-700 ml-2">
									Precio
								</label>
								<input
									type="number"
									name="price"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									placeholder="Precio"
									className="w-full px-4 py-2 text-sm border rounded-lg text-gray-700 font-medium justify-center border-gray-300  shadow-sm  bg-gray-100"
								/>
							</div>
							<div className="flex-1 mt-2 mx-2">
								<label className="block text-sm font-medium text-gray-700 ml-2">
									Superficie trabajada
								</label>
								<input
									type="number"
									name="surface"
									value={surface}
									onChange={(e) => setSurface(e.target.value)}
									placeholder="Cantidad"
									className="w-full px-4 py-2 text-sm border rounded-lg text-gray-700 font-medium justify-center border-gray-300  shadow-sm  bg-gray-100"
								/>
							</div>
							<div className="flex justify-around">
								<div className="mt-5">
									<button
										type="submit"
										className="w-25 h-9 p-2 flex items-center justify-center  border-footerColor border-2 rounded-md shadow-sm text-md font-medium text-footerColor hover:bg-footerColor hover:text-white hover:ease-in-out focus:ring-offset-2"
									>
										Agregar
									</button>
								</div>
								<div className="mt-5">
									<button
										onClick={handleCloseModal}
										className="w-25 h-9 p-2 flex items-center justify-center  border-footerColor border-2 rounded-md shadow-sm text-md font-medium text-footerColor hover:bg-footerColor hover:text-white hover:ease-in-out focus:ring-offset-2"
									>
										Cancelar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default AddLaborInput;
