import { Inter } from 'next/font/google';
import './globals.css';
import ScrollReveal from '@/components/ScrollReveal';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'PEHSPL — Building Sterile Spaces Where Healing Begins',
  description:
    'Perfect Engitech & Healthcare Solutions Pvt. Ltd. — Engineered to EU standards, trusted by 150+ hospitals across India and abroad. Modular operating theatres, ICUs and IVF labs.',
  icons: { icon: '/Logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
