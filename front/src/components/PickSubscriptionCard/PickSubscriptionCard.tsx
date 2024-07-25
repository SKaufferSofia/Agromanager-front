"use client";

import React from "react";
import PickSubscriptionListCard from "./PickSubscriptionListCard";

const PickSubscriptionCard: React.FC = () => {
	const subscriptions = [
		{
			id: 1,
			title: "Suscripcion gratuita",
			price: 0,
			unid: "mo",
			describe:
"Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis  blanditiis repellendus etur quidem assumenda.Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis  blanditiis repellendus etur quidem assumenda.",		},
		{
			id: 2,
			title: "Suscripcion por mes",
			price: 10,
			unid: "mo",
			describe:
"Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis  blanditiis repellendus etur quidem assumenda.Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis  blanditiis repellendus etur quidem assumenda.",		},
		{
			id: 3,
			title: "Suscripcion anual",
			price: 30,
			unid: "mo",
			describe:
				"Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis  blanditiis repellendus etur quidem assumenda.Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis  blanditiis repellendus etur quidem assumenda.",
		},
	];
	return (
		<div className="flex flex-col gap-4">
			{subscriptions.map((subscription) => (
				<div key={subscription.id}>
					<PickSubscriptionListCard suscribe={subscription} />
				</div>
			))}
		</div>
	);
};
export default PickSubscriptionCard;
