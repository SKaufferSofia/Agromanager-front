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
	const suplly = [
		{
			label: "Insumos",
			value: "Insumos",
			desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
		},
		{
			label: "Labores",
			value: "Labores",
			desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
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
				{suplly.map(({ label, value }) => (
					<Tab
						key={value}
						value={value}
						onClick={() => setActiveTab(value)}
						className={activeTab === value ? "text-white" : ""}
					>
						{label}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody>
				{suplly.map(({ value, desc }) => (
					<TabPanel key={value} value={value}>
						<div className="bg-white h-screen rounded-md">
							{desc}
						</div>
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	);
};

export default DetailSupplyLaborCard;
