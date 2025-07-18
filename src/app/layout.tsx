import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../styles/_reset-css.css";
import "./globals.css";
import Providers from "./providers";
import { NotifyProvider } from "@/contexts/notifyStates";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // adjust based on what you need
  variable: "--font-roboto-mono", // optional, for use in CSS
  display: "swap", // optional for better UX
});

export const metadata: Metadata = {
  title: "Education Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-textPrimary bg-gray-50`}>
        <Providers>
          <NotifyProvider>{children}</NotifyProvider>
        </Providers>
      </body>
    </html>
  );
}
