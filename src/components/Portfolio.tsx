import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { ArrowUpRight, Github } from 'lucide-react';

interface PortfolioProps {
  lang: Language;
}

const projects = [
  {
    title: { en: 'SmartStock', ar: 'SmartStock' },
    tags: ['NEXT.JS', 'THREE.JS'],
    image: '/public/smart.jpg',
    desc: { en: 'Immersive 3D data visualization for global shipping logistics.', ar: 'الحصول على الميدالية الذهبية في مسابقة ICEBIV 2025 المقامة في ماليزيا بمشروع SmartStock' }
  },
  {
    title: { en: 'ALLS', ar: 'ALLS' },
    tags: ['GRAPHQL', 'REACT'],
    image: '/public/alls.jpg',
    desc: { en: 'A headless commerce platform designed for extreme performance.', ar: 'الحصول على الميدالية الفضية في مسابقة ICIIC 2024 المقامة في ماليزيا بمشروع ALLS' }
  },
  {
    title: { en: 'Cyber Shield', ar: 'تبني الذكاء الاصطناعي في التعليم : التحديات و الفرص' },
    tags: ['RUST', 'WEBASSEMBLY'],
    image: '/public/ai.jpg',
    desc: { en: 'Enterprise-grade security dashboard featuring predictive threat analysis.', ar: 'المؤتمر الدولي السابع الذي نظمتة أكاديمية المعرفة الدولية.' }
  }
];

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const t = translations[lang].portfolio;

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="text-[10px] font-bold tracking-widest text-brand-blue mb-4">
            {t.badge}
          </div>
          <h2 className="text-5xl font-bold">{t.title}</h2>
        </div>
        <p className="text-gray-500 max-w-xs text-sm md:text-right">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title[lang]}
                className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex gap-2 mb-4">
              {project.tags.map((tag, j) => (
                <span key={j} className="text-[9px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-3">{project.title[lang]}</h3>
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
              {project.desc[lang]}
            </p>
            <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest">
              <a href="#" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                {t.viewCase} <ArrowUpRight size={14} />
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                {t.liveDemo} <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
