/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-serif font-bold tracking-tighter text-azure-900">
            AZURE<span className="font-light italic text-azure-500">COUTURE</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {['Collections', 'Bespoke', 'Pricing', 'Locations'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-uppercase-spaced hover:text-azure-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+1800AZURE" 
            className="hidden sm:flex items-center gap-2 bg-azure-900 text-white px-4 py-2 rounded-full text-xs font-bold transition-transform hover:scale-105"
          >
            <Phone size={14} />
            <span>1-800-AZURE</span>
          </a>
          <button 
            className="md:hidden text-azure-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {['Collections', 'Bespoke', 'Pricing', 'Locations'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-serif border-b border-azure-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://picsum.photos/seed/pool-luxury/1920/1080?blur=1" 
        alt="Luxury Poolside"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-azure-900/60 via-azure-900/30 to-transparent" />
    </div>

    <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <span className="text-white text-uppercase-spaced">Top Rated Bespoke Service</span>
        </div>

        <h1 className="text-6xl md:text-8xl text-white mb-8 leading-[0.9]">
          The Art of <br />
          <span className="italic font-light">Poolside Elegance.</span>
        </h1>

        <p className="text-white/80 text-lg mb-10 max-w-md font-light leading-relaxed">
          Experience the pinnacle of custom tailoring and personal styling, designed for the world's most exclusive resorts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary flex items-center justify-center gap-2 group">
            Get Your Free Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-4 border border-white/30 text-white uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors">
            View Collection
          </button>
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
    >
      <div className="w-[1px] h-12 bg-white/30 mx-auto" />
    </motion.div>
  </section>
);

const TrustBadges = () => (
  <div className="bg-azure-50 py-12 border-y border-azure-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
      <div className="flex items-center gap-3">
        <ShieldCheck className="text-azure-900" />
        <span className="text-uppercase-spaced">Licensed & Insured</span>
      </div>
      <div className="flex items-center gap-3">
        <Award className="text-azure-900" />
        <span className="text-uppercase-spaced">Master Tailor Certified</span>
      </div>
      <div className="flex items-center gap-3">
        <CheckCircle2 className="text-azure-900" />
        <span className="text-uppercase-spaced">100% Fit Guarantee</span>
      </div>
      {/* Brand Logos Placeholders */}
      <div className="flex gap-8 items-center">
        <span className="font-serif italic text-xl">VOGUE</span>
        <span className="font-serif italic text-xl">GQ</span>
        <span className="font-serif italic text-xl">ELLE</span>
      </div>
    </div>
  </div>
);

const Services = () => (
  <section id="pricing" className="section-container">
    <div className="text-center mb-20">
      <span className="text-uppercase-spaced text-azure-600 block mb-4">Our Services</span>
      <h2 className="text-4xl md:text-5xl mb-6">Transparent Pricing for <br />Unparalleled Quality</h2>
      <div className="w-20 h-1 bg-azure-900 mx-auto" />
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Personal Styling",
          price: "$499",
          desc: "A dedicated stylist for your resort wardrobe.",
          features: ["Virtual Consultation", "3 Curated Lookbooks", "Direct Messaging Access"]
        },
        {
          title: "Bespoke Tailoring",
          price: "$1,299",
          desc: "Hand-crafted garments made to your exact specs.",
          features: ["In-Home Fitting", "Premium Italian Fabrics", "Lifetime Alterations"],
          popular: true
        },
        {
          title: "Seasonal Refresh",
          price: "$2,499",
          desc: "Complete wardrobe overhaul for the new season.",
          features: ["Full Wardrobe Audit", "10 Custom Pieces", "Priority Fitting"]
        }
      ].map((service, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className={`p-10 border ${service.popular ? 'border-azure-900 bg-azure-900 text-white' : 'border-azure-100 bg-white'} flex flex-col`}
        >
          <h3 className="text-2xl mb-2">{service.title}</h3>
          <p className={`text-sm mb-8 ${service.popular ? 'text-azure-100' : 'text-azure-500'}`}>{service.desc}</p>
          <div className="text-4xl font-serif mb-8">
            {service.price}<span className="text-sm font-sans opacity-60">/session</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {service.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={16} className={service.popular ? 'text-azure-200' : 'text-azure-900'} />
                {f}
              </li>
            ))}
          </ul>
          <button className={`w-full py-4 text-xs font-bold uppercase tracking-widest border transition-colors ${
            service.popular ? 'bg-white text-azure-900 hover:bg-azure-50' : 'border-azure-900 text-azure-900 hover:bg-azure-900 hover:text-white'
          }`}>
            Book Now
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-azure-900 py-24 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-uppercase-spaced text-azure-200 block mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl">Trusted by the World's Most Discerning Clients</h2>
        </div>
        <div className="flex gap-4">
          <button className="p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"><ChevronRight className="rotate-180" /></button>
          <button className="p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"><ChevronRight /></button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            name: "Julianne V.",
            role: "Fashion Editor",
            text: "Azure Couture transformed my travel wardrobe. The attention to detail in their poolside collection is simply unmatched. Every piece feels like a second skin.",
            img: "https://picsum.photos/seed/person1/100/100"
          },
          {
            name: "Marcus T.",
            role: "Entrepreneur",
            text: "The bespoke tailoring service is a game-changer. They came to my home in Palm Beach, took measurements, and delivered perfection three weeks later.",
            img: "https://picsum.photos/seed/person2/100/100"
          }
        ].map((t, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-6 items-start">
            <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover grayscale hover:grayscale-0 transition-all border-2 border-azure-500/30" referrerPolicy="no-referrer" />
            <div>
              <p className="text-xl font-serif italic mb-4 leading-relaxed">"{t.text}"</p>
              <h4 className="font-bold text-azure-200">{t.name}</h4>
              <span className="text-xs uppercase tracking-widest opacity-50">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Locations = () => (
  <section id="locations" className="section-container">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1">
        <span className="text-uppercase-spaced text-azure-600 block mb-4">Our Presence</span>
        <h2 className="text-4xl md:text-5xl mb-8">Serving the World's Most Exclusive Neighborhoods</h2>
        <p className="text-azure-900/70 mb-10 leading-relaxed">
          Our master tailors and personal stylists are available for in-person consultations in select luxury destinations. We bring the atelier to you.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {['The Hamptons', 'Palm Beach', 'Beverly Hills', 'St. Tropez', 'Monaco', 'Aspen'].map((loc) => (
            <div key={loc} className="flex items-center gap-2 group cursor-pointer">
              <MapPin size={16} className="text-azure-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium group-hover:text-azure-500 transition-colors">{loc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="aspect-square bg-azure-50 rounded-full flex items-center justify-center p-12">
          <img 
            src="https://picsum.photos/seed/map/600/600" 
            alt="Service Areas" 
            className="w-full h-full object-cover rounded-full shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-4 -right-4 bg-white p-6 shadow-xl border border-azure-100">
            <h4 className="text-2xl mb-1">24/7</h4>
            <span className="text-uppercase-spaced text-azure-500">Global Concierge</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-azure-50 pt-24 pb-12 border-t border-azure-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <a href="/" className="text-2xl font-serif font-bold tracking-tighter text-azure-900 mb-6 block">
            AZURE<span className="font-light italic text-azure-500">COUTURE</span>
          </a>
          <p className="text-azure-900/60 max-w-sm mb-8">
            Redefining luxury resort wear through bespoke craftsmanship and personalized styling experiences.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            {['IG', 'FB', 'TW', 'LI'].map(s => (
              <a key={s} href="#" className="w-10 h-10 border border-azure-200 rounded-full flex items-center justify-center text-xs font-bold hover:bg-azure-900 hover:text-white transition-all">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-uppercase-spaced mb-6">Explore</h5>
          <ul className="space-y-4 text-sm text-azure-900/70">
            <li><a href="#" className="hover:text-azure-900 transition-colors">Men's Collection</a></li>
            <li><a href="#" className="hover:text-azure-900 transition-colors">Women's Collection</a></li>
            <li><a href="#" className="hover:text-azure-900 transition-colors">Resort Accessories</a></li>
            <li><a href="#" className="hover:text-azure-900 transition-colors">Bespoke Process</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-uppercase-spaced mb-6">Contact</h5>
          <ul className="space-y-4 text-sm text-azure-900/70">
            <li><a href="tel:+1800AZURE" className="hover:text-azure-900 transition-colors">1-800-AZURE</a></li>
            <li><a href="mailto:concierge@azure.com" className="hover:text-azure-900 transition-colors">concierge@azure.com</a></li>
            <li className="pt-4">
              <span className="block text-xs uppercase font-bold text-azure-900 mb-2">Headquarters</span>
              Palm Beach, FL 33480
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-azure-200 gap-6">
        <span className="text-xs text-azure-900/40">© 2026 Azure Couture. All rights reserved.</span>
        <div className="flex gap-8 text-xs text-azure-900/40 uppercase tracking-widest">
          <a href="#" className="hover:text-azure-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-azure-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <Testimonials />
      <Locations />
      <Footer />
    </div>
  );
}
