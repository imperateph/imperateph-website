import { Box } from "@chakra-ui/react";
import TeaserForm from "../components/TeaserForm";
import BoxMaxWidth from "@/components/containers/BoxMaxWidth";
import image from "/public/sample-image.jpeg";
import Image from "next/image";

// Your Future Matters, Invest with Imperate
// We showcase the finest upscale and luxury properties across the Philippines. Our curated selection offers a gateway to discover exceptional living spaces tailored to your lifestyle and investment goals.

export default function Home() {
  return (
    <main className="xl:bg-[url('/sample-image.jpeg')] bg-cover xl:h-full flex items-center">
      <BoxMaxWidth className="mr-0">
        <Image
          src={image}
          alt="Showcase"
          className="max-h-[500px] min-h-[450px] w-full object-cover xl:hidden"
        />
        <div className="mx-auto flex flex-col xl:flex-row bg-white rounded-lg p-6 xl:mb-auto xl:mr-8 gap-6">
          <Box className="text-center xl:text-left xl:w-[400px]">
            <div className="mb-4">
              <h1 className="text-4xl font-semibold">Your Future Matters,</h1>
              <h1 className="text-4xl font-semibold">
                Invest with <span className=" text-blue-800">Imperate</span>
              </h1>
            </div>
            <p>
              We showcase the finest upscale and luxury properties across the
              Philippines. Our curated selection offers a gateway to discover
              exceptional living spaces tailored to your lifestyle and
              investment goals.
            </p>
          </Box>
          <Box className="mx-auto max-w-[500px]">
            <p className="mb-4 font-bold text-xl">
              Be the first to be updated with our property listings!
            </p>
            <TeaserForm />
          </Box>
        </div>
      </BoxMaxWidth>
    </main>
  );
}
