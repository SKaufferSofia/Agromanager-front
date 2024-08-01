"use client";

import { fetchAllUsers } from "@/lib/server/petitionAdminInfo";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminDashboardCard = () => {
	const token = useSelector((state: any) => state.token);

	useEffect(() => {
		const getAllUsers = async () => {
			if (token) {
				try {
					const fetchedUsers = await fetchAllUsers(token);
					console.log("############", fetchedUsers);
				} catch (error) {
					console.error("Error fetching plots:", error);
				}
			}
		};

		getAllUsers();
	}, [token]);
	return (
		<div>
			<div className="bg-white shadow-md p-14 text-center"></div>
		</div>
	);
};

export default AdminDashboardCard;
