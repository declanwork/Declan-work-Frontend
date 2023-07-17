"use Client"
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import localFont from "next/font/local";
import { ToastContainer } from "./nextToast";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./context/index"
const myFont = localFont({
  src: "./neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Regular.otf",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Declan Work",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
    <html lang="en">
      <Head>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta property="og:title" content="Declan Work" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Winners of Flow Hackathn Season 2"
        />
        <meta
          property="og:image"
          content="https://amber-pregnant-crane-656.mypinata.cloud/ipfs/QmNagSHpLjXBQnoKXi2RyrLg2jbo1fwgZT7FZqi6fXGanJ"
        />
      </Head>
      <body className={myFont.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
    </ContextProvider>
  );
}
