import React from "react";
import { ICreatePlot } from "@/interfaces/interfaces";

const mockPlots: ICreatePlot = {
	id: 1,
	surface: "50",
	cereal: "Trigo",
	user: "123e4567-e89b-12d3-a456-426614174000",
};

const PlotDashboard: React.FC = () => {
	return (
		<div className="h-screen flex justify-center">
			<div className="p-24">
				<h2 className="text-4xl font-semibold text-center mb-4">
					Lote {mockPlots.cereal}
				</h2>
				<div className="m-10 flex ">
					<p>Superficie: {mockPlots.surface} HA</p>
					<p>Cereal: {mockPlots.cereal}</p>
				</div>
			</div>
		</div>
	);
};

export default PlotDashboard;
