import HowItWorksSection from "../components/Services/HowItWorks/howitworkssection";
import PricingSection from "../components/Services/Pricing/PricingSection";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/Footer";
import FAQ from "../components/landing/FAQ";
export default function Services() {
  return (
    <>
        <Navbar />
        <main>

      <PricingSection />
      <HowItWorksSection />
      <FAQ />
        </main>
        <Footer />
    </>
  );
}
