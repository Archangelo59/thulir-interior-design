import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, 
  UtensilsCrossed, Bed, Armchair, 
  Briefcase, Coffee, CheckCircle, Plus 
} from 'lucide-react';

const homeReveals = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const HomePage = () => {
  const navigate = useNavigate();

  const services = [
    { icon: <UtensilsCrossed size={48} />, title: 'Modular Kitchen', desc: 'Ergonomic and stylish kitchen designs for modern culinary experiences.' },
    { icon: <Bed size={48} />, title: 'Master Bedroom', desc: 'Serene sanctuaries designed for rest, recovery, and aesthetic comfort.' },
    { icon: <Armchair size={48} />, title: 'Living Room', desc: 'Sophisticated common areas that reflect your personality and style.' },
    { icon: <Briefcase size={48} />, title: 'Home Office', desc: 'Productive environments blending professional utility with home comfort.' },
    { icon: <Coffee size={48} />, title: 'Dining Area', desc: 'Elegant settings for shared meals and memorable family gatherings.' }
  ];

  const stats = [
    { value: '500+', label: 'Homes Transformed' },
    { value: '12', label: 'Years Experience' },
    { value: '100%', label: 'Vastu Compliant' },
    { value: '45', label: 'Day Delivery' }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={homeReveals}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase">Premium Interior Design Studio</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-on-background mb-8 leading-[1.1] tracking-tight">
                Architecting <span className="text-primary italic">Soulful</span> Spaces
              </h1>
              
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-sans max-w-xl">
                We blend architectural precision with organic growth to create sustainable, beautiful interiors. Your dream home, reimagined for modern living.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={() => navigate('/contact')} 
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-display font-semibold hover:bg-secondary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20 flex items-center gap-2 group"
                >
                  Start Your Journey
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-on-surface-variant/10 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="pl-6 text-sm font-semibold text-on-surface-variant">
                    <span className="text-primary">500+</span> Happy Clients
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative h-[650px] lg:h-[80vh] grid grid-cols-12 grid-rows-12 gap-4">
              {/* Main Primary Image - Living Room */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-8 row-span-7 rounded-[2.5rem] overflow-hidden shadow-2xl relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Minimalist Living" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-[10px] items-center gap-2 uppercase tracking-[0.2em] font-bold mb-2 opacity-70 flex">
                    <span className="w-8 h-[1px] bg-white"></span>
                    Signature Collection
                  </p>
                  <h3 className="font-display text-2xl font-bold italic">The Ethereal Lounge</h3>
                </div>
              </motion.div>

              {/* Top Right - Kitchen */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-4 row-span-4 rounded-[1.5rem] overflow-hidden shadow-xl relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15a283ff736?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Chef's Kitchen" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                      <Plus size={24} />
                   </div>
                </div>
              </motion.div>

              {/* Bottom Right of Main - Detail */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-4 row-span-3 rounded-[1.5rem] overflow-hidden shadow-lg z-20 relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1616489953149-8ba9f6140483?auto=format&fit=crop&q=80&w=600" 
                  alt="Design Detail" 
                  className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Wide Bottom Image - Bedroom */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-9 row-span-5 rounded-[2rem] overflow-hidden shadow-2xl relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200" 
                  alt="Master Sanctuary" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Master Suite</span>
                </div>
              </motion.div>

              {/* Corner Detail - Final Filler */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="col-span-3 row-span-5 rounded-[1.5rem] overflow-hidden shadow-lg relative bg-primary/5 flex items-center justify-center p-4"
              >
                 <div className="text-center">
                    <div className="text-3xl font-display font-bold text-primary mb-1">12k</div>
                    <div className="text-[8px] uppercase tracking-tighter text-on-surface-variant font-bold">Designs cataloged</div>
                 </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-2xl z-30 hidden xl:block border border-outline-variant"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white rotate-6 group-hover:rotate-0 transition-transform">
                    <CheckCircle size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1 leading-none">Verified quality</div>
                    <div className="text-lg font-display font-bold leading-tight">Vastu Compliant<br/><span className="text-on-surface-variant/50 text-sm">Design Experts</span></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* Services Strip */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={homeReveals}
            className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-on-background">Our Specialized Services</h2>
              <p className="text-on-surface-variant mt-2">Tailored solutions for every corner of your home.</p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 rounded-full border border-outline hover:bg-primary hover:text-white transition-all duration-300 active:scale-90">
                <ArrowLeft size={20} />
              </button>
              <button className="p-3 rounded-full border border-outline hover:bg-primary hover:text-white transition-all duration-300 active:scale-90">
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
          
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6">
            {services.map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { delay: idx * 0.1, duration: 0.6 } }
                }}
                onClick={() => navigate('/services')} 
                className="min-w-[320px] bg-white p-10 rounded-xl border border-outline-variant flex flex-col items-center text-center group hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-on-surface-variant text-sm font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={homeReveals}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl font-display font-bold text-primary">{stat.value}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section (Bonus: matching the visual vibe) */}
      <section className="py-24 bg-inverse-surface overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 opacity-20 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={homeReveals}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to reinvent your space?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
              Our experts are ready to turn your ideas into reality with precision and care.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary text-white px-12 py-4 rounded-xl font-display font-semibold hover:bg-secondary transition-all shadow-lg shadow-primary/20"
            >
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
