import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bobby Wallace Productions",
  description: "Official website for Bobby Wallace Productions.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/investors", label: "Investors" },
  { href: "/fans", label: "Fans" },
  { href: "/employees", label: "Employees" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800 min-h-screen flex flex-col`}>
        <header className="bg-white shadow-sm flex items-center justify-between px-10 py-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Image src="/logoBrand/Logo.png" alt="Bobby Wallace Productions Logo" width={60} height={60} className="rounded-full" />
            <span className="text-3xl font-serif font-bold tracking-tight text-purple-500">Bobby Wallace Productions</span>
          </div>
          <nav className="flex gap-8 text-lg items-center">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-1 rounded transition font-medium text-black hover:text-purple-500 hover:underline hover:underline-offset-8"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 sm:py-16">
          {children}
        </main>
        <footer className="bg-gray-100 text-gray-500 text-center py-6 text-sm border-t mt-8">
          &copy; {new Date().getFullYear()} Bobby Wallace Productions. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
