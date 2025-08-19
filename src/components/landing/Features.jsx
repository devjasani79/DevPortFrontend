import { Package, Truck, BarChart, Phone, ShieldCheck, Globe } from "lucide-react";

const features = [
    {
        icon: <Truck className="w-8 h-8" />,
        title: "On-Demand Trucks",
        desc: "Book reliable trucks within minutes for any delivery size.",
        gradient: "from-orange-500 to-pink-600",
    },
    {
        icon: <Package className="w-8 h-8" />,
        title: "Doorstep Pickup",
        desc: "We pick up goods directly from your location with verified drivers.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: <BarChart className="w-8 h-8" />,
        title: "Business Analytics",
        desc: "Track costs, fleet efficiency, and delivery performance easily.",
        gradient: "from-teal-500 to-emerald-600",
    },
    {
        icon: <Phone className="w-8 h-8" />,
        title: "24/7 Support",
        desc: "Our team is available round-the-clock to assist you anytime.",
        gradient: "from-pink-500 to-rose-600",
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Secure Deliveries",
        desc: "Insured shipments, live tracking, and safe handling every time.",
        gradient: "from-yellow-500 to-red-500",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Nationwide Reach",
        desc: "Expanding across major cities to serve businesses everywhere.",
        gradient: "from-cyan-500 to-blue-600",
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Why Choose <span className="text-primary">DevPort</span>?
                </h2>
                <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
                    Logistics built for businesses that demand speed, reliability, and scale.
                </p>

                <div className="mt-12 flex space-x-5 overflow-x-auto pb-4 scrollbar-hide">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className={`rounded-xl shadow-md text-white hover:shadow-xl  min-w-[150px] h-[150px] bg-gradient-to-r ${f.gradient} flex items-center justify-center`}
                        >
                            <div className="flex flex-col items-center text-center px-4">
                                {f.icon}
                                <h3 className="mt-3 text-sm font-bold text-white">{f.title}</h3>
                                <p className="mt-2 text-xs text-white/90 leading-snug">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

