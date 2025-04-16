import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SessionWrapper from "./Components/SessionWrapper/SessionWrapper";
import { ThemeContextProvider } from "./context/ThemeContext";
export const metadata = {
  title: "UXNest - Code editor",
  description: "Html, Css, Js editor app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <SessionWrapper>
      <ThemeContextProvider>
      {/* <body className = "dark:bg-gradient mainFont">         */}
      <body className = "bg-gradient mainFont">        
        <Navbar />
        {children}
        <Footer />
      </body>
      </ThemeContextProvider>
      </SessionWrapper>
    </html>
    
  );
}
