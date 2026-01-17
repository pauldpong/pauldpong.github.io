import "@styles/globals.css";
import type { AppProps } from "next/app";

import { Instrument_Serif } from "next/font/google";

const instrument_serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${instrument_serif.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  );
}
