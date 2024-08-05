import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footerColor text-white py-6">
      <div className="flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex flex-col items-center justify-center px-4 md:border-r md:border-white mb-6 md:mb-0">
          <Image src="/image4.png" width={150} height={150} alt="Logo" />
          <div>
            <p className="text-xs">AGRICULTURAL MANAGER</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row items-center justify-around text-center w-full">
          <ul className="flex flex-col md:flex-row items-center text-md w-full md:w-1/3 px-4 py-6 md:border-r md:border-white space-y-2 md:space-y-0 md:space-x-4 justify-center">
            <li className="hover:scale-105 hover:ease-in-out">
              <a href="/home">Inicio</a>
            </li>
            <li className="hover:scale-105 hover:ease-in-out">
              <a href="/about">Sobre Nosotros</a>
            </li>
            <li className="hover:scale-105 hover:ease-in-out">
              <a href="/contact">Contacto</a>
            </li>
          </ul>

          <div className="flex space-x-8 text-2xl px-4 py-6 md:border-r md:border-white justify-center w-full md:w-1/3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 hover:ease-in-out"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              className="hover:scale-105 hover:ease-in-out"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              className="hover:scale-105 hover:ease-in-out "
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-sm w-full md:w-1/3 px-4 py-6 justify-center">
            © {new Date().getFullYear()} Agricultural Manager. <br />
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
