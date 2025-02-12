import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Footer from './components/Footer';
// การตั้งค่า font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด PG-V9 PRO </title>
        <meta name="description" content="PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด สมาร์ทโฟนรุ่นใหม่ล่าสุดPG-V9 PRO ความกว้างหน้าจอ6นิ้ว ความละเอียดหน้าจอHD"/>
        <meta name="keywords" content="มือถือ, สมาร์ทโฟน, ร้านขายมือถือ, ราคามือถือ, สั่งซื้อมือถือออนไลน์, ผ่อนมือถือ"/>
        <meta property="og:title" content="PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด" />
        <meta property="og:description" content="PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด สมาร์ทโฟนรุ่นใหม่ล่าสุดPG-V9 PRO ความกว้างหน้าจอ6นิ้ว ความละเอียดหน้าจอHD"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:height" content="2000"/>
        <meta property="og:image:width" content="2000"/>
        <meta property="og:image" content="https://www.mypgphone.com/img/phone-1.jpg"/>

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
