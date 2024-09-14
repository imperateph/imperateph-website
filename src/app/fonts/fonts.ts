// app/fonts.ts
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const font = {
  lexend,
};
