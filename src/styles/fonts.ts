import { Barlow } from "next/font/google";

export const barlow = Barlow({
  subsets: ["latin-ext"],
  variable: "--font-barlow",
  weight: ["200", "300", "400", "500"]
});
