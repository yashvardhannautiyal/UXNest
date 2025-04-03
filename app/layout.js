import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SessionWrapper from "./Components/SessionWrapper";
export const metadata = {
  title: "UXNest - Code editor",
  description: "Html, Css, Js editor app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="bg-gradient">
        <SessionWrapper>
        <Navbar />
        {children}
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
