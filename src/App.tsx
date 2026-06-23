/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import SeasonalPromo from './components/SeasonalPromo';
import EmergencyCallout from './components/EmergencyCallout';
import AvailabilityBanner from './components/AvailabilityBanner';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import TrustIndicators from './components/TrustIndicators';
import WorkProcess from './components/WorkProcess';
import AreaSection from './components/AreaSection';
import MapSection from './components/MapSection';
import TeamSection from './components/TeamSection';
import BookingForm from './components/BookingForm';
import TestimonialsSection from './components/TestimonialsSection';
import WorkDocumentation from './components/WorkDocumentation';
import TipsSection from './components/TipsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingWAButton';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';
import SEO from './components/SEO';
import { useSEOTracker } from './hooks/useSEOTracker';
import { useAnalytics } from './hooks/useAnalytics';
import { useEffect } from 'react';

export default function App() {
  useSEOTracker();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search);
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Jasa Sedot WC Karawang - Layanan Cepat & Terpercaya"
        description="Layanan jasa sedot WC profesional dan cepat di Karawang. Hubungi kami untuk penanganan darurat WC mampet atau penuh sekarang!"
      />
      <Header />
      <SeasonalPromo />
      <EmergencyCallout />
      <AvailabilityBanner />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <TrustIndicators />
      <WorkProcess />
      <AreaSection />
      <MapSection />
      <TeamSection />
      <BookingForm />
      <TestimonialsSection />
      <WorkDocumentation />
      <TipsSection />
      <FAQSection />
      <Footer />
      <FloatingContactButtons />
      <BackToTop />
      <ChatWidget />
    </div>
  );
}
