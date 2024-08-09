import React from "react";

interface ScrollableCardProps {
	title: string;
	content: React.ReactNode;
	titleColor: string;
}

const ScrollableCard: React.FC<ScrollableCardProps> = ({
	title,
	content,
	titleColor,
}) => {
	return (
		<div className="h-full bg-white  overflow-auto shadow-md rounded-md ">
			<div>
				<div
					className={`flex font-bold p-4 justify-center ${titleColor}  border-b border-gray-200`}
				>
					<div>{title}</div>
				</div>
				<div>{content}</div>
			</div>
		</div>
	);
};

export default ScrollableCard;
