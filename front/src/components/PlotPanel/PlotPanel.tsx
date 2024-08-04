import React, { useState } from "react";
import { IPlotsType, PlotPanelProps } from "@/interfaces/interfaces";
import PlotDetailCard from "./PlotDetailCard/PlotDetailCard";
import { useSelector } from "react-redux";
import { createPlot } from "@/lib/server/petitionPlots";
import { useDispatch } from "react-redux";
import { addPlot } from "@/redux/reducer";
import useDataPlot from "@/hooks/useDataPlot";
import { toast } from "sonner";
import Map from "../WeatherComponent/WeatherMapComponent";

const PlotPanel: React.FC<PlotPanelProps> = ({ plots, setPlots }) => {
	const dispatch = useDispatch();

	const { addPlotsStorage } = useDataPlot();

	const [cereal, setCereal] = useState("");
	const [surface, setSurface] = useState("");

	const userId = useSelector((state: any) => state.userData.id);
	const token = useSelector((state: any) => state.token);
	const latitude = useSelector((state: any) => state.latitude);
	const longitude = useSelector((state: any) => state.longitude);

	const handleCerealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCereal(event.target.value);
	};

	const handleSurfaceChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSurface(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!cereal || !surface) {
				toast.warning("Debes completar todos lo campos", {
				className: "bg-red-500 text-white text-lg ",
				duration: 3000,
			});
			return;
		}
		const newPlot = { cereal, surface, latitude, longitude };
		try {
			const createdPlot = await createPlot(
				newPlot,
				userId,
				token,
				(data) => {
					dispatch(addPlot(data));
					addPlotsStorage(data);
				}
			);
			if (createdPlot) {
				setPlots((prevPlots) => [...prevPlots, createdPlot]);
				setCereal("");
				setSurface("");
			}
		} catch (error) {
			toast.warning("Error al crear el lote", {
				className: "bg-red-500 text-white text-lg ",
				duration: 3000,
			});

		}
	};

	return (
		<div className="w-full max-w-screen-lg min-h-screen mx-auto p-4 flex flex-col">
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-start uppercase">
					Todos tus lotes
					<span className="poppins-thin"> En un solo lugar.</span>
				</h1>
				<h2 className="text-lg poppins-regular mt-10">
					Agregar un nuevo lote
				</h2>
				<form
					className="flex flex-col md:flex-row gap-4 mt-4"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col sm:flex-row sm:gap-4">
						<input
							type="text"
							className="py-2 px-4 border border-gray-300 rounded-sm shadow-sm"
							placeholder="Tipo de cereal"
							value={cereal}
							onChange={handleCerealChange}
						/>
						<input
							type="text"
							className="py-2 px-4 border border-gray-300 rounded-sm shadow-sm mt-2 sm:mt-0"
							placeholder="Superficie en Ha"
							value={surface}
							onChange={handleSurfaceChange}
						/>
					</div>
					<button
						type="submit"
						className="px-4 py-2 bg-blue-600 text-white rounded-lg"
					>
						Crear lote
					</button>
				</form>
				<Map />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
				{plots.map((plot: IPlotsType) => (
					<PlotDetailCard
						key={plot.id}
						id={plot.id}
						surface={plot.surface}
						cereal={plot.cereal}
						labors={plot.labors}
						supplies={plot.supplies}
					/>
				))}
			</div>
		</div>
	);
};

export default PlotPanel;
