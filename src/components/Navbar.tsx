import Image from "next/image";
import BoxMaxWidth from "./containers/BoxMaxWidth";
import logo from "/public/whitelogo.png";

export default function Navbar() {
  return (
    <nav className="py-4 px-2 bg-transparent absolute">
      <BoxMaxWidth>
        <div className="flex items-center">
          <Image
            src={logo}
            height={60}
            alt="Imperate Realty Logo"
            priority
            className="mx-auto"
          />
          <h1 className="text-2xl font-extrabold text-white">Imperate</h1>
        </div>
      </BoxMaxWidth>
    </nav>
  );
}
