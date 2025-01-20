import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Streamigo",
  description: "A video streaming platform for seamless streaming.",
  icons: {
    icon: "/favicon.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />        
      <main className="flex">
      <Sidebar />
        <div className="w-full h-screen overflow-y-auto text-white">        
        {children}
        </div>
      </main>
      </body>
    </html>
  );
}