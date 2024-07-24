import Image from "next/image";
import React from "react";

const TeamComponent: React.FC = () => {
  const team = [
    {
      name: "Nicolas Pando",
      gitHub: "https://github.com/NicolasPando",
      imageUrl: "/image4.png",
    },
    {
      name: "Nicolas Pedernera",
      gitHub: "https://github.com/Nicopedeer",
      imageUrl: "/image4.png",
    },
    {
      name: "Juan Andres Gomez",
      gitHub: "https://github.com/JuanGom01",
      imageUrl: "/image4.png",
    },
    {
      name: "Valentin Simon",
      gitHub: "https://github.com/valentinsimon",
      imageUrl: "/image4.png",
    },
    {
      name: "Max Robles",
      gitHub: "https://github.com/ByteBiteChef",
      imageUrl: "/image4.png",
    },
    {
      name: "Sofia Kauffer",
      gitHub: "https://github.com/SKaufferSofia",
      imageUrl: "/image4.png",
    },
  ];

  return (
    <div className="h-[calc(60vh)] bg-[#E9E7DD]">
      <div className="w-full h-[13rem] bg-gradient-to-t from-[#E9E7DD] relative -mt-52 py-10">
        <div className="bg-white py-24 sm:py-20 sm:w-[80%] sm:mx-auto rounded-2xl">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#585858] sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#585858]">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <Image
                      src={person.imageUrl}
                      width={100}
                      height={100}
                      alt=""
                      className="h-16 w-16 rounded-full border border-[#E9E7DD] "
                    />
                    <div>
                      <h3 className="text-base font-bold leading-7 tracking-tight text-[#585858]">
                        {person.name}
                      </h3>
                      <a href={person.gitHub} target="_blank">
                        <p className="text-sm font-semibold leading-6 text-[#70823E]">
                          Github
                        </p>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
