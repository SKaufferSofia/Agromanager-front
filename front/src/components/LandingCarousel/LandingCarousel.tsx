"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../public/LandinImg/img-campo1.png";
import image2 from "../../../public/LandinImg/img-campo2.png";
import image3 from "../../../public/LandinImg/img-campo3.png";

const slides = [
  {
    src: image1,
    alt: "Lote agrícola",
    title: "Gestiona Tus Lotes",
    description:
      "Crea y organiza tus lotes agrícolas de manera eficiente. Mantén un registro detallado de cada lote, incluyendo su ubicación, tamaño y estado actual.",
  },
  {
    src: image2,
    alt: "Labores agrícolas",
    title: "Organiza Tus Labores",
    description:
      "Supervisa todas las labores agrícolas, desde la siembra hasta la cosecha. Asigna tareas a contratistas y asegúrate de que todas las actividades se realicen a tiempo.",
  },
  {
    src: image3,
    alt: "Insumos agrícolas",
    title: "Administra Tus Insumos",
    description:
      "Mantén un control preciso de tus insumos agrícolas, como fertilizantes y herbicidas. Gestiona tu stock y asegúrate de tener siempre los productos necesarios.",
  },
];

const LandingCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[calc(70vh)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute flex flex-col md:flex-row items-center justify-center w-full h-full transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center w-full md:w-3/4 lg:w-1/2 p-4">
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl text-textColor">
              {slide.title}
            </h1>
            <p className="mb-16 text-base md:text-lg lg:text-md text-textColor opacity-80">
              {slide.description}
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:flex lg:h-[80vh]">
            <Image src={slide.src} alt={slide.alt} layout="responsive" />
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-lg bg-white"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-lg bg-white"
      >
        &gt;
      </button>
    </div>
  );
};

export default LandingCarousel;
