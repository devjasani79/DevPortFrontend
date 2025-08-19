// src/pages/AboutUs.jsx
"use client";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/Footer";
import FAQ from "../components/landing/FAQ";
import heroBanner from "../assets/hero/herobanner.jpg";

export default function AboutUs() {
return (
    <div className="bg-white text-gray-900">
        <Navbar />
{/* About Hero Section */}
<section
  className="relative pt-32 pb-20 text-white"
style={{
  backgroundImage: `url(${heroBanner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
      About <span className="text-yellow-300">DevPort</span>
    </h1>
    <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-100 leading-relaxed">
      Revolutionizing logistics by connecting businesses, shippers, and transport
      seamlessly — with trust, transparency, and speed.
    </p>

    {/* Optional CTA buttons (if you want them here too) */}
    <div className="mt-8 space-x-4">
      <a
        href="/services"
        className="bg-white text-primary font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100"
      >
        Explore Services
      </a>
      <a
        href="/contact"
        className="border border-white/60 px-6 py-3 rounded-xl hover:bg-white/10"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>



        {/* Mission & Vision */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    At <span className="font-semibold text-primary">DevPort</span>, our mission is to simplify logistics for businesses of all sizes. We empower clients to move goods with ease, connect with verified shippers, and ensure that every delivery is reliable and efficient.
                </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/30 p-10 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    We envision a logistics ecosystem where technology bridges the gap between businesses and transporters — enabling smarter supply chains and creating opportunities for all stakeholders.
                </p>
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-primary mb-12">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="p-8 bg-white rounded-2xl shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-primary mb-3">Transparency</h3>
                        <p className="text-gray-600">
                            Clear communication, transparent pricing, and trusted logistics partners.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-primary mb-3">Efficiency</h3>
                        <p className="text-gray-600">
                            We streamline the entire logistics process from request to delivery — saving time and costs.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-primary mb-3">Reliability</h3>
                        <p className="text-gray-600">
                            With vetted shippers and admin oversight, we ensure safe and timely deliveries.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">FAQs</h2>
            <FAQ />
        </section>

        <Footer />
    </div>
);
}
