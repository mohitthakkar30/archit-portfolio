import type { Metadata } from "next";
import { Marcellus, Karla } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Archit Adhvaryu Ayurvedic ENT & Eye Specialist, Ahmedabad",
  description:
    "Dr. Archit Adhvaryu, M.S. (Ayu.) ENT & Ophthalmology Ayurvedic treatment for ear, nose, throat, mouth and eye conditions, and Panchakarma therapies in Chandkheda, Ahmedabad. Call 9904927676.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${karla.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
