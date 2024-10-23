import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../providers/Providers";
import { font } from "../fonts/fonts";
import Navbar from "../components/Navbar/Navbar";
// Your Future Matters, Invest with Imperate
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${font.poppins.variable}`}>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
