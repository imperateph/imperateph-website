import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers/Providers";
import { font } from "./fonts/fonts";

export const metadata: Metadata = {
  title: {
    absolute: "Imperate Realty",
    template: "%s | Imperate Realty",
  },
  description:
    "We showcase the finest upscale and luxury properties across the Philippines. Our curated selection offers a gateway to discover exceptional living spaces tailored to your lifestyle and investment goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.lexend.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
