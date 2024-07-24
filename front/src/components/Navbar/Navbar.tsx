"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = React.useState("transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setBgColor("bg-[#636B3F]");
      } else {
        setBgColor("transparent");
      }
    };
    if (pathname === "/" || pathname === "/about") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setBgColor("bg-[#636B3F]");
    }
  }, [pathname]);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full ${bgColor} transition-colors ease-in-out duration-300`}
      >
        <div className="flex flex-wrap items-center justify-between w-full">
          <a href="/" className="flex items-center space-x-3">
            <Image
              src="/image4.png"
              width={200}
              height={200}
              alt="agromanager Logo"
            />
          </a>
          <div className="hidden w-full md:block md:w-auto md:ml-8">
            <ul className="font-medium flex flex-col p-4 md:p-0  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/home"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:hover:scale-105 md:hover:ease-in-out md:p-0"
                  aria-current="page"
                >
                  INICIO
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-105 md:hover:ease-in-out md:p-0"
                >
                  SOBRE NOSOTROS
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-105 md:hover:ease-in-out md:p-0"
                >
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
          <div className="font-medium flex flex-col p-4 md:p-8 md:flex-row md:space-x-8">
            <a href="#">
              <p className="text-white md:hover:scale-105 md:hover:ease-in-out md:p-0">
                INICIAR SESIÓN
              </p>
            </a>
            <a href="#">
              <p className="text-white md:hover:scale-105 md:hover:ease-in-out md:p-0">
                REGISTRARSE
              </p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
