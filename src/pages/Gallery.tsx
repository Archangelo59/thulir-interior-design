import { motion } from 'motion/react';

const GalleryPage = () => {
  const images = [
    { 
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "Modern Modular Kitchen",
      className: "masonry-item-tall"
    },
    { 
      url: "https://images.unsplash.com/photo-1600607687946-3b090d2820d0?auto=format&fit=crop&q=80&w=800",
      title: "Luxury Living Lounge",
      className: "masonry-item-wide"
    },
    { 
      url: "https://images.unsplash.com/photo-1616489953149-8ba9f6140483?auto=format&fit=crop&q=80&w=800",
      title: "Master Suite Sanctuary",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      title: "Minimalist Open Plan",
      className: "masonry-item-tall"
    },
    { 
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      title: "Architectural Home Office",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=800",
      title: "Contemporary Bath Ritual",
      className: "masonry-item-wide"
    },
    { 
      url: "https://images.unsplash.com/photo-1556912177-c54030639a61?auto=format&fit=crop&q=80&w=800",
      title: "Chef's Kitchen Detail",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800",
      title: "Elegant Dining Experience",
      className: "masonry-item-tall"
    },
    { 
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
      title: "Sculptural Staircase",
      className: "masonry-item-wide"
    },
    { 
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      title: "Modern Statement Furniture",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
      title: "Atmospheric Lighting",
      className: "masonry-item-tall"
    },
    { 
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
      title: "Nordic Living Values",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
      title: "Symmetry in Motion",
      className: "masonry-item-wide"
    },
    { 
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      title: "Boutique Hotel Aesthetic",
      className: "masonry-item-tall"
    },
    { 
      url: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      title: "Urban Loft Comfort",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
      title: "Vibrant Children's Space",
      className: "masonry-item-tall"
    },
    { 
      url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800",
      title: "Earthy Texture Study",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      title: "Corporate Excellence",
      className: "masonry-item-wide"
    },
    { 
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
      title: "Zen Reading Nook",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1523213139764-16a30c6a5dd1?auto=format&fit=crop&q=80&w=800",
      title: "Industrial Chic Kitchen",
      className: "masonry-item-tall"
    },
    { 
      url: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800",
      title: "Biophilic Design Accent",
      className: ""
    },
    { 
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
      title: "Modern Villa Entrance",
      className: "masonry-item-wide"
    }
  ];

  return (
    <main className="pt-20 pb-24">
      <header className="max-w-7xl mx-auto px-6 pt-24 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display font-bold text-on-surface mb-6">Design Portfolio</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of architectural interiors. From minimalist lofts to opulent villas, witness the Thulir transformation.
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <div className="masonry-grid">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${img.className} relative overflow-hidden group border border-outline-variant rounded-lg cursor-pointer`}
            >
              <img 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={img.url} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-display text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </p>
                <span className="text-primary text-xs font-bold uppercase tracking-widest mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-24 bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Inspired by our work?</h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
            Let's discuss how we can bring this level of craftsmanship to your home.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-display font-semibold hover:bg-secondary transition-all">
            Book a Consultation
          </button>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
