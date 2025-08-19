// src/components/service/howitworks/HowItWorksSection.jsx
import { howItWorks } from "../../../data/Services/howitworks"
import StepCard from "./StepCard";
import { ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          How <span className="text-primary">DevPort</span> Works
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          We keep logistics simple so you can focus on your business.
        </p>

        {/* Horizontal Scroll Flow */}
        <div className="mt-12 flex overflow-x-auto space-x-8 pb-6 scrollbar-hide">
          {howItWorks.map((s, i) => (
            <div key={s.id} className="flex items-center flex-shrink-0">
              <StepCard {...s} />

              {/* Arrow between cards */}
              {i < howItWorks.length - 1 && (
                <ArrowRight className="mx-4 text-primary w-8 h-8 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
