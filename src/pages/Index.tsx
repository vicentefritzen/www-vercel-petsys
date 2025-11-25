import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SystemShowcase from '@/components/SystemShowcase';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SystemShowcase />
      <Features />
      <Benefits />
      <Pricing />
      <ContactForm />
      <CTA />
      <Footer />
    </div>
  );
}