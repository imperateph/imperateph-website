import { Box } from "@chakra-ui/react";
import TeaserForm from "../components/TeaserForm";
import BoxMaxWidth from "@/components/containers/BoxMaxWidth";
import image from "/public/bgimage.png";
import Image from "next/image";
import { Metadata } from "next";

// Your Future Matters, Invest with Imperate
// We showcase the finest upscale and luxury properties across the Philippines. Our curated selection offers a gateway to discover exceptional living spaces tailored to your lifestyle and investment goals.

export const metadata: Metadata = {
  title: {
    absolute: "Imperate Realty",
    template: "%s | Imperate Realty",
  },
  keywords: [
    "real estate",
    "luxury",
    "property",
    "investment",
    "philippines",
    "manila",
    "condo",
    "davao",
    "luxury homes",
    "luxury condos",
  ],
  description:
    "We showcase the finest upscale and luxury properties across the Philippines. Our curated selection offers a gateway to discover exceptional living spaces tailored to your lifestyle and investment goals.",
  openGraph: {
    title: "Imperate Realty",
    description:
      "We showcase the finest upscale and luxury properties across the Philippines. Our curated selection offers a gateway to discover exceptional living spaces tailored to your lifestyle and investment goals.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/bgimage.png",
        width: 800,
        height: 600,
        alt: "Imperate Realty",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="xl:bg-[url('/bgimage.png')] bg-cover xl:h-full flex items-center text-white">
      <BoxMaxWidth className="mr-0">
        <Image
          src={image}
          alt="Showcase"
          className="max-h-[500px] min-h-[450px] w-full object-cover xl:hidden"
        />
        <div className="mx-auto flex flex-col xl:flex-row bg-transparent rounded-lg p-6 xl:mb-auto xl:mr-8 gap-6">
          <Box className="text-center xl:text-left xl:w-[400px]">
            <p>
              Discover Exceptional Real Estate Tailored to Your Lifestyle and
              Goals
            </p>
            <div className="mb-4">
              <h1 className="text-6xl font-extrabold">Your Future Matters,</h1>
              <h1 className="text-6xl font-extrabold">
                Invest with <span>Imperate</span>
              </h1>
            </div>
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
