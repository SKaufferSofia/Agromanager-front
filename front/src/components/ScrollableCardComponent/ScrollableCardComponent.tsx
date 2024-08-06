import React from "react";

interface ScrollableCardProps {
	title: string;
	content: React.ReactNode;
}

const ScrollableCard: React.FC<ScrollableCardProps> = ({ title, content }) => {
	return (
		<div className="h-64 bg-white  overflow-auto shadow-md">
			<div>
				<div className="flex font-bold p-4 justify-center bg-altBgColor">
					<div>{title}</div>
				</div>
				<div>{content}</div>
			</div>
		</div>
	);
};

export default ScrollableCard;
