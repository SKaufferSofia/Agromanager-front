import React from "react";

interface CircularProgressProps {
	percentage: number;
	size?: number;
	strokeWidth?: number;
	color?: string;
	title: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
	percentage,
	size = 200,
	strokeWidth = 20,
	color = "navbarColor",
	title,
}) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * 2 * Math.PI;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<div className="flex border rounded-md shadow-md p-4 bg-white h-auto ml-10">
			<div className="font-bold">{title}</div>
			<div className="relative" style={{ width: size, height: size }}>
				<svg
					width={size}
					height={size}
					className="transform -rotate-90"
				>
					<circle
						className="text-gray-200"
						stroke="currentColor"
						fill="none"
						cx={size / 2}
						cy={size / 2}
						r={radius}
						strokeWidth={strokeWidth}
					/>
					<circle
						className={`text-${color} transition-all duration-500`}
						stroke="currentColor"
						fill="none"
						cx={size / 2}
						cy={size / 2}
						r={radius}
						strokeWidth={strokeWidth}
						strokeDasharray={circumference}
						strokeDashoffset={offset}
					/>
				</svg>
				<div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">
					{percentage}%
				</div>
			</div>
		</div>
	);
};

export default CircularProgress;
