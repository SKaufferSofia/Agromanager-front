"use client";

import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";

const DetailSupplyLaborCard = () => {
	const [activeTab, setActiveTab] = React.useState("html");
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
	return (
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
					className={activeTab === "Insumos" ? "text-white" : ""}
				>
					Insumos
				</Tab>
				<Tab
					value="Labores"
					onClick={() => setActiveTab("Labores")}
					className={activeTab === "Labores" ? "text-white" : ""}
				>
					Labores
				</Tab>
			</TabsHeader>
			{activeTab === "Insumos" && (
				<TabsBody className="bg-white h-4/5 w-10/12 rounded-md mx-auto mt-8">
					<div className="p-4">
						{supplies.map((supply) => (
							<div className="flex" key={supply.id}>
								<div className="px-6 py-4 whitespace-nowrap">
									{supply.name}
								</div>
								<div className="px-6 py-4 whitespace-nowrap">
									{supply.provider}
								</div>
								<div className="px-6 py-4 whitespace-nowrap">
									{supply.stock}
								</div>
								<div className="px-6 py-4 whitespace-nowrap">
									{supply.price}
								</div>
							</div>
						))}
					</div>
				</TabsBody>
			)}
			{activeTab === "Labores" && (
				<TabsBody className="bg-white h-4/5 w-10/12 rounded-md mx-auto mt-8">
					<div className="p-4">
						{labors.map((labor) => (
							<div className="flex" key={labor.id}>
								<div className="px-6 py-4 whitespace-nowrap">
									{labor.name}
								</div>
								<div className="px-6 py-4 whitespace-nowrap">
									{labor.contractor}
								</div>
								<div className="px-6 py-4 whitespace-nowrap">
									{labor.price}
								</div>
								<div className="px-6 py-4 whitespace-nowrap">
									{labor.surface}
								</div>
							</div>
						))}
					</div>
				</TabsBody>
			)}
		</Tabs>
	);
};

export default DetailSupplyLaborCard;
