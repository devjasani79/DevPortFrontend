import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          DevPort
        </Link>

        <nav className="space-x-6 hidden md:flex">
          <Link to="/Services" className="text-gray-600 hover:text-primary transition">Services</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-primary transition">Pricing</Link>
          <Link to="/AboutUs" className="text-gray-600 hover:text-primary transition">AboutUs</Link>
        </nav>

        <div className="space-x-3">
          <Link to="/login" className="text-gray-600 hover:text-primary transition">Login</Link>
          <Link
            to="/register"
            className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
