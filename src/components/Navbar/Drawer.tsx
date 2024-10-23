"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useRef } from "react";
import MenuItems from "./MenuItems";
import Image from "next/image";
import logo from "/public/whitelogo.png";

export default function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const btnRef = useRef<any>();

  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <Menu size={40} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent className="bg-primary text-white">
          <DrawerCloseButton />
          <DrawerHeader>
            <div className="flex gap-2 items-center">
              <Image src={logo} alt="logo" height={40} width={40} /> Imperate
            </div>
          </DrawerHeader>

          <DrawerBody>
            <ul className="text-xl">
              <MenuItems className="flex flex-col gap-4" />
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Button variant={"accent"} className="w-full">
              Book Now!
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
