import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ISuscribe } from "@/interfaces/interfacesSupscriptions";
import { FaCheck } from "react-icons/fa";

const PickSubscriptionListCard = ({
  suscribe: { title, price, unid, describe },
  isChecked,
  onClick,
}: {
  suscribe: ISuscribe;
  isChecked: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={isChecked ? "w-4/5 mx-auto bg-bgColor" : "w-4/5 mx-auto"}
      key={title}
      onClick={onClick}
    >
      <a>
        <Card
          color="white"
          variant="gradient"
          className="group flex-row flex rounded-3xl text-textColor justify-between hover:bg-footerColor"
        >
          <div>
            <Typography
              variant="h6"
              className="font-normal text-center uppercase text-textColor group-hover:text-white poppins-bold mt-5 p-4"
            >
              {title}
            </Typography>

            <CardBody className="p-0 group-hover:text-white">
              <p className="p-10">{describe}</p>
            </CardBody>
          </div>
          <CardHeader
            floated={false}
            shadow={false}
            className="p-10 md:w-4/5 lg:w-4/5 xl:w-2/4 m-2 rounded-2xl bg-bgColor border-b flex flex-col justify-center items-center group-hover:bg-opacity-50 relative"
          >
            <Typography
              variant="h1"
              className="mt-4 flex justify-center items-center text-7xl font-normal text-textColor poppins-medium group-hover:text-white"
            >
              <span className="mt-5 text-4xl">$</span>
              {price}
              <span className="self-end text-2xl">/{unid}</span>
            </Typography>
            {isChecked && (
              <div className="absolute top-2 right-2 transition-opacity duration-300 ease-in-out opacity-100">
                <FaCheck className="text-bgColor p-1 bg-navbarColor rounded-full h-7 w-7 group-hover:text-white" />
              </div>
            )}
          </CardHeader>
        </Card>
      </a>
    </div>
  );
};

export default PickSubscriptionListCard;
