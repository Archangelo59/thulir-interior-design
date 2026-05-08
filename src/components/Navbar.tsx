import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const logoUrl = "https://lh3.googleusercontent.com/aida/ADBb0ujWZMiwp45vRhAbu3I5VnyYtmQANCRx-_gjvIa6dPTAi6om38uwfZznX8fHLvN-3JFdLNZEachJ-6njo5-OS8CLIgDk-PDUDmEGw4RuRRqddIKD6QLLp-_gZ-vX6L1wDKtC4T9QD3IpiOm46w5Djti2wQOz1Ca4C3qXypKdbMeP4Y07llf7Fij--H8Ir6i1ffxudcJhLMbVY33bWmfdgmVjIl7ERVIW5zS5ilxNTMk5n7j9L-ytoCHLyEA9d_pA3TCDV6_xmCw";

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-surface/90 backdrop-blur-md border-outline-variant py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            alt="THULIR Interior" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            src={logoUrl} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 relative group ${
                isActive(link.path) 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/contact')} 
            className="hidden sm:block bg-primary text-white px-6 py-2 rounded-lg text-xs font-semibold hover:bg-secondary transition-all hover:shadow-lg active:scale-95"
          >
            Get Free Quote
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-outline-variant overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-wider uppercase ${
                    isActive(link.path) ? 'text-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }} 
                className="bg-primary text-white px-6 py-3 rounded-lg text-xs font-semibold text-center"
              >
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
