import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is DevPort?",
    answer:
      "DevPort is an on-demand logistics platform where you can instantly book trucks, track deliveries, and manage business logistics at scale.",
  },
  {
    question: "Which cities are supported?",
    answer:
      "We are expanding rapidly and currently serve major cities across India, including Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, and more.",
  },
  {
    question: "Can businesses use DevPort?",
    answer:
      "Yes! DevPort Enterprise offers bulk logistics solutions, API integrations, and business dashboards tailored for enterprises.",
  },
  {
    question: "Is my delivery insured?",
    answer:
      "Absolutely. All deliveries are covered with secure insurance policies and real-time tracking to ensure reliability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Answers to some of the most common queries about DevPort.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
