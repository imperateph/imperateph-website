import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../providers/Providers";
import { font } from "../fonts/fonts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Your Future Matters, Invest with Imperate
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.poppins} antialiased`} style={{height: "100%"}}>
      <body style={{height: "100%"}}>
        <Providers>
          <div className="flex flex-col min-h-screen" style={{height: "100%"}}>
            <Navbar />
            {children}
            <Footer className="mt-auto py-2" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
