import React from "react";
import { PlotDetailCardProps } from "@/interfaces/interfaces";
import Link from "next/link";

const PlotDetailCard: React.FC<PlotDetailCardProps> = ({
	id,
	surface,
	cereal,
	labors,
	supplies,
}) => {
	const suppliesCount = supplies?.length || 0;

	// console.log(id, surface, cereal, labors, supplies);

	return (
		<div
			className="w-full h-auto flex flex-col p-6 border border-gray-300 bg-white rounded-lg
                 transition-shadow duration-300 ease-in-out 
                  hover:shadow-custom-green hover:bg-navbarColor"
		>
			<div className="flex justify-between">
				<p className="poppins-bold uppercase">Lote: {cereal}</p>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="20"
						height="20"
						viewBox="0 0 50 50"
					>
						<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
					</svg>
				</button>
			</div>
			<hr className="my-2 border-gray-500" />
			<p className="py-2">
				<span className="poppins-medium">Superficie: </span> {surface}{" "}
				hectáreas
			</p>
			<div className="flex justify-between">
				<p className="py-2">
					<span className="poppins-medium">
						Cantidad de labores:{" "}
					</span>{" "}
					{labors?.length || "No hay labores"}
				</p>
				<Link href={`/dashboard/plots/${id}`} className="py-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						fill="none"
					>
						<circle
							cx="12"
							cy="12"
							r="10"
							stroke="#1C274C"
							strokeWidth="1.5"
						/>
						<path
							d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
							stroke="#1C274C"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				</Link>
			</div>
			<div className="flex justify-between">
				<p className="py-2">
					<span className="poppins-medium">Cantidad insumos: </span>
					{supplies && supplies.length > 0 ? (
						<span>{suppliesCount}</span>
					) : (
						"No hay insumos"
					)}
				</p>
				<Link href={`/dashboard/plots/${id}`} className="py-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						fill="none"
					>
						<circle
							cx="12"
							cy="12"
							r="10"
							stroke="#1C274C"
							strokeWidth="1.5"
						/>
						<path
							d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
							stroke="#1C274C"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default PlotDetailCard;
