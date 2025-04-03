// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


export const metadata = {
  title: "UXNest - Code editor",
  description: "Html, Css, Js editor app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="bg-gradient"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
