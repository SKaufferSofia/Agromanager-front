import React from "react";

interface ICardData {
	title: string;
	dataContent: React.ReactNode;
}
const DataUserCard: React.FC<ICardData> = ({ dataContent, title }) => {
	return (
		<div className="border rounded-md shadow-md p-4 bg-white justify-around h-24 mb-4">
			<div className="flex flex-col">
				<div className="font-bold">{title}</div>
				<div>{dataContent}</div>
			</div>
		</div>
	);
};

export default DataUserCard;
