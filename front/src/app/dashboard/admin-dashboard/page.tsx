import AdminDashboardCard from "@/components/AdminDasboardCard/AdminDashboardCard";
import React from "react";

const AdminDashboard: React.FC = () => {
	return (
		<div className="flex h-4/5">
			<div className="flex-col flex-1 mt-24">
				<div className="flex">
					<div className="flex-1 m-4">
						<AdminDashboardCard />
					</div>
					<div className="flex-1 m-4">
						<AdminDashboardCard />
					</div>
				</div>
				<div className="flex-col">
					<div className="flex-1">
						<div className="p-4 flex-1">
							<AdminDashboardCard />
						</div>
					</div>
					<div className="p-4 flex-1">
						<div className="flex-1">
							<AdminDashboardCard />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-24 flex h-screen flex-1">
				<div className="p-4 flex-1 h-90">
					<AdminDashboardCard />
				</div>
			</div>
		</div>
	);
};
export default AdminDashboard;
