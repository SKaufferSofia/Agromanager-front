import ImgContainer from "@/components/ImgContainer/ImgContainer";
import LandingCarousel from "@/components/LandingCarousel/LandingCarousel";

export default function Landing() {
	return (
		<main className="flex">
			<div className="relative">
				<ImgContainer
					src="/img-landing.png"
					alt="Description for image"
				/>
				<div className="w-full h-1/4 bg-[#E9E7DD]">
					<LandingCarousel />
				</div>
				<div className="w-full h-1/4 bg-white">
					Otro container Lorem Ipsum es simplemente el texto de
					relleno de las imprentas y archivos de texto. Lorem Ipsum ha
					sido el texto de relleno estándar de las industrias desde el
					año 1500, cuando un impresor (N. del T. persona que se
					dedica a la imprenta) desconocido usó una galería de textos
					y los mezcló de tal manera que logró hacer un libro de
					textos especimen.Landing Info{" "}
				</div>
			</div>
		</main>
	);
}
