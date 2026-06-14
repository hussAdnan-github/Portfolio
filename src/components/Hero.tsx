import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: lang === 'en' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold tracking-widest text-gray-400 mb-6">
            {t.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={word === 'Digital' || word === 'حسين' ? 'text-brand-blue' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <div className="flex flex-wrap gap-4 mb-4">
            <button className="bg-brand-blue text-brand-dark px-8 py-2 rounded-full font-bold hover:bg-brand-blue/90 transition-all">
              {t.viewPortfolio}
            </button>
           
          </div>
          <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
            {t.subtitle}
          </p>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
        >
          <img
            src="/public/ME.png"
            alt="Portrait"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
