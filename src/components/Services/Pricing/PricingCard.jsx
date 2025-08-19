// src/components/service/pricing/PricingCard.jsx
import { Truck, Bike, Boxes, Route } from "lucide-react";

const icons = {
  truck: <Truck className="w-6 h-6 text-primary" />,
  bike: <Bike className="w-6 h-6 text-primary" />,
  boxes: <Boxes className="w-6 h-6 text-primary" />,
  route: <Route className="w-6 h-6 text-primary" />,
};

export default function PricingCard({ title, description, price, features, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col">
      {/* Header with Icon */}
      <div className="flex items-center gap-4 p-6 border-b border-gray-100">
        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
          {icons[icon] || icons.truck}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 p-6">
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer with Price + Button */}
      <div className="flex items-center justify-between p-6 border-t border-gray-100">
        <p className="text-xl font-bold text-primary">{price}</p>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
