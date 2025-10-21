import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import Features from '@/components/features';
import CTA from '@/components/CTA';
import Footer from '@/components/footer';
import PricingCards from '@/components/pricing/pricing-component-01';

const pricingData = [
  {
    id: 'basic',
    title: 'Basic',
    description: 'Perfect for starters',
    monthly: 9.99,
    annual: 99.99,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 'pro',
    title: 'Pro',
    description: 'For growing businesses',
    monthly: 19.99,
    annual: 199.99,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'For large organizations',
    monthly: 29.99,
    annual: 299.99,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

export default function LandingPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <PricingCards pricingData={pricingData} />
      <CTA />
      <Footer />
    </div>
  );
}
