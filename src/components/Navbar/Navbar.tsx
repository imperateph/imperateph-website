import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import logo from "/public/whitelogo.png";
import CustomDrawer from "./Drawer";
import MenuItems from "./MenuItems";

export default function Navbar() {
  return (
    <nav className="py-4 px-2 bg-transparent absolute w-full text-white">
      <Box className=" max-w-[1700px] mx-auto lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={logo}
              height={60}
              alt="Imperate Realty Logo"
              priority
              // className=""
            />
            <h1 className="text-2xl font-extrabold ">Imperate</h1>
          </div>
          <div className="items-center gap-10 hidden md:flex">
            <MenuItems className="flex gap-10" itemClassName=""/>

            <Button variant={"accent"}>Book Now!</Button>
          </div>
          <div className="block md:hidden">
            <CustomDrawer />
          </div>
        </div>
      </Box>
    </nav>
  );
}
