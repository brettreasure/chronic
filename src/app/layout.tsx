import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chronic Care Australia - The 90 Study",
  description: "Real world research on the benefits of a structured, 12 week exercise program by qualified exercise physiologists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
