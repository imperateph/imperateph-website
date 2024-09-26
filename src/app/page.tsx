import { Box } from "@chakra-ui/react";
import { Metadata } from "next";
import TeaserForm from "../components/TeaserForm";

// Your Future Matters, Invest with Imperate
// We showcase the finest upscale and luxury properties across the Philippines. Our curated selection offers a gateway to discover exceptional living spaces tailored to your lifestyle and investment goals.

export const metadata: Metadata = {
  title: {
    absolute: "Imperate",
    template: "%s | Imperate",
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
    title: "Imperate",
    description:
      "We showcase the finest upscale and luxury properties across the Philippines. Our curated selection offers a gateway to discover exceptional living spaces tailored to your lifestyle and investment goals.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/bgimage.png",
        width: 800,
        height: 600,
        alt: "Imperate",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-[linear-gradient(to_top,rgba(49,49,145,1)10%,rgba(218,218,218,0.001)),url('/bgimage.png')] bg-cover bg-right xl:bg-top text-white pt-[200px] xl:pt-[420px] pb-12 min-h-screen">
      <Box className="max-w-[1700px] mx-auto lg:px-6">
        <div className="flex flex-col xl:flex-row justify-between gap-8 p-2">
          <div className="text-center xl:text-left">
            <p className="mb-4">
              Discover Exceptional Real Estate Tailored to Your Lifestyle and
              Goals
            </p>
            <div className="mb-4">
              <h1 className="text-6xl xl:text-7xl font-extrabold">
                Your Future Matters,
              </h1>
              <h1 className="text-6xl xl:text-7xl font-extrabold">
                Invest with <span>Imperate</span>
              </h1>
            </div>
          </div>
          <div>
            <p className="mb-8 text-center xl:text-left">
              Be the first to be updated with our property listings!
            </p>
            <TeaserForm />
          </div>
        </div>
      </Box>
    </main>
  );
}
