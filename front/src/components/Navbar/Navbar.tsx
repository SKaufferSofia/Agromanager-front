"use client";

import Image from "next/image";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import useUserData from "@/hooks/useUserData";
import useDataPlot from "@/hooks/useDataPlot";
import { useRouter } from "next/navigation";
import ProfileMenu from "./ProfileMenu";

const NavbarComponent: React.FC = () => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = React.useState("transparent");
  const isLogged = useSelector((state: any) => state.isLoggin);
  const isSubscription = useSelector(
    (state: any) => state.userData.premiumExpiration
  );

  const router = useRouter();

  const { logOut } = useUserData();
  const { clearPlotsStorage } = useDataPlot();

  const handleLogOut = () => {
    logOut();
    clearPlotsStorage();
    router.push("/");
  };

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

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
          className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 lg:hover:scale-105 lg:hover:ease-in-out md:p-0"
        >
          CONTACTO
        </a>
      </li>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-screen fixed ">
      <Navbar
        color="transparent"
        className={`sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 ${bgColor} transition-colors ease-in-out duration-300 lg:px-16 lg:py-1`}
      >
        {!isSubscription ? (
          <div className="flex items-center justify-between text-white">
            <a href="/" className="flex items-center space-x-3">
              <Image
                src="/image4.png"
                width={160}
                height={160}
                alt="agromanager Logo"
              />
            </a>
            <div className="flex items-center gap-4">
              <div className="mr-72 hidden lg:block ">{navList}</div>
              <div className="flex items-center gap-x-10">
                <a href="/login">
                  <p className="text-white hidden  lg:inline-block  md:hover:scale-105 md:hover:ease-in-out md:p-0">
                    INICIAR SESIÓN
                  </p>
                </a>
                <a href="/register">
                  <p className="text-white hidden  lg:inline-block md:hover:scale-105 md:hover:ease-in-out md:p-0">
                    REGISTRARSE
                  </p>
                </a>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-navbarGreen focus:bg-transparent active:bg-navbarGreen lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-white">
            <Image
              src="/image4.png"
              width={160}
              height={160}
              alt="agromanager Logo"
            />
            <div className="flex items-center gap-4">
              <ProfileMenu />
            </div>
          </div>
        )}
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center justify-center gap-x-10">
            <a href="/login">
              <p className="text-white">INICIAR SESIÓN</p>
            </a>
            <a href="/register">
              <p className="text-white">REGISTRARSE</p>
            </a>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
