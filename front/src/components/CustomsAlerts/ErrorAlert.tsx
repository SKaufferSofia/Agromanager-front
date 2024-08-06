import React from "react";
import axios from "axios";

interface ErrorType {
	message: string;
}

const ErrorAlert: React.FC<{ message: string }> = ({ message }) => {
	return (
		<div className="flex items-center">
			<div className="p-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="25"
					height="25"
				>
					<path
						fillRule="evenodd"
						d="M12 2a1 1 0 00-.894.553l-9 17A1 1 0 003 21h18a1 1 0 00.894-1.447l-9-17A1 1 0 0012 2zm0 15a1 1 0 110 2 1 1 0 010-2zm0-8a1 1 0 01.993.883L13 10v4a1 1 0 01-1.993.117L11 14v-4a1 1 0 011-1z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div>
				<span>{message}</span>
			</div>
		</div>
	);
};

export default ErrorAlert;
