import Image from "next/image";
import BoxMaxWidth from "./containers/BoxMaxWidth";
import logo from "/public/whitelogo.png";

export default function Navbar() {
  return (
    <nav className="py-4 px-2 fixed">
      <BoxMaxWidth>
        <Image
          src={logo}
          height={60}
          alt="Imperate Realty Logo"
          priority
          className="mx-auto"
        />
      </BoxMaxWidth>
    </nav>
  );
}
