import { Suspense } from 'react';
import Navigation from '@/components/layout/Navigation';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — NCTC',
  description:
    'Get in touch with NCTC to learn about commercialization services, explore technologies, or submit your own research for assessment.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="w-full overflow-x-hidden">
        <Suspense>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
