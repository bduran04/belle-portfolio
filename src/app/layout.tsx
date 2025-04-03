import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import QueryProvider from '@/providers/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Belle Portfolio',
  description: 'My professional portfolio showcasing my work and skills',
  icons: {
    icon: "/bd-hq.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}