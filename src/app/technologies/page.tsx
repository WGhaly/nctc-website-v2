import Navigation from '@/components/layout/Navigation';
import InnovationPortfolioSection from '@/components/sections/InnovationPortfolioSection';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Portfolio — NCTC',
  description:
    'Browse ASRT-funded research inventions assessed for Technology, Market, and Commercialization readiness. Available for licensing, joint development, or spin-off.',
};

export default function TechnologiesPage() {
  return (
    <>
      <Navigation />
      <main className="w-full overflow-x-hidden">
        <InnovationPortfolioSection />
      </main>
      <Footer />
    </>
  );
}
