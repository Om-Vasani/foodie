import { Inter } from "next/font/google";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Locations page ",
  description: "Generated by create Locations page",
};

export default function LocationsLayout({ children }) {
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
