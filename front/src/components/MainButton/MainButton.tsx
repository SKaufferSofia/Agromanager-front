"use client";

import { useRouter } from "next/navigation";
interface MainButtonProps {
	text: string;
	path: string;
}
const MainButton: React.FC<MainButtonProps> = ({ text, path }) => {
	const router = useRouter();

	const handleButtonClick = () => {
		router.push(path);
	};
	return (
		<div className="flex items-center justify-center">
			<button
				className="w-32 p-2 flex justify-center border-[#70823E] border-2 rounded-md shadow-sm text-sm font-medium text-[#70823E] bg-white hover:bg-gray-100 focus:ring-offset-2"
				onClick={handleButtonClick}
			>
				{text}
			</button>
		</div>
	);
};
export default MainButton;
