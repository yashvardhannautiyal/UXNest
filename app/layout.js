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
      <body id="bg-gradient">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
