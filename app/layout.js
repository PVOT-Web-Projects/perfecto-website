import './globals.css';
import Loader from '@/components/Loader';
import ScrollReveal from '@/components/ScrollReveal';
import { asset } from '@/lib/assetPath';

export const metadata = {
  title: 'Modular OT, ICU & IVF Lab Design and Execution Company India | PEHSPL',
  description:
    'PEHSPL designs and executes projects for modular operation theatres, ICUs & IVF labs across India, exclusively using EU-certified cleanroom panels. 900+ OTs, 450+ ICUs & 50+ IVF labs delivered to 150+ hospitals.',
  keywords: [
    'modular OT design and execution India',
    'OT design company India',
    'cleanroom panels for hospitals',
    'modular OT contractor',
    'IVF lab design and execution India',
    'ICU cleanroom infrastructure',
    'hospital cleanroom partition systems',
    'EU certified OT panels',
  ],
  icons: { icon: asset('/Logo.png') },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
