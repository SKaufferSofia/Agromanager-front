import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#747C5D] text-white py-6">
			<div className="flex items-center justify-between px-4 ">
				<div className="flex flex-col items-center justify-center px-4 md:border-r md:border-white">
					<Image
						src="/image4.png"
						width={150}
						height={150}
						alt="Logo"
					/>
					<div>
						<p className="text-xs">AGRICULTURAL MANAGER</p>
					</div>
				</div>
				<div className="flex flex-1 items-center justify-around text-center">
					<p className="text-sm w-full md:w-1/4 px-4 py-6 md:border-r md:border-white">
						dedica a la imprenta desconocido usó una galería de
						textos y los
					</p>
					<p className="text-sm w-full md:w-1/4 px-4 py-6 md:border-r md:border-white">
						dedica a la imprenta desconocido usó una galería de
						textos y los
					</p>
					<p className="text-sm w-full md:w-1/4 px-4">
						dedica a la imprenta desconocido usó una galería de
						textos y los
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
