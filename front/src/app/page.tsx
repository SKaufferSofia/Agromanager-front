import Navbar from "@/components/Navbar/Navbar";
import ImgContainer from "@/components/ImgContainer/ImgContainer";
import Footer from "@/components/Footer/Footer";

export default function Landing() {
	return (
		<main>
			<div className="relative">
				<Navbar />
				<ImgContainer
					src="/img-landing.png"
					alt="Description for image"
				/>
			</div>
			<Footer />
		</main>
	);
}
