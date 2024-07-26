"use client";

import React from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";

const DetailSupplyLaborCard = () => {
	const [activeTab, setActiveTab] = React.useState("html");

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
			<TabsBody className="bg-white h-screen rounded-md">
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
			</TabsBody>
		</Tabs>
	);
};

export default DetailSupplyLaborCard;
