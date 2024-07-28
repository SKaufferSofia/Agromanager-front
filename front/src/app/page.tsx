import ImgContainer from "@/components/ImgContainer/ImgContainer";
import LandingCarousel from "@/components/LandingCarousel/LandingCarousel";
import Image from "next/image";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-tractor.png";
import icon3 from "../assets/icon-insumo.png";
import MainButton from "@/components/MainButton/MainButton";
import LandingButton from "@/components/LandingButton/LandingButton";

export default function Landing() {
  return (
    <main className="flex">
      <div className="relative">
        <ImgContainer src="/img-landing.png" alt="scapelande-image">
          <div className="mx-auto max-w-[80%] py-32 sm:py-38 lg:absolute lg:left-[10%]">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:p-4">
                Administra Tus Lotes Fácilmente
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Crea y gestiona lotes agrícolas, organiza labores y aplica
                insumos como fertilizantes y herbicidas. Mantén tu stock al día
                y mejora tu productividad con nuestra plataforma todo en uno.
              </p>
              <div className="p-10">
                <LandingButton text="Ver Más" path="/home" />
              </div>
            </div>
          </div>
        </ImgContainer>
        <div className="w-full">
          <LandingCarousel />
        </div>
        <div className=" w-full bg-white">
          <div className="flex">
            <div className="p-8 w-1/3 flex flex-col items-center text-center">
              <Image src={icon1} alt={"icon"} width={150} height={150} />
              <div className="text-textColor">
                <h2 className="text-2xl mb-8 font-medium">Lotes</h2>
                <p>
                  Gestiona fácilmente la creación y organización de lotes
                  agrícolas. Nuestra plataforma te permite mantener un registro
                  detallado de cada lote, incluyendo su ubicación, tamaño, y
                  estado actual.
                </p>
              </div>
            </div>
            <div className="p-8 w-1/3 flex flex-col items-center text-center">
              <Image src={icon2} alt={"icon"} width={150} height={150} />
              <div className="text-[#585858]">
                <h2 className="text-2xl mb-8 font-medium">Labores</h2>
                <p>
                  Organiza y supervisa todas las labores agrícolas de tus lotes,
                  desde la siembra hasta la cosecha. Asigna tareas a
                  contratistas y asegura que todas las actividades se realicen a
                  tiempo y de manera eficiente.
                </p>
              </div>
            </div>
            <div className="p-8 w-1/3 flex flex-col items-center text-center">
              <Image src={icon3} alt={"icon"} width={150} height={150} />
              <div className="text-[#585858]">
                <h2 className="text-2xl mb-8 font-medium">Insumos</h2>
                <p>
                  Administra tu stock de insumos agrícolas, incluyendo
                  fertilizantes, herbicidas y otros productos esenciales. Mantén
                  un control preciso de tus inventarios y asegúrate de tener
                  siempre los insumos necesarios para cada labor.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-8 ">
            <MainButton text="Ver Más" path="/home" />
          </div>
        </div>
      </div>
    </main>
  );
}
