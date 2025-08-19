import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import FAQ from "../components/landing/FAQ";
import Contact from "../components/landing/Contact";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
