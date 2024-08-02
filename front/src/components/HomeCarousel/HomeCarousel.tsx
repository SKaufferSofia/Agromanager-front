"use client";

import React from "react";
import { Carousel } from "@material-tailwind/react";
import MainButton from "../MainButton/MainButton";
import LandingButton from "../LandingButton/LandingButton";

const HomeCarousel: React.FC = () => {
  const carousel = [
    {
      id: "1", // Identificador único
      src: "/videos/8289525-hd_1920_1080_30fps.mp4",
      alt: "video 1",
      title: (
        <span className="poppins-thin">
          Gestiona tus <span className="poppins-bold-italic">lotes</span> de
          manera <span className="poppins-bold-italic"> eficiente.</span>
          <hr className="border-[1px] border-white w-full"></hr>
        </span>
      ),
      describe: (
        <span className="poppins-light">
          Optimiza y controla tus lotes agrícolas con nuestra plataforma
          avanzada. Lleva un seguimiento detallado de tus cultivos, desde la
          siembra hasta la cosecha.
        </span>
      ),
    },
    {
      id: "2", // Identificador único
      src: "/videos/7109380-uhd_4096_2160_24fps.mp4",
      alt: "video 2",
      title: (
        <span className="poppins-thin">
          Organiza tus <span className="poppins-bold-italic">labores</span>
          <hr className="border-[1px] border-white w-full"></hr>
        </span>
      ),
      describe: (
        <span className="poppins-light">
          Planifica y gestiona todas tus actividades agrícolas. Asigna tareas,
          monitoriza el progreso y asegúrate de que cada labor se realiza a
          tiempo.
        </span>
      ),
    },
    {
      id: "3", // Identificador único
      src: "/videos/5390323-uhd_3840_2160_30fps.mp4",
      alt: "video 3",
      title: (
        <span className="poppins-thin">
          Administracion de <span className="poppins-bold-italic">insumos</span>
          <hr className="border-[1px] border-white w-full"></hr>
        </span>
      ),
      describe: (
        <span className="poppins-light">
          Mantén un inventario actualizado de todos tus insumos agrícolas.
          Gestiona eficientemente el uso de fertilizantes, pesticidas y otros
          recursos esenciales.
        </span>
      ),
    },
  ];

  return (
    <Carousel
      className="rounded-xl h-[calc(90vh)] w-[90%] mx-auto "
      loop={true}
      autoplay={true}
      autoplayDelay={8000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-[33rem] left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-xl transition-all content-[''] mt-11 ${
                activeIndex === i
                  ? "w-4 h-4 bg-textGreen "
                  : "w-4 h-4 bg-textGreen/50 "
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {carousel.map((itemCarousel) => (
        <div
          key={itemCarousel.id} // Usar el id como clave
          className="m-auto relative h-full w-full rounded-2xl"
        >
          <video
            autoPlay
            loop
            muted
            src={itemCarousel.src}
            width={1920}
            height={1080}
            className="w-full h-[calc(84vh)] object-cover"
          />
          <div className="absolute top-0 right-0 h-[calc(84vh)] w-[40%] grid place-items-center  bg-gray-900 bg-opacity-80">
            <div className="w-2/4 text-center md:w-3/4 poppins-light">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-gray-100 font-bold">
                {itemCarousel.title}
              </h1>
              <p className="mb-12 opacity-80 text-xl text-white mt-14">
                {itemCarousel.describe}
              </p>
              <div className="flex justify-center gap-2">
                <LandingButton text="Iniciar" path="/login" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
