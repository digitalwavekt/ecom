import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Trading Deals | Crafting Royal Elegance",
  description: "Discover premium handcrafted printed sarees and exclusive deals from India. Quality products for festive wear, weddings, and special occasions.",
  keywords: "trading deals, printed sarees, indian sarees, festive wear, wedding sarees, cotton sarees, silk sarees, traditional wear",
  openGraph: {
    title: "Trading Deals | Crafting Royal Elegance",
    description: "Premium handcrafted printed sarees and exclusive deals from India",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-cream text-royal-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#2a1a0e',
              color: '#f5e6d3',
              border: '1px solid #d4a574',
            },
          }}
        />
      </body>
    </html>
  );
}
