import React from "react";

interface ScrollableCardProps {
	title: string;
	content: React.ReactNode;
}

const ScrollableCard: React.FC<ScrollableCardProps> = ({ title, content }) => {
	return (
		<div className="max-h-32">
			<div className="bg-white shadow-md">
				<div className="flex font-bold p-4 justify-between bg-altBgColor">
					<div className="flex-1 text-start">{title}</div>
				</div>
				<div className="flex p-4">{content}</div>
			</div>
		</div>
	);
};

export default ScrollableCard;
