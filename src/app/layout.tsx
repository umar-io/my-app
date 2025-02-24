import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convert Document To Speech",
  description: "Convert Document To Speech By Umard3v",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50`}
        >
          <Navbar />
          <main className="flex-grow flex flex-col items-center justify-center p-8 relative">
            <div className="w-full max-w-4xl mx-auto text-center space-y-8 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-3xl blur-3xl -z-10" />
              {children}
            </div>
          </main>
          <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-4 shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-300 hover:text-white transition-colors">
                &copy; {new Date().getFullYear()} Convert Document To Speech.
                All rights reserved.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}