import React from "react";
import RegisterForm from "@/components/Forms/RegisterForm";
import Image from "next/image";
import image1 from "@/assets/register-image.png";

const Register: React.FC = () => {
	return (
		<div className="flex w-full">
			<div className="w-1/2 flex justify-center items-center">
				<RegisterForm />
			</div>
			<div className="hidden sm:flex w-full sm:w-1/2 justify-center items-center">
				<Image
					src={image1}
					alt="scapeland-image"
					className="w-full h-full object-cover"
					priority={true}
				/>
			</div>
		</div>
	);
};

export default Register;
