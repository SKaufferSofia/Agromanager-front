"use client";

import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";

const HomeCarousel: React.FC = () => {
  const carousel = [
    {
      src: "/CarouselHome/img-1.avif",
      alt: "image 1",
      title: "Titulo 1",
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu culpa esse dolore mollitia ratione, excepturi autem error quasi, quibusdam quo ea aspernatur dolorem sequi, nam id impedit. Laboriosam, at dolore.",
    },
    {
      src: "/CarouselHome/img-2.avif",
      alt: "image 2",
      title: "Titulo 2",
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu culpa esse dolore mollitia ratione, excepturi autem error quasi, quibusdam quo ea aspernatur dolorem sequi, nam id impedit. Laboriosam, at dolore.",
    },
    {
      src: "/CarouselHome/img-3.avif",
      alt: "image 3",
      title: "Titulo 3",
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu culpa esse dolore mollitia ratione, excepturi autem error quasi, quibusdam quo ea aspernatur dolorem sequi, nam id impedit. Laboriosam, at dolore.",
    },
  ];

  return (
    <Carousel
      className="rounded-xl h-[calc(90vh)] "
      loop={true}
      autoplay={true}
      autoplayDelay={8000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-[33rem] left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] mt-11 ${
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
          key={itemCarousel.title}
          className="m-auto relative h-full w-full rounded-2xl"
        >
          <Image
            src={itemCarousel.src}
            alt={itemCarousel.alt}
            width={1920}
            height={1080}
            className="w-full h-[calc(84vh)] object-cover"
          />
          <div className="absolute top-0 right-0 h-[calc(84vh)] w-[40%] grid place-items-center bg-white/60">
            <div className="w-2/4 text-center md:w-3/4">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl  text-textColor font-bold">
                {itemCarousel.title}
              </h1>
              <p className="mb-12 opacity-80">{itemCarousel.describe}</p>
              <div className="flex justify-center gap-2">
                <MainButton text="Ver más" path="/" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
