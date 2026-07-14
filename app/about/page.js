import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import AboutStats from '@/components/about/AboutStats';
import NicomacSlider from '@/components/about/NicomacSlider';
import PanelStandard from '@/components/about/PanelStandard';
import MissionReveal from '@/components/about/MissionReveal';
import WhyChooseAbout from '@/components/about/WhyChooseAbout';
import Certifications from '@/components/about/Certifications';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Us — PEHSPL',
  description:
    'Two decades of cleanroom expertise, backed by Nicomac’s global technology and India’s largest dedicated installation team. Modular OTs, ICUs and IVF labs, EU-certified end to end.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutStats />
        <NicomacSlider />
        <PanelStandard />
        <MissionReveal />
        <WhyChooseAbout />
        <Certifications />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
