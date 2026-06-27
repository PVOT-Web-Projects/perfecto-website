import './globals.css';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'PEHSPL — Building Sterile Spaces Where Healing Begins',
  description:
    'Perfect Engitech & Healthcare Solutions Pvt. Ltd. — Engineered to EU standards, trusted by 150+ hospitals across India and abroad. Modular operating theatres, ICUs and IVF labs.',
  icons: { icon: '/Logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
