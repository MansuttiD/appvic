import HeaderPli from '@/components/shared/HeaderPli';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  showHeader = true, // Agrega una prop para controlar la visibilidad del encabezado
}: {
  children: React.ReactNode;
  showHeader?: boolean;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {showHeader && <HeaderPli />} {/* Mostrar el encabezado si showHeader es true */}
        {children}
      </body>
    </html>
  );
}
