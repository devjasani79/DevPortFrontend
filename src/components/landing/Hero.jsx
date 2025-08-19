import { Link } from "react-router-dom";
import heroBanner from "../../assets/hero/herobanner.jpg";

export default function Hero() {
  return (
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

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          On-Demand Logistics Made Simple with{" "}
          <span className="text-yellow-300">DevPort</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
          Book mini trucks, manage deliveries, and scale your business with
          reliable logistics solutions.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            to="/register"
            className="bg-white text-primary font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100"
          >
            Book a Truck
          </Link>
          <Link
            to="/Services"
            className="border border-white/60 px-6 py-3 rounded-xl hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
