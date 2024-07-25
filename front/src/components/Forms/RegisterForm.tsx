const RegisterForm = () => {
	return (
		<div className="p-8 w-full flex flex-col min-h-screen justify-center items-center">
			<div className="w-full max-w-md">
				<h2 className="text-4xl text-textColor font-semibold mb-4 text-center">
					Registrarse
				</h2>
				<h3 className="text-xl text-textColor font-semibold mb-4 text-center">
					Comienza con una prueba gratuita
				</h3>
				<form className="space-y-5 flex flex-col h-full">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Nombre
						</label>
						<input
							type="text"
							name="name"
							placeholder="Nombre"
							className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Apellido
						</label>
						<input
							type="text"
							name="lastname"
							placeholder="Apellido"
							className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Teléfono
						</label>
						<input
							type="text"
							name="phone"
							placeholder="Teléfono"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Establecimiento
						</label>
						<input
							type="text"
							name="name"
							placeholder="Nombre del campo"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							E-mail
						</label>
						<input
							type="text"
							name="email"
							placeholder="E-mail"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Contraseña
						</label>
						<input
							type="password"
							name="password"
							placeholder="Contraseña"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Confirmar contraseña
						</label>
						<input
							type="password"
							name="password"
							placeholder="Confirmar contraseña"
							className="p-2 w-full flex justify-center border border-gray-300 rounded-sm shadow-sm sm:text-sm"
						/>
					</div>
					<div className="mt-auto flex justify-center">
						<button className="w-32 p-2 flex justify-center border-footerColor border-2 rounded-md shadow-sm text-sm font-medium text-footerColor hover:bg-gray-200 focus:ring-offset-2">
							SIGUIENTE
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
