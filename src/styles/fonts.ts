import { Barlow, Roboto } from "next/font/google";

export const barlow = Barlow({
  subsets: ["latin-ext"],
  variable: "--font-barlow",
  weight: "400"
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500"]
});
