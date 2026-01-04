import "@styles/globals.css";
import type { AppProps } from "next/app";

import { Instrument_Serif, Lexend } from "next/font/google";

const instrument_serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-lexend",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${instrument_serif.variable} ${lexend.variable} font-serif`}
    >
      <Component {...pageProps} />
    </main>
  );
}
