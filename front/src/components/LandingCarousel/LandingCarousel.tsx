"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../public/LandinImg/img-campo1.png";
import image2 from "../../../public/LandinImg/img-campo2.png";
import image3 from "../../../public/LandinImg/img-campo3.png";

const slides = [
	{
		src: image1,
		alt: "image 1",
		title: "Landing Info",
		description:
			"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.Landing Info",
	},
	{
		src: image2,
		alt: "image 2",
		title: "Landing Info 2",
		description:
			"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.Landing Info",
	},
	{
		src: image3,
		alt: "image 3",
		title: "Landing Info 3",
		description:
			"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.Landing Info",
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
					className={`m-12 absolute flex transition-transform duration-1000 ease-in-out ${
						index === currentSlide
							? "translate-x-0"
							: "translate-x-full"
					}`}
				>
					<div className="flex items-center justify-center overflow-hidden">
						<div className="w-3/4 md:w-3/4 text-[#585858]">
							<h1 className="mb-4 text-3xl md:text-3xl lg:text-4xl">
								{slide.title}
							</h1>
							<p className="mb-10 opacity-80">
								{slide.description}
							</p>
						</div>
					</div>
					<div className="w-full hidden sm:block mr-8">
						<Image
							src={slide.src}
							alt={slide.alt}
							width={800}
							height={800}
						/>
					</div>
				</div>
			))}
			<button
				onClick={prevSlide}
				className="absolute top-1/3 left-10 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
			>
				&lt;
			</button>
			<button
				onClick={nextSlide}
				className="absolute top-1/3 right-10 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
			>
				&gt;
			</button>
		</div>
	);
};

export default LandingCarousel;
