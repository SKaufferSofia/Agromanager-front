"use client";
import useDataPlot from "@/hooks/useDataPlot";
import useUserData from "@/hooks/useUserData";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useDataStock from "@/hooks/useDataStock";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { FaList, FaListAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

export default function ProfileMenu() {
  const router = useRouter();
  const roles = useSelector((state: any) => state.userData.roles);
  const isAdmin = roles.some((role: any) => role.name === "admin");

  const { logOut } = useUserData();
  const { clearPlotsStorage } = useDataPlot();
  const { clearStocksStorage } = useDataStock();

  const handleLogOut = () => {
    signOut();
    logOut();
    clearPlotsStorage();
    clearStocksStorage();
    Cookies.remove("token");
    Cookies.remove("userData");
    Cookies.remove("role");
    router.push("/");
  };

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="white"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-white p-0.5"
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          />
        </Button>
      </MenuHandler>
      {isAdmin ? (
        <MenuList className="p-1">
          <MenuItem
            className="flex items-center gap-2 rounded poppins-semibold text-red-400 "
            onClick={handleLogOut}
          >
            CERRAR SESIÓN
          </MenuItem>
        </MenuList>
      ) : (
        <MenuList className="p-1">
          <Link href="/dashboard/myprofile">
            <MenuItem className="flex items-center gap-2 rounded poppins-semibold text-textColor">
              <FaUser />
              MI PERFIL
            </MenuItem>
          </Link>
          <Link href="/dashboard/mysubscription">
            <MenuItem className="flex items-center gap-2 rounded poppins-semibold text-textColor">
              <FaListAlt />
              MIS SUSCRIPCIONES
            </MenuItem>
          </Link>
          <MenuItem
            className="flex items-center gap-2 rounded poppins-semibold text-red-400"
            onClick={handleLogOut}
          >
            <FaSignOutAlt />
            CERRAR SESIÓN
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
}
