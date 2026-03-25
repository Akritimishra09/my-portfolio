import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 relative bg-[#050510] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a href="#" className="text-4xl font-black font-['Outfit'] neon-text tracking-tighter hover:scale-110 inline-block transition-transform duration-300">
            AM
          </a>
        </motion.div>

        <div className="flex justify-center space-x-8 mb-12">
          {[
            { Icon: Github, href: "https://github.com/Akritimishra09" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/akriti-mishra097/" },
            { Icon: Phone, href: "tel:+918360542592" },
            { Icon: Mail, href: "mailto:mishraakriti097@gmail.com" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href !== "#" ? "_blank" : undefined}
              rel={social.href !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary border border-white/5 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <social.Icon size={20} />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-500 text-sm mb-4">
          © {new Date().getFullYear()} Akriti Mishra. All rights reserved.
        </p>
        <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center justify-center">
          Designed with <Heart size={10} className="mx-1 text-primary animate-pulse" /> by Akriti.
        </p>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
    </footer>
  );
};

export default Footer;
