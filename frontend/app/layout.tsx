import { Metadata } from "next";
import "./globals.css";

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
      <body>
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}