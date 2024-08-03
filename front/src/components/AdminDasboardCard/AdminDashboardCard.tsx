"use client";

import { editUserById, fetchAllUsers } from "@/lib/server/petitionAdminInfo";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUserForAdmin } from "@/interfaces/interfaces";
import { IUser } from "@/interfaces/interfacesUser";

const AdminDashboardCard = () => {
	const token = useSelector((state: any) => state.token);
	const [newArrayUsers, setNewArrayUsers] = useState<IUserForAdmin[]>([]);
	const [editUserData, setEditUserData] = useState<IUser>({
		name: "",
		surname: "",
		phone: "",
		placeName: "",
		email: "",
	});
	const [showForm, setShowForm] = useState(false);
	const [userToEdit, setUserToEdit] = useState<IUserForAdmin | null>(null);

	useEffect(() => {
		const getAllUsers = async () => {
			if (token) {
				try {
					const fetchedUsers = await fetchAllUsers(token);
					setNewArrayUsers(fetchedUsers);
				} catch (error) {
					console.error("Error fetching plots:", error);
				}
			}
		};
		getAllUsers();
	}, [token, showForm]);

	const handleOpenFormClick = (user: any) => {
		setShowForm(true);
		setUserToEdit(user);
	};

	const handleCancelButton = () => {
		setShowForm(false);
	};

	const handleNewUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setEditUserData((prevData: IUser) => ({
			...prevData,
			[name]: value,
		}));
	};
	const handleEditClick = async (
		userToEdit: IUserForAdmin | null,
		editUserData: IUser
	) => {
		if (token && editUserData && userToEdit) {
			try {
				const requestBody = {
					name: editUserData.name,
					surname: editUserData.surname,
					phone: editUserData.phone,
					placeName: editUserData.placeName,
					email: editUserData.email,
				};

				await editUserById(userToEdit.id, requestBody, token);

				setEditUserData({
					name: "",
					surname: "",
					phone: "",
					placeName: "",
					email: "",
				});

				alert(`Usuario editado correctamente:
        Nombre: ${requestBody.name} ${requestBody.surname}
        Teléfono: ${requestBody.phone}
        Establecimiento: ${requestBody.placeName}
        Email: ${requestBody.email}`);
				setShowForm(false);
			} catch (error) {
				console.error("Error updating user:", error);
			}
		} else {
			console.error("No token available for authentication");
		}
	};

	return (
		<div>
			<div className="bg-white shadow-md">
				<div className="flex font-bold p-4 border-b border-gray-200">
					<div className="flex-1">Nombre</div>
					<div className="flex-1">Apellido</div>
					<div className="flex-1">Contacto</div>
					<div className="flex-1">Establecimiento</div>
					<div className="flex-1">Activo</div>
				</div>
				{newArrayUsers &&
					newArrayUsers.map((user) => (
						<div
							className="flex p-4 border-b border-gray-200"
							key={user.id}
						>
							<div className="p-4 w-1/4">{user.name}</div>
							<div className="p-4 w-1/4">{user.surname}</div>
							<div className="p-4 w-1/4">{user.email}</div>
							<div className="p-4 w-1/4">{user.placeName}</div>
							<div className="p-4 w-1/4">
								{user.active ? "Si" : "No"}
							</div>
							<div>
								<button
									onClick={() => handleOpenFormClick(user)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="30"
										height="30"
										viewBox="0,0,300,150"
									>
										<g
											fill="#719a2d"
											fillRule="nonzero"
											stroke="none"
											strokeWidth="1"
											strokeLinecap="butt"
											strokeLinejoin="miter"
											strokeMiterlimit="10"
											strokeDasharray=""
											strokeDashoffset="0"
											fontFamily="none"
											fontWeight="none"
											fontSize="none"
											textAnchor="none"
										>
											<g transform="scale(4,4)">
												<path d="M39.086,17.914l7,7l-24.581,24.581l-9.201,4.412c-1.367,0.457 -2.668,-0.844 -2.211,-2.211l4.412,-9.201zM41.914,15.086l4.5,-4.5c0.781,-0.781 2.047,-0.781 2.828,0l4.172,4.172c0.781,0.781 0.781,2.047 0,2.828l-4.5,4.5z"></path>
											</g>
										</g>
									</svg>
								</button>
							</div>
						</div>
					))}
			</div>
			{showForm === true && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white w-[80%] max-w-lg p-6 rounded-md shadow-lg relative">
						<h3>Editar usuario</h3>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Nombre
							</label>
							<input
								type="text"
								name="name"
								value={editUserData.name}
								onChange={handleNewUserData}
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
								name="surname"
								value={editUserData.surname}
								onChange={handleNewUserData}
								placeholder="Apellido"
								className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Contacto
							</label>
							<input
								type="text"
								name="phone"
								value={editUserData.phone}
								onChange={handleNewUserData}
								placeholder="Contacto"
								className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Establecimiento
							</label>
							<input
								type="text"
								name="placeName"
								value={editUserData.placeName}
								onChange={handleNewUserData}
								placeholder="Establecimiento"
								className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={editUserData.email}
								onChange={handleNewUserData}
								placeholder="Email"
								className="p-2 w-full flex justify-center py-2 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
							/>
						</div>
						<div className="flex justify-around">
							<div>
								<button
									onClick={() =>
										handleEditClick(
											userToEdit,
											editUserData
										)
									}
									className="mt-2 p-2 bg-navbarColor text-white rounded"
								>
									EDITAR
								</button>
							</div>

							<button
								onClick={handleCancelButton}
								className="mt-2 p-2 bg-navbarColor text-white rounded"
							>
								CANCELAR
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminDashboardCard;
