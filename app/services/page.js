import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import ServicesAccordion from '@/components/services/ServicesAccordion';
import ServiceTeams from '@/components/services/ServiceTeams';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata = {
  title: 'Services — PEHSPL',
  description:
    'End-to-end post-installation support for sterile healthcare environments: AMC programs, rapid repairs, upgradation, HVAC validation, OT complex design consultation and compliance support.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesIntro />
        <ServicesAccordion />
        <ServiceTeams />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
