"use client";

import { useRouter } from "next/navigation";
interface LandingButtonProps {
  text: string;
  path?: string;
}
const LandingButton: React.FC<LandingButtonProps> = ({ text, path }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    path && router.push(path);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        className="w-32 p-2 flex justify-center border-white border-2 rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-200 hover:text-gray-900 focus:ring-offset-2"
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </div>
  );
};
export default LandingButton;
