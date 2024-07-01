import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

const RECOIL = dynamic(() => import('./recoilContextProvider'), { ssr: false })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RECOIL>
      <Component {...pageProps} />
    </RECOIL>
  )
}
