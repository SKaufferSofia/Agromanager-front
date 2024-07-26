import React from "react";
import { ISuscribe } from "@/interfaces/interfaces";

const SelectedSubscriptionCard: React.FC<{ subscription: ISuscribe }> = ({
	subscription,
}) => {
	return (
		<div className="bg-white shadow-md rounded-3xl p-14 max-w-3xl mx-auto text-center">
			<h2 className="text-2xl font-semibold mb-4">
				{subscription.title}
			</h2>
			<p className="text-gray-700 mb-6">{subscription.describe}</p>
			<div className="flex justify-center items-baseline space-x-2">
				<span className="text-4xl font-bold">
					${subscription.price}
				</span>
				<span className="text-lg font-medium text-gray-600 ml-2  ">
					/{subscription.unid}
				</span>
			</div>
		</div>
	);
};

export default SelectedSubscriptionCard;
