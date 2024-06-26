import { Inter } from "next/font/google";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Gallery page app",
  description: "Generated by create Gallery page app",
};

export default function GalleryLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
