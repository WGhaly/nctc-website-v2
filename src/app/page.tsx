import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import OTCNetworkSection from '@/components/sections/OTCNetworkSection';
import InnovationClustersSection from '@/components/sections/InnovationClustersSection';
import DigitalPlatformSection from '@/components/sections/DigitalPlatformSection';
import StakeholdersSection from '@/components/sections/StakeholdersSection';
import GetInvolvedSection from '@/components/sections/GetInvolvedSection';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <OTCNetworkSection />
      <InnovationClustersSection />
      <DigitalPlatformSection />
      <StakeholdersSection />
      <GetInvolvedSection />
      <Footer />
    </main>
  );
}
