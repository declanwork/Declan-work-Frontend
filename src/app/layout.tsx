import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Declan Work',
  description: '',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="Declan Work"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Winners of Flow Hackathon Season 2"
        />
        <meta property="og:image" content="https://amber-pregnant-crane-656.mypinata.cloud/ipfs/QmNagSHpLjXBQnoKXi2RyrLg2jbo1fwgZT7FZqi6fXGanJ" />
      </Head>
      <body className={inter.className}>
      
        {children}
        
    </body>
        
    </html>
  )
}
