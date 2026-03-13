import { Link } from "react-router";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "../../assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] dark:bg-[#0A0A0A] text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-sm flex items-center justify-center">
                <span className="text-white font-semibold text-lg">X</span>
              </div> */}
              <Link to="/">
                <img
                  src={logo}
                  alt="X-Office Parks Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight">
                  X-Office Parks
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Premium Workspaces
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Creating world-class office environments that inspire innovation, 
              foster collaboration, and drive business success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/tenant-experience" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Tenant Experience
                </Link>
              </li>
              <li>
                <Link to="/esg" className="text-gray-400 hover:text-white text-sm transition-colors">
                  ESG & Sustainability
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white text-sm transition-colors">
                  News & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[#D4AF37]">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Office Leasing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Workplace Solutions
                </a>
              </li>
              <li>
                <Link to="/tenant-portal" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Tenant Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[#D4AF37]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Nariman Point, Makers Chambers IV<br />
                  7th Floor<br />
                  Mumbai, Maharashtra 400021
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+912267891234" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +91 22 6789 1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:info@xofficeparks.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  info@xofficeparks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} X-Office Parks. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}