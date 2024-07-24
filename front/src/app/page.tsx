import ImgContainer from "@/components/ImgContainer/ImgContainer";
import LandingCarousel from "@/components/LandingCarousel/LandingCarousel";
import Image from "next/image";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-tractor.png";
import icon3 from "../assets/icon-insumo.png";
import MainButton from "@/components/MainButton/MainButton";

export default function Landing() {
	return (
		<main className="flex">
			<div className="relative">
				<ImgContainer
					src="/img-landing.png"
					alt="Description for image"
				>
					<div className="text-white">
						<h2 className="text-5xl mb-8 font-medium">
							Landing Info
						</h2>
						<p className="p-10">
							de relleno de las imprentas y archivos de texto.
							Lorem Ipsum ha sido el texto de relleno estándar de
							las industrias desde el año 1500, cuando un impresor
							(N. del T. persona que se dedica a la imprenta)
							desconocido usó una galería de textos y los mezcló
							de tal manera que logró hacer un libro de textos
							especimen.Landing Info
						</p>
					</div>
				</ImgContainer>
				<div className="w-full h-1/3 bg-[#E9E7DD]">
					<LandingCarousel />
				</div>
				<div className="flex w-full bg-white">
					<div className="p-8 w-1/3 flex flex-col items-center text-center">
						<Image
							src={icon1}
							alt={"icon"}
							width={150}
							height={150}
						/>
						<div className="text-[#585858]">
							<h2 className="text-2xl mb-8 font-medium">
								Lotes Info
							</h2>
							<p>
								de relleno de las imprentas y archivos de texto.
								Lorem Ipsum ha sido el texto de relleno estándar
								de las industrias desde el año 1500, cuando un
								impresor (N. del T. persona que se dedica a la
								imprenta) desconocido usó una galería de textos
								y los mezcló de tal manera que logró hacer un
								libro de textos especimen.Landing Info
							</p>
						</div>
					</div>
					<div className="p-8 w-1/3 flex flex-col items-center text-center">
						<Image
							src={icon2}
							alt={"icon"}
							width={150}
							height={150}
						/>
						<div className="text-[#585858]">
							<h2 className="text-2xl mb-8 font-medium">
								Labores Info
							</h2>
							<p>
								de relleno de las imprentas y archivos de texto.
								Lorem Ipsum ha sido el texto de relleno estándar
								de las industrias desde el año 1500, cuando un
								impresor (N. del T. persona que se dedica a la
								imprenta) desconocido usó una galería de textos
								y los mezcló de tal manera que logró hacer un
								libro de textos especimen.Landing Info
							</p>
						</div>
					</div>
					<div className="p-8 w-1/3 flex flex-col items-center text-center">
						<Image
							src={icon3}
							alt={"icon"}
							width={150}
							height={150}
						/>
						<div className="text-[#585858]">
							<h2 className="text-2xl mb-8 font-medium">
								Insumos Info
							</h2>
							<p>
								de relleno de las imprentas y archivos de texto.
								Lorem Ipsum ha sido el texto de relleno estándar
								de las industrias desde el año 1500, cuando un
								impresor (N. del T. persona que se dedica a la
								imprenta) desconocido usó una galería de textos
								y los mezcló de tal manera que logró hacer un
								libro de textos especimen.Landing Info
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center p-8">
					<MainButton text="Ver Más" path="/home" />
				</div>
			</div>
		</main>
	);
}
