import { Box } from "@chakra-ui/react";
import Image from "next/image";
import logo from "/public/whitelogo.png";

export default function Navbar() {
  return (
    <nav className="py-4 px-2 bg-transparent absolute w-full">
      <Box className=" max-w-[1700px] mx-auto lg:px-6">
        <div className="flex items-center">
          <Image
            src={logo}
            height={60}
            alt="Imperate Realty Logo"
            priority
            // className=""
          />
          <h1 className="text-2xl font-extrabold text-white">Imperate</h1>
        </div>
      </Box>
    </nav>
  );
}
