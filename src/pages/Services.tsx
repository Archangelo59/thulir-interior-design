import { motion } from 'motion/react';
import { 
  Home, Building2, Box, 
  Lightbulb, Paintbrush, Palette, 
  CheckCircle 
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    { icon: <Home size={32} />, title: 'Residential Design', desc: 'Customized living spaces, modular kitchens, and bedroom wardrobes tailored to your family needs.' },
    { icon: <Building2 size={32} />, title: 'Commercial Interiors', desc: 'Productive workspaces and retail showrooms that enhance brand identity and employee performance.' },
    { icon: <Box size={32} />, title: '3D Visualization', desc: 'High-definition photorealistic renderings that let you walk through your space before a single brick is laid.' },
    { icon: <Lightbulb size={32} />, title: 'Lighting Design', desc: 'Strategic lighting solutions to create the perfect ambiance and highlight architectural features.' },
    { icon: <Paintbrush size={32} />, title: 'Renovations', desc: 'Breathe new life into aging spaces with structural upgrades and modern aesthetic transformations.' },
    { icon: <Palette size={32} />, title: 'Color Consulting', desc: 'Professional color palette selection that influences well-being and achieves the desired mood.' }
  ];

  return (
    <main className="pt-20">
      <section className="relative bg-surface-container-low py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Expert Expertise</span>
            <h1 className="text-5xl font-display font-bold text-on-surface max-w-3xl mb-8 leading-tight">
              Designing Spaces That Breathe Life
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              From concept to implementation, we craft interiors that reflect your personality and enhance your lifestyle with sustainable materials and expert precision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-10 border border-outline-variant bg-white transition-all hover:border-primary group hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-surface-container text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-on-surface group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed font-sans">{service.desc}</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                    <CheckCircle size={18} className="text-primary" /> 
                    <span>Quality Materials</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                    <CheckCircle size={18} className="text-primary" /> 
                    <span>Expert Installation</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (Bonus: visual enhancement) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">Our Work Process</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your needs and vision.' },
              { step: '02', title: 'Design', desc: 'Creating 3D plans and material selection.' },
              { step: '03', title: 'Execution', desc: 'Precision building and installation.' },
              { step: '04', title: 'Handover', desc: 'Final walkthrough and grand opening.' }
            ].map((p, idx) => (
              <div key={idx} className="relative text-center">
                <span className="text-6xl font-display font-black text-black/5 block mb-4">{p.step}</span>
                <div className="relative -mt-12">
                  <h4 className="text-xl font-display font-bold mb-2">{p.title}</h4>
                  <p className="text-sm text-on-surface-variant">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
