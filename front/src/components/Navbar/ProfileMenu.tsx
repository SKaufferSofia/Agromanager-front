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

export default function ProfileMenu() {
  const router = useRouter();

  const { logOut } = useUserData();
  const { clearPlotsStorage } = useDataPlot();
  const { clearStocksStorage } = useDataStock();

  const handleLogOut = () => {
    signOut();
    logOut();
    clearPlotsStorage();
    clearStocksStorage();
    Cookies.remove("token");
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
      <MenuList className="p-1 bg-black border-black">
        <Link href="/dashboard/myprofile">
          <MenuItem className="flex items-center gap-2 rounded poppins-semibold text-white">
            MI PERFIL
          </MenuItem>
        </Link>
        {/* <Link href="/profile/orders">
          <MenuItem className="flex items-center gap-2 rounded poppins-semibold text-white">
            
          </MenuItem>
        </Link> */}
        <MenuItem
          className="flex items-center gap-2 rounded poppins-semibold text-red-400"
          onClick={handleLogOut}
        >
          CERRAR SESIÓN
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
