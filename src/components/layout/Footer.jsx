import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">DevPort</h2>
          <p className="mt-3 text-sm text-gray-400">
            On-demand logistics made simple.  
            Move anything, anytime, anywhere.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-white">Follow us on</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-primary">FB</a>
              <a href="#" className="hover:text-primary">IG</a>
              <a href="#" className="hover:text-primary">LI</a>
              <a href="#" className="hover:text-primary">YT</a>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/AboutUs" className="hover:text-primary">About Us</Link></li>
           <li><Link to="/Services" className="hover:text-primary">Services</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/integrations" className="hover:text-primary">API Integrations</Link></li>
            <li><Link to="/services/courier" className="hover:text-primary">InterCity Courier</Link></li>
            <li><Link to="/services/movers" className="hover:text-primary">Packers & Movers</Link></li>
            <li><Link to="/services/twowheelers" className="hover:text-primary">Two Wheelers</Link></li>
            <li><Link to="/services/trucks" className="hover:text-primary">Trucks</Link></li>
            <li><Link to="/enterprise" className="hover:text-primary">Porter Enterprise</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link to="/insurance" className="hover:text-primary">Insurance FAQs</Link></li>
            <li><Link to="/drivers" className="hover:text-primary">Driver Partner T&C</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">DevPort</span>. All rights reserved.
      </div>
    </footer>
  );
}
