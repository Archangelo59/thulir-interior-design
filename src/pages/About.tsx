import { motion } from 'motion/react';
import { Leaf, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-secondary-fixed font-semibold text-xs rounded-lg border border-primary">
              <Leaf size={14} /> Est. 2014
            </div>
            <h1 className="text-5xl font-display font-bold text-on-surface leading-tight">Who We Are</h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              At THULIR, we believe every space has a story waiting to be told. Founded in 2014, we have spent a decade transforming residential and commercial environments into masterpieces of functional art.
            </p>
            <div className="flex gap-12 pt-4">
              <div className="border-l-4 border-primary pl-6">
                <span className="block text-3xl font-display font-bold text-primary">500+</span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Projects Delivered</span>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <span className="block text-3xl font-display font-bold text-primary">10+</span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Years Excellence</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl shadow-2xl">
              <img 
                alt="Luxurious modern living room" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuvQIUo5YYaeMdSNYOdGhS9TVOTnYLeeGVj9bGnhOZAIVvD5YL43hkK_nNUiwfQwVxs22U0nYDeWGLHZk2M_hP818JAQ5uJJAJv9yab7cj3guC-GQ56QT_HdObJroMz8RwhX8XWrmUHmJdz4KCQqO0zHAjvUy3j1Qb2YUfhjleMWQunkKRlkT87cjtXmY9NPNtYyQkV0A4JGfinjahPfnIceu0kvmz8b33LdMK0FIZMoWOgdIaj6oB6zZxVB4TNjEZ4EyTLlg5Fg" 
              />
            </div>
            {/* Architectural accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 border border-primary/20 -z-10 rounded-lg"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="relative group">
                <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-2xl shadow-xl border-4 border-white">
                  <img 
                    alt="M. Jothimani - Managing Director" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                    src="/src/assets/images/regenerated_image_1778225547739.png" 
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-10 group-hover:bg-primary/30 transition-all"></div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
              <div className="space-y-2">
                <span className="text-primary font-bold uppercase tracking-widest text-xs">Our Leadership</span>
                <h2 className="text-4xl font-display font-bold text-on-surface">M. Jothimani</h2>
                <p className="text-lg font-medium text-on-surface-variant italic">Managing Director</p>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                With over a decade of expertise in the interior design and infrastructure industry, M. Jothimani leads THULIR with a vision of blending architectural precision with organic innovation. His commitment to quality and sustainable growth has been the driving force behind our mission to transform living spaces across the region.
              </p>
              <div className="pt-4">
                 <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                   View Portfolio <Target size={18} />
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-12 lg:p-16 border border-outline-variant relative overflow-hidden group"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold">Our Mission</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  To redefine living spaces by integrating sustainable, innovative design solutions that reflect the unique personality of our clients. We strive for excellence in every joint and every finish.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-12 lg:p-16 relative overflow-hidden group shadow-xl"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-white/20 text-white flex items-center justify-center rounded-full">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold">Our Vision</h2>
                <p className="text-white/80 leading-relaxed">
                  To be the premier destination for interior design that inspires growth and rejuvenation across the nation. We aim to be the gold standard for quality and trust in the industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
