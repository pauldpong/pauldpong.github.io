import "@styles/globals.css";
import type { AppProps } from "next/app";

import { Instrument_Serif, Noto_Sans } from "next/font/google";

const instrument_serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${instrument_serif.variable} ${noto_sans.variable} font-serif`}
    >
      <Component {...pageProps} />
    </main>
  );
}
