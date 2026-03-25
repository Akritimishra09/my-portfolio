import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown, Github, Linkedin, Mail, FileText, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
      <div className="blob absolute top-10 left-10 animate-pulse duration-[10s]" />
      <div className="blob absolute bottom-10 right-10 animate-pulse duration-[8s]" />
      <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block px-4 py-1.5 rounded-full glass-card border-primary/20 bg-primary/5 text-primary text-xs tracking-widest font-bold"
        >
          COMPUTER SCIENCE STUDENT & ASPIRING DEVELOPER
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Akriti <span className="neon-text">Mishra</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl text-gray-400 font-medium mb-10 h-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typewriter
            words={['Building Scalable Solutions', 'Creating Digital Experiences', 'Innovative Problem Solver', 'Full-stack Developer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.p>

        <motion.p 
          className="max-w-2xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Passionate about building efficient web applications and exploring the future of technology. 
          Expertise in ASP.NET Core, React, and various cloud technologies.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a href="#projects" className="btn-primary w-full md:w-auto">VIEW MY WORK</a>
          <a href="/images/Aakriti CV new.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline w-full md:w-auto flex items-center justify-center space-x-2">
            <FileText size={18} />
            <span>RESUME</span>
          </a>
          <a href="#contact" className="btn-outline w-full md:w-auto">GET IN TOUCH</a>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://github.com/Akritimishra09" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors hover:scale-125 duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/akriti-mishra097/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors hover:scale-125 duration-300">
            <Linkedin size={24} />
          </a>
          <a href="tel:+918360542592" className="text-white/60 hover:text-primary transition-colors hover:scale-125 duration-300">
            <Phone size={24} />
          </a>
          <a href="mailto:mishraakriti097@gmail.com" className="text-white/60 hover:text-primary transition-colors hover:scale-125 duration-300">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest font-bold mb-2">Scroll Down</span>
        <ArrowDown size={20} className="text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
