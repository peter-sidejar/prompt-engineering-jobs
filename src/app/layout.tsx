import Footer from "@/components/root-layout/footer";
import Header from "@/components/root-layout/header";
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Careerably",
  description: "Find solid work. Build a better life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${inter.variable} antialiased`}
      >
        <main className="font-inter min-h-screen relative flex flex-col justify-between">
        <Header /> 
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
