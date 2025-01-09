import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
      <Navbar />
      <main className="flex w-full">
        <Sidebar />
        {children}
      </main>
      </body>
    </html>
  );
}