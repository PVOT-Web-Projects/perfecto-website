import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Statement from '@/components/Statement';
import CoreOfferings from '@/components/CoreOfferings';
import StatCounters from '@/components/StatCounters';
import WhyChoose from '@/components/WhyChoose';
import PlugAndBuild from '@/components/PlugAndBuild';
import FeaturedProjects from '@/components/FeaturedProjects';
import TrustedBy from '@/components/TrustedBy';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Statement />
        <CoreOfferings />
        <StatCounters />
        <WhyChoose />
        <PlugAndBuild />
        <FeaturedProjects />
        <TrustedBy />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
