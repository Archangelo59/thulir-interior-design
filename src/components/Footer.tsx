import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    const logoUrl = "https://lh3.googleusercontent.com/aida/ADBb0ujWZMiwp45vRhAbu3I5VnyYtmQANCRx-_gjvIa6dPTAi6om38uwfZznX8fHLvN-3JFdLNZEachJ-6njo5-OS8CLIgDk-PDUDmEGw4RuRRqddIKD6QLLp-_gZ-vX6L1wDKtC4T9QD3IpiOm46w5Djti2wQOz1Ca4C3qXypKdbMeP4Y07llf7Fij--H8Ir6i1ffxudcJhLMbVY33bWmfdgmVjIl7ERVIW5zS5ilxNTMk5n7j9L-ytoCHLyEA9d_pA3TCDV6_xmCw";

  return (
    <footer className="relative z-10 bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <img 
              alt="THULIR Interior" 
              className="h-12 w-auto object-contain brightness-0 invert" 
              src={logoUrl} 
            />
          </Link>
          <p className="text-sm opacity-70 leading-relaxed font-sans">
            Designing the future of living spaces with a touch of nature and a commitment to precision. We transform houses into dream homes.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display font-semibold text-lg text-white">Quick Links</h3>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Home</Link>
            <Link to="/about" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">About Us</Link>
            <Link to="/gallery" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Our Portfolio</Link>
            <Link to="/testimonials" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Client Reviews</Link>
            <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Contact Us</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display font-semibold text-lg text-white">Service Categories</h3>
          <nav className="flex flex-col gap-3">
            <Link to="/services" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Residential Interiors</Link>
            <Link to="/services" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Commercial Works</Link>
            <Link to="/services" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Landscape Design</Link>
            <Link to="/services" className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all">Renovations</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display font-semibold text-lg text-white">Contact Details</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 text-sm opacity-70">
              <MapPin size={18} className="text-primary flex-shrink-0" />
              <span>No.47, Balamurugan Nagar, Mangalapuram, Mangadu, Chennai – 600122</span>
            </div>
            <div className="flex gap-3 text-sm opacity-70">
              <Phone size={18} className="text-primary flex-shrink-0" />
              <span>+91 93630 66558<br/>+91 93630 66559</span>
            </div>
            <div className="flex gap-3 text-sm opacity-70">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span>thulirinteriors@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2024 THULIR Interior Design. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
