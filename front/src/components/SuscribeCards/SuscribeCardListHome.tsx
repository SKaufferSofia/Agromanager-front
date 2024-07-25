"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ISuscribe } from "@/interfaces/interfaces";

const SuscribeCardListHome = ({
  suscribe: { title, price, unid, describe },
}: {
  suscribe: ISuscribe;
}) => {
  return (
    <Card
      color="white"
      variant="gradient"
      className="w-full max-w-[20rem] px-3 py-8 text-textColor"
    >
      <Typography
        variant="h6"
        className="font-normal text-center uppercase text-textColor poppins-bold"
      >
        {title}
      </Typography>
      <CardHeader
        floated={false}
        shadow={false}
        className="mt-5 rounded-2xl bg-bgColor border-b border-white/10 p-5 text-center"
      >
        <Typography
          variant="h1"
          className="flex justify-center gap-1 text-7xl font-normal text-textColor poppins-medium"
        >
          <span className="mt-2 text-4xl">$</span>
          {price}
          <span className="self-end text-4xl">/{unid}</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <p className="leading-8 p-14">{describe}</p>
      </CardBody>
    </Card>
  );
};

export default SuscribeCardListHome;
