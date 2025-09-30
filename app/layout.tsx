import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Prompt } from "next/font/google";
import dynamic from "next/dynamic";
const SupportWidget = dynamic(() => import("@/components/SupportWidget"), { ssr: false });

const prompt = Prompt({subsets:["latin","thai"], weight:["400","600","700","800"]});

export const metadata: Metadata = {
  title: "LongTrade Academy",
  description: "ยกระดับการเทรดในสไตล์ของคุณด้วยเครื่องมือและความรู้แบบมือโปร",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="th">
      <body className={prompt.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
		{/* ปุ่มแชตลอยมุมขวาล่าง */}
        <SupportWidget />
      </body>
    </html>
  )
}
