import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Le Grôs Tour',
  description:
    'Collectif festif de chanteurs musiciens lorrains qui mélagent leurs univers pour mettre le feu !',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
