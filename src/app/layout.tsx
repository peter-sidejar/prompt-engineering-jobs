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
  title: "Prompt Engineering Jobs",
  description: "Find AI/ML and prompt engineering opportunities. Build your future in artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZWE90P9SKD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZWE90P9SKD');
            `,
          }}
        />
      </head>
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
