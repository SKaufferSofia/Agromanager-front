import React from "react";

interface ICardData {
	title: string;
	dataContent: React.ReactNode;
}
const DataUserCard: React.FC<ICardData> = ({ dataContent, title }) => {
	return (
		<div className="border rounded-md shadow-md p-4 bg-white justify-around h-auto mb-8">
			<div className="flex flex-col p-2 ">
				<div className="font-bold text-2xl text-center">
					{dataContent}
				</div>
				<div className="font-ligth text-center">{title}</div>
			</div>
		</div>
	);
};

export default DataUserCard;
