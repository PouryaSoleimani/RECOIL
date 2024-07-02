import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

//^ DYNAMIC IMPORT OF RECOIL
const RECOILROOT = dynamic(() => import('./recoilContextProvider'), { ssr: false })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <RECOILROOT>
      <Component {...pageProps} />
    </RECOILROOT>
  )
}
