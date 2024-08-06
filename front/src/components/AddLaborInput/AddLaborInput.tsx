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
						className="w-25 h-9 p-2 flex items-center justify-center  border-footerColor border-2 rounded-md shadow-sm text-md font-medium text-footerColor hover:bg-footerColor hover:text-white hover:ease-in-out focus:ring-offset-2"
					>
						Agregar
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddLaborInput;
