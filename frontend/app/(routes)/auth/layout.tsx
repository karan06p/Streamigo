export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-gray-400 h-screen w-full flex flex-col justify-center items-center">{children}</div>;
}
