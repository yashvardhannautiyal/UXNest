import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SessionWrapper from "./Components/SessionWrapper/SessionWrapper";
export const metadata = {
  title: "UXNest - Code editor",
  description: "Html, Css, Js editor app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body id="bg-gradient" className = "mainFont">        
        <Navbar />
        {children}
        <Footer />
      </body>
      </SessionWrapper>
    </html>
  );
}
