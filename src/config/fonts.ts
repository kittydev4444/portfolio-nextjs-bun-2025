import { Bubblegum_Sans, Inter as FontSans, Nunito } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontBubbleGumSans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-buble",
});

export const fontNunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
