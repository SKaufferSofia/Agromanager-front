import AdminDashboardCard from "@/components/AdminDasboardCard/AdminDashboardCard";
import React from "react";

const AdminDashboard: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex-col flex-1 mt-24">
				<div className="flex-1 m-4">
					<AdminDashboardCard />
				</div>
			</div>
		</div>
	);
};
export default AdminDashboard;
