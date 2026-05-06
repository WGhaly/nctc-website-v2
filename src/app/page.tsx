import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CommercializationServicesSection from '@/components/sections/CommercializationServicesSection';
import LegalToolboxSection from '@/components/sections/LegalToolboxSection';
import OTCNetworkSection from '@/components/sections/OTCNetworkSection';
import InnovationClustersSection from '@/components/sections/InnovationClustersSection';
import FeaturedTechnologiesSection from '@/components/sections/FeaturedTechnologiesSection';
import DigitalPlatformSection from '@/components/sections/DigitalPlatformSection';
import StakeholdersSection from '@/components/sections/StakeholdersSection';
import GetInvolvedSection from '@/components/sections/GetInvolvedSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <CommercializationServicesSection />
        <LegalToolboxSection />
        <OTCNetworkSection />
        <InnovationClustersSection />
        <FeaturedTechnologiesSection />
        <DigitalPlatformSection />
        <StakeholdersSection />
        <GetInvolvedSection />
        <Footer />
      </main>
    </>
  );
}
