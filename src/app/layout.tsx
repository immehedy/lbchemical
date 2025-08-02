import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsappBtn from "@/components/ui/WhatsappBtn";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LB Chemical Industries | Water Treatment Solution provider in Bangladesh",
  description:
    "Best and top water treatment solution provider in Bangladesh. Sole distributor for wasa a Bangladesh government sector for water supply in whole Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsappBtn/>
        <Footer />
      </body>
    </html>
  );
}
