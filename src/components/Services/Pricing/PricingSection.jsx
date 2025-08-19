// src/components/service/pricing/PricingSection.jsx
import { services } from "../../../data/Services/data";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Transparent Pricing for Every Service
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          Simple, upfront, and reliable. Pay only for what you need.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <PricingCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
