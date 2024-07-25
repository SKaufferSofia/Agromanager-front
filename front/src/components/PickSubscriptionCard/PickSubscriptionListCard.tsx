"use client";

import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
import { ISuscribe } from "@/interfaces/interfaces";

const PickSubscriptionListCard = ({
	suscribe: { title, price, unid, describe },
}: {
	suscribe: ISuscribe;
}) => {
	return (
		<div className="w-4/5 mx-auto">
			<a href="/your-link-here" className="block">
				<Card
					color="white"
					variant="gradient"
					className="group flex-row flex rounded-3xl text-textColor m-10 justify-between  hover:bg-footerColor "
				>
					<div>
						<Typography
							variant="h6"
							className="font-normal text-center uppercase text-textColor group-hover:text-white poppins-bold mt-5 p-4"
						>
							{title}
						</Typography>

						<CardBody className="p-0 group-hover:text-white">
							<p className=" p-10">{describe}</p>
						</CardBody>
					</div>
					<CardHeader
						floated={false}
						shadow={false}
						className="p-10 md:w-4/5 lg:w-4/5 xl:w-2/4 m-2 rounded-2xl bg-bgColor border-b flex justify-center items-center group-hover:bg-opacity-50"
					>
						<Typography
							variant="h1"
							className="flex justify-center items-center text-7xl font-normal text-textColor poppins-medium  group-hover:text-white"
						>
							<span className="mt-5 text-4xl">$</span>
							{price}
							<span className="self-end text-4xl">/{unid}</span>
						</Typography>
					</CardHeader>
				</Card>
			</a>
		</div>
	);
};

export default PickSubscriptionListCard;
