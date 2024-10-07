import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbranisMono = JetBrains_Mono({
 subsets:["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",    
    "800"],
    variable:'--font-jetbranisMono'
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbranisMono.variable}`}
      >
        <Navbar/>
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
