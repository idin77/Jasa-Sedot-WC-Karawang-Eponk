/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import EmergencyCallout from './components/EmergencyCallout';
import AvailabilityBanner from './components/AvailabilityBanner';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import TrustIndicators from './components/TrustIndicators';
import PromoSection from './components/PromoSection';
import WorkProcess from './components/WorkProcess';
import AreaSection from './components/AreaSection';
import MapSection from './components/MapSection';
import ServicePriceCalculator from './components/ServicePriceCalculator';
import BookingForm from './components/BookingForm';
import TestimonialsSection from './components/TestimonialsSection';
import WorkDocumentation from './components/WorkDocumentation';
import TipsSection from './components/TipsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingWAButton';
import BackToTop from './components/BackToTop';
import { useSEOTracker } from './hooks/useSEOTracker';

export default function App() {
  useSEOTracker();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <EmergencyCallout />
      <AvailabilityBanner />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <TrustIndicators />
      <PromoSection />
      <WorkProcess />
      <AreaSection />
      <MapSection />
      <ServicePriceCalculator />
      <BookingForm />
      <TestimonialsSection />
      <WorkDocumentation />
      <TipsSection />
      <FAQSection />
      <Footer />
      <FloatingContactButtons />
      <BackToTop />
    </div>
  );
}
