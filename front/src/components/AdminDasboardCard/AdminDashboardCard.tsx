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
	const handleEditClick = () => {
		alert("clicked");
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
							<div>
								<button onClick={handleEditClick}>
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
		</div>
	);
};

export default AdminDashboardCard;
