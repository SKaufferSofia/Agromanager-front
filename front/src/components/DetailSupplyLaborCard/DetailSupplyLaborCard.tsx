"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";

interface DetailSupplyLaborCardProps {
	currentPlot: object;
}
const DetailSupplyLaborCard: React.FC<DetailSupplyLaborCardProps> = ({
	currentPlot,
}) => {
	const [activeTab, setActiveTab] = useState("Insumos");

	console.log(currentPlot);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await axios.get(
	// 				`${NEXT_PUBLIC_API_URL}/supplies/1`
	// 			);
	// 			console.log(res);
	// 		} catch (error) {
	// 			console.log("Error fetching:", error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	const labors = [
		{
			id: "987e4567-e89b-12d3-a456-426614174000",
			name: "Labor 1",
			contractor: "Contractor A",
			price: 500,
			surface: 100,
			plotId: "123e4567-e89b-12d3-a456-426614174012",
		},
		{
			id: "987e4567-e89b-12d3-a456-426614174001",
			name: "Labor 2",
			contractor: "Contractor B",
			price: 700,
			surface: 200,
			plotId: "123e4567-e89b-12d3-a456-426614174013",
		},
		{
			id: "987e4567-e89b-12d3-a456-426614174002",
			name: "Labor 3",
			contractor: "Contractor C",
			price: 900,
			surface: 300,
			plotId: "123e4567-e89b-12d3-a456-426614174014",
		},
	];

	const supplies = [
		{
			id: "123e4567-e89b-12d3-a456-426614174000",
			name: "Supply 1",
			provider: "Provider A",
			stock: 100,
			price: 200,
			categoryId: "123e4567-e89b-12d3-a456-426614174001",
			measurementId: "123e4567-e89b-12d3-a456-426614174002",
			userId: "123e4567-e89b-12d3-a456-426614174003",
		},
		{
			id: "123e4567-e89b-12d3-a456-426614174004",
			name: "Supply 2",
			provider: "Provider B",
			stock: 50,
			price: 150,
			categoryId: "123e4567-e89b-12d3-a456-426614174005",
			measurementId: "123e4567-e89b-12d3-a456-426614174006",
			userId: "123e4567-e89b-12d3-a456-426614174007",
		},
		{
			id: "123e4567-e89b-12d3-a456-426614174008",
			name: "Supply 3",
			provider: "Provider C",
			stock: 200,
			price: 300,
			categoryId: "123e4567-e89b-12d3-a456-426614174009",
			measurementId: "123e4567-e89b-12d3-a456-426614174010",
			userId: "123e4567-e89b-12d3-a456-426614174011",
		},
	];
	const calculateTotalPrice = (items: { price: number }[]): number => {
		return items.reduce((total, item) => total + item.price, 0);
	};

	const totalSupplyPrice = calculateTotalPrice(supplies);
	const totalLaborPrice = calculateTotalPrice(labors);
	return (
		<div className=" mt-8 ">
			<Tabs value={activeTab}>
				<TabsHeader
					className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
					indicatorProps={{
						className:
							"bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
					}}
				>
					<Tab
						value="Insumos"
						onClick={() => setActiveTab("Insumos")}
						className={`p-2 text-xl ${
							activeTab === "Insumos" ? "text-white" : ""
						}`}
					>
						Insumos
					</Tab>
					<Tab
						value="Labores"
						onClick={() => setActiveTab("Labores")}
						className={`p-2 text-xl ${
							activeTab === "Labores" ? "text-white" : ""
						}`}
					>
						Labores
					</Tab>
				</TabsHeader>
				{activeTab === "Insumos" && (
					<TabsBody className="bg-white h-4/5 w-10/12 rounded-md mx-auto mt-8 mb-10">
						<div className="flex font-bold p-4">
							<div className="flex-1">Nombre</div>
							<div className="flex-1">Proveedor</div>
							<div className="flex-1">Cantidad</div>
							<div className="flex-1">Precio</div>
						</div>
						{supplies.map((supply) => (
							<div className="flex p-4" key={supply.id}>
								<div className="flex-1">{supply.name}</div>
								<div className="flex-1">{supply.provider}</div>
								<div className="flex-1">{supply.stock}</div>
								<div className="flex-1">${supply.price}</div>
							</div>
						))}
						<div className="flex justify-end font-bold">
							<div className="px-6 py-4">Total Price</div>
							<div className="px-6 py-4">${totalSupplyPrice}</div>
						</div>
					</TabsBody>
				)}
				{activeTab === "Labores" && (
					<TabsBody className="bg-white h-4/5 w-10/12 rounded-md mx-auto mt-8 mb-10">
						<div className="flex font-bold flex-1 p-4">
							<div className="flex-1">Nombre</div>
							<div className="flex-1">Contratista</div>
							<div className="flex-1">Superficie</div>
							<div className="flex-1">Precio</div>
						</div>
						<div>
							{labors.map((labor) => (
								<div
									className="flex justify-around p-4"
									key={labor.id}
								>
									<div className="flex-1">{labor.name}</div>
									<div className="flex-1">
										{labor.contractor}
									</div>
									<div className="flex-1">
										{labor.surface}
									</div>
									<div className="flex-1">${labor.price}</div>
								</div>
							))}
							<div className="flex font-bold justify-end">
								<div className="px-6 py-4">Total Price</div>
								<div className="px-6 py-4">
									${totalLaborPrice}
								</div>
							</div>
						</div>
					</TabsBody>
				)}
			</Tabs>
		</div>
	);
};

export default DetailSupplyLaborCard;
