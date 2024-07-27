import React from "react";
import { ICreatePlot } from "@/interfaces/interfaces";
import AddSupplyInput from "@/components/AddSupplyInput/AddSupplyInput";
import AddLaborInput from "@/components/AddLaborInput/AddLaborInput";
import DetailSupplyLaborCard from "@/components/DetailSupplyLaborCard/DetailSupplyLaborCard";
import SideNavbar from "@/components/Navbar/sideNavbar";
import plots from "@/helpers/plotsArray";

const mockPlots: ICreatePlot = {
	id: 1,
	surface: "50",
	cereal: "Trigo",
	user: "123e4567-e89b-12d3-a456-426614174000",
};

const PlotDashboard: React.FC = () => {
	return (
		<div className=" w-screen h-full flex flex-col sm:flex-row">
			<div className="w-1/6 mt-24 h-min-screen  bg-sideNavbarColor bg-opacity-20 ">
				<SideNavbar plots={plots} />
			</div>
			<div className="mt-36 w-5/6 ">
				<h2 className="text-4xl font-semibold text-center mb-4">
					Lote {mockPlots.cereal}
				</h2>
				<div className="m-10 flex justify-around text-lg font-semibold">
					<p>Superficie: {mockPlots.surface} HA</p>
					<p>Cereal: {mockPlots.cereal}</p>
				</div>
				<div className="p-8">
					<h2 className="text-2xl font-semibold text-center mb-4">
						Labores
					</h2>
					<AddLaborInput />
					<h2 className="text-2xl font-semibold text-center mt-4 mb-4">
						Insumos
					</h2>
					<AddSupplyInput />
				</div>
				<div className=" bg-altBgColor">
					<DetailSupplyLaborCard />
				</div>
			</div>
		</div>
	);
};

export default PlotDashboard;
