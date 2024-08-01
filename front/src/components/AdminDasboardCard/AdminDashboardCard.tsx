"use client";

import { fetchAllUsers } from "@/lib/server/petitionAdminInfo";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUser } from "@/interfaces/interfacesUser";

const AdminDashboardCard = () => {
	const token = useSelector((state: any) => state.token);
	const [newArrayUsers, setNewArrayUsers] = useState<IUser[]>([]);

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
	}, [token]);
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
					newArrayUsers.map((user, index) => (
						<div
							className="flex p-4 border-b border-gray-200"
							key={index}
						>
							<div className="p-4 w-1/4">{user.name}</div>
							<div className="p-4 w-1/4">{user.surname}</div>
							<div className="p-4 w-1/4">{user.email}</div>
							<div className="p-4 w-1/4">{user.placeName}</div>
							<div className="p-4 w-1/4">
								{user.active ? "Si" : "No"}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default AdminDashboardCard;
