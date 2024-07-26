import React from "react";
import Image from "next/image";

//avatar team
import avatarValentin from "../../assets/team/valentin-avatar.jpg";
import avatarPando from "../../assets/team/pando-avatar.jpg";
import avatarPedernera from "../../assets/team/pedernera-avatar.jpg";
import avatarSofia from "../../assets/team/sofia-avatar.jpg";
import avatarMax from "../../assets/team/max-avatar.jpg";

const TeamComponent: React.FC = () => {
  const team = [
    {
      name: "Nicolas Pando",
      gitHub: "https://github.com/NicolasPando",
      imageUrl: avatarPando,
    },
    {
      name: "Nicolas Pedernera",
      gitHub: "https://github.com/Nicopedeer",
      imageUrl: avatarPedernera,
    },
    {
      name: "Juan Andres Gomez",
      gitHub: "https://github.com/JuanGom01",
      imageUrl: "/image4.png",
    },
    {
      name: "Valentin Simon",
      gitHub: "https://github.com/valentinsimon",
      imageUrl: avatarValentin,
    },
    {
      name: "Max Robles",
      gitHub: "https://github.com/ByteBiteChef",
      imageUrl: avatarMax,
    },
    {
      name: "Sofia Kauffer",
      gitHub: "https://github.com/SKaufferSofia",
      imageUrl: avatarSofia,
    },
  ];

  return (
    <div className="h-[calc(60vh)]">
      <div className="w-full h-[13rem] bg-gradient-to-t from-bgColor relative -mt-52 py-10">
        <div className="bg-white py-24 sm:py-20 sm:w-[80%] sm:mx-auto rounded-2xl">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-textColor sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="mt-6 text-lg leading-8 text-textColor">
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
                      className="h-16 w-16 rounded-full border border-bgColor"
                    />
                    <div>
                      <h3 className="text-base font-bold leading-7 tracking-tight text-textColor">
                        {person.name}
                      </h3>
                      <a href={person.gitHub} target="_blank">
                        <p className="text-sm font-semibold leading-6 text-textGreen">
                          GitHub
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
