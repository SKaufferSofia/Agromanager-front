"use client";
import React from "react";
import { validateRegister } from "@/helpers/validateRegister";
import { petitionRegister } from "@/lib/server/petitionUser";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useForm from "@/hooks/useForm";

const RegisterForm = () => {
	const router = useRouter();

	const {
		regiterData,
		errorRegister,
		setErrorRegister,
		setRegiterData,
		showPassword,
		setShowPassword,
		showConfirmPassword,
		setShowConfirmPassword,
	} = useForm();

	const handleOnClickShowPassword = () => setShowPassword(!showPassword);
	const handleOnClickShowConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setRegiterData({ ...regiterData, [name]: value });

		setErrorRegister(validateRegister({ ...regiterData, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (Object.keys(errorRegister).length === 0) {
			const registerSuccess = await petitionRegister(regiterData);
			if (registerSuccess) {
				router.push("/login");
			}
		} else {
			alert("complete todos los campos");
		}
	};

	return (
		<div className="p-8 w-full flex flex-col min-h-screen justify-center items-center">
			<div className="w-full max-w-md">
				<h2 className="text-4xl text-textColor font-semibold mb-4 text-center">
					Registrarse
				</h2>
				<h3 className="text-xl text-textColor font-semibold mb-4 text-center">
					Comienza con una prueba gratuita
				</h3>
				<form
					onSubmit={handleSubmit}
					className="space-y-5 flex flex-col h-full"
				>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Nombre
							{!regiterData.name && (
								<span className="text-red-500"> * </span>
							)}
						</label>
						<input
							type="text"
							name="name"
							value={regiterData.name}
							onChange={handleChange}
							placeholder="Nombre"
							className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Apellido
							{!regiterData.surname && (
								<span className="text-red-500"> * </span>
							)}
						</label>
						<input
							type="text"
							name="surname"
							value={regiterData.surname}
							onChange={handleChange}
							placeholder="Apellido"
							className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Teléfono
							{!regiterData.phone && (
								<span className="text-red-500"> * </span>
							)}
						</label>
						<input
							type="text"
							name="phone"
							value={regiterData.phone}
							onChange={handleChange}
							placeholder="Teléfono"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Establecimiento
							{!regiterData.placeName && (
								<span className="text-red-500"> * </span>
							)}
						</label>
						<input
							type="text"
							name="placeName"
							value={regiterData.placeName}
							onChange={handleChange}
							placeholder="Nombre del campo"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							E-mail
							{!regiterData.email && (
								<span className="text-red-500"> * </span>
							)}
						</label>
						<input
							type="text"
							name="email"
							value={regiterData.email}
							onChange={handleChange}
							placeholder="E-mail"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
						{errorRegister.email && (
							<p className="text-red-500 text-xs mt-1">
								{errorRegister.email}
							</p>
						)}
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Contraseña
							{!regiterData.password && (
								<span className="text-red-500"> * </span>
							)}
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								name="password"
								value={regiterData.password}
								onChange={handleChange}
								placeholder="Contraseña"
								className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
							/>
							<button
								type="button"
								onClick={handleOnClickShowPassword}
							>
								{showPassword ? (
									<FaEye
										size={17}
										className="absolute right-3 top-5 -translate-y-1/2 text-textGreen"
									/>
								) : (
									<FaEyeSlash
										size={17}
										className="absolute right-3 top-5 -translate-y-1/2  text-textColor"
									/>
								)}
							</button>
							<div className="-mt-4">
								{errorRegister.password && (
									<p className="text-red-500 text-xs font-medium">
										{errorRegister.password}
									</p>
								)}
							</div>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Confirmar contraseña
							{!regiterData.confirmPassword && (
								<span className="text-red-500"> * </span>
							)}
						</label>
						<div className="relative">
							<input
								type={showConfirmPassword ? "text" : "password"}
								name="confirmPassword"
								value={regiterData.confirmPassword}
								onChange={handleChange}
								placeholder="Confirmar contraseña"
								className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
							/>
							<button
								type="button"
								onClick={handleOnClickShowConfirmPassword}
							>
								{showConfirmPassword ? (
									<FaEye
										size={17}
										className="absolute right-3 top-5 -translate-y-1/2 text-textGreen"
									/>
								) : (
									<FaEyeSlash
										size={17}
										className="absolute right-3 top-5 -translate-y-1/2  text-textColor"
									/>
								)}
							</button>
							<div className="-mt-4">
								{errorRegister.confirmPassword && (
									<p className="text-red-500 text-xs font-medium">
										{errorRegister.confirmPassword}
									</p>
								)}
							</div>
						</div>
					</div>
					<div className="mt-5">
						{!regiterData.confirmPassword && (
							<p className=" text-sm text-red-500 font-medium ">
								{" "}
								(*) Todos los campos requeridos
							</p>
						)}
					</div>
					<div className="mt-auto flex justify-center">
						<button
							type="submit"
							className="w-32 p-2 flex justify-center border-footerColor border-2 rounded-md shadow-sm text-sm font-medium text-footerColor hover:bg-gray-200 focus:ring-offset-2"
						>
							REGISTRARSE
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
