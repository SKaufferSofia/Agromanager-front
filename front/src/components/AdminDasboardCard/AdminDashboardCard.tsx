"use client";

import { fetchAllUsers } from "@/lib/server/petitionAdminInfo";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminDashboardCard = () => {
	const token = useSelector((state: any) => state.token);
	const [newArrayUsers, setNewArrayUsers] = useState<any[]>([]);

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
			<div className="bg-white shadow-md p-14 text-center">
				{newArrayUsers &&
					newArrayUsers.map((user, index) => (
						<div className="flex justify-around p-4" key={index}>
							<div className="flex-1">{user.name}</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default AdminDashboardCard;
