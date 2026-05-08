import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="pt-20 pb-24">
      <header className="max-w-7xl mx-auto px-6 pt-24 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display font-bold text-primary mb-6">Let's Design Your Future</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Ready to start your transformation? Reach out today for a personalized consultation with our senior designers.
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.section 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white border border-outline-variant p-8 md:p-12 shadow-sm"
        >
          <h2 className="text-3xl font-display font-bold text-primary mb-8">Send a Message</h2>
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 p-10 text-primary text-center font-bold rounded flex flex-col items-center gap-4 border border-primary/20"
            >
              <Send size={48} className="animate-bounce-slow" />
              <div>
                <p className="text-xl">Message Sent Successfully!</p>
                <p className="font-normal text-sm opacity-80 mt-2">We'll get back to you within 24 hours.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider block">Full Name</label>
                  <input 
                    required 
                    className="w-full border border-outline p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" 
                    placeholder="John Doe" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider block">Email Address</label>
                  <input 
                    required 
                    className="w-full border border-outline p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans" 
                    placeholder="john@example.com" 
                    type="email" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider block">Subject</label>
                <select className="w-full border border-outline p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans bg-white">
                  <option>Residential Project</option>
                  <option>Commercial Project</option>
                  <option>Modular Kitchen</option>
                  <option>Renovation</option>
                  <option>Other Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider block">Your Message</label>
                <textarea 
                  required 
                  className="w-full border border-outline p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none font-sans" 
                  placeholder="Tell us about your dream project..." 
                  rows={5}
                ></textarea>
              </div>
              <button 
                className="bg-primary text-white font-display font-bold w-full py-5 hover:bg-secondary transition-all uppercase tracking-widest text-sm shadow-lg shadow-primary/20" 
                type="submit"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </motion.section>

        <motion.aside 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="flex items-start gap-6 p-8 border border-outline-variant bg-surface-container-low transition-transform hover:scale-[1.02] duration-300">
            <div className="p-3 bg-primary/10 text-primary rounded-lg">
              <MapPin size={32} />
            </div>
            <div>
              <h4 className="text-xl font-display font-bold text-tertiary mb-2">Studio Address</h4>
              <p className="text-on-surface-variant leading-relaxed">
                No.47, Balamurugan Nagar, Mangalapuram, Mangadu, Chennai – 600122
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 border border-outline-variant bg-surface-container-low transition-transform hover:scale-[1.02] duration-300">
            <div className="p-3 bg-primary/10 text-primary rounded-lg">
              <Phone size={32} />
            </div>
            <div>
              <h4 className="text-xl font-display font-bold text-tertiary mb-2">Direct Contact</h4>
              <p className="text-on-surface-variant leading-relaxed">+91 93630 66558<br/>+91 93630 66559</p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 border border-outline-variant bg-surface-container-low transition-transform hover:scale-[1.02] duration-300">
            <div className="p-3 bg-primary/10 text-primary rounded-lg">
              <Mail size={32} />
            </div>
            <div>
              <h4 className="text-xl font-display font-bold text-tertiary mb-2">Email Inquiry</h4>
              <p className="text-on-surface-variant leading-relaxed">thulirinteriors@gmail.com</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-video w-full bg-surface-container grayscale overflow-hidden relative border border-outline-variant">
             <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant/30 font-display font-bold uppercase tracking-tighter text-4xl">
               Map View
             </div>
             {/* In a real scenario, an iframe or Google Maps component would go here */}
          </div>
        </motion.aside>
      </div>
    </main>
  );
};

export default ContactPage;
