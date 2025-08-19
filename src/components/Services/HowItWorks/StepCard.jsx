// src/components/service/howitworks/StepCard.jsx
export default function StepCard({ id, title, description }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition flex flex-col justify-between w-64 min-h-[220px]">
      {/* Step Number */}
      <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
        {id}
      </div>

      {/* Title & Description */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
