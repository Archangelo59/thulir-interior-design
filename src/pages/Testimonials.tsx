import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "David Richardson",
      role: "Villa Owner",
      text: "The attention to detail and architectural precision that THULIR brought to our renovation was beyond our expectations. They didn't just design a house; they crafted an experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4_sWgoxX2hWncpIWFnAKYWpv_8mTu4t0y9Ibz6xycwU4DygGYmrvw89jHpleKET87C9sUpNfM9h1ojkqEu3oKNSaAIEmYMe1wszQiohMMQTPzhUBCF022JJjyIYZi9QfkleyxE7llqun9JKdZSCBJsl3W5lDAxftSyEwVo0BIvTnpAzSneITSr0p4ZB870SMau8Hugf5hQ82cXBybH-U8eLJEXalmvGI4VU91yIs-Vs3LKlm59xjsV-8TPRE9vVqOtkAl6L5FhQ"
    },
    {
      name: "Elena Rodriguez",
      role: "Penthouse Resident",
      text: "Working with THULIR felt like a true creative partnership. They listened to our wildest ideas and synthesized them into a cohesive, stunning reality. Truly satisfied!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUBnih8CSWY9Oi_lcnA_RdF_tVz-CDBGRz0Sadjr-8ADIIsAM5jb3ab-VJOprEq5P3ukKEMExFianqsM1VLanGP7OAjvH-nFL41Pghx7RtU-z6C_GsUCoJEYXTYh18eAuhzceqgUEEnZ9YFsi0sV3aSVxCfVmWe8iC02z4ZTQv8tDai32px_3UovlvfmBCUpj36CV_IBrcQ4FiUO0XcmhqAuhXDS9igCDb3pH8rJVSWX0kAXMKuPB0djiRlBuQ-POmf0sQYE7Oug"
    },
    {
      name: "Sanjay Kumar",
      role: "Tech Professional",
      text: "As someone who appreciates clean lines and modern aesthetics, Thulir was the perfect match. Their execution of the modular kitchen and home office was flawless.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Priya Lakshmi",
      role: "Interior Enthusiast",
      text: "The Vastu compliance without compromising on modern design was key for us. THULIR delivered exactly that. Our home feels balanced and beautiful.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <main className="pt-20">
      <section className="py-24 bg-surface-bright">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-xs block mb-4">Client Stories</span>
            <h1 className="text-5xl font-display font-bold mb-6">What Our Clients Say</h1>
            <p className="max-w-2xl mx-auto text-on-surface-variant text-lg">
              Authenticity is the cornerstone of THULIR. We take pride in the lasting relationships we build with our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-10 border border-outline-variant shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg text-on-surface mb-8 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-fixed border-2 border-white overflow-hidden rounded-full shadow-inner">
                  <img className="w-full h-full object-cover" src={t.image} alt={t.name} />
                </div>
                <div>
                  <div className="font-display font-bold text-on-background">{t.name}</div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust symbols section (Bonus) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-xl font-display font-bold text-on-surface-variant/50 uppercase tracking-[0.2em]">Featured On</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black font-display tracking-tighter italic">ARCHDAILY</span>
            <span className="text-2xl font-black font-display tracking-tighter">DEZEEN</span>
            <span className="text-2xl font-black font-display tracking-tighter lowercase">interiorDesign</span>
            <span className="text-2xl font-black font-display tracking-tighter">VOGUE</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
