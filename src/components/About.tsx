import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      title: 'Adaptability',
      description: 'Quickly learning and mastering new technologies and environments.',
      icon: <Zap className="text-primary" size={24} />,
      gradient: 'from-[#00d2ff] to-[#3a7bd5]'
    },
    {
      title: 'Leadership',
      description: 'Dedicated to collaborative project management and guiding teams.',
      icon: <Target className="text-secondary" size={24} />,
      gradient: 'from-[#9d50bb] to-[#6e48aa]'
    },
    {
      title: 'Problem-Solving',
      description: 'Passionate about finding innovative solutions for complex challenges.',
      icon: <Sparkles className="text-accent" size={24} />,
      gradient: 'from-[#00f2fe] to-[#4facfe]'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass-card p-10 md:p-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A Journey of <span className="neon-text">Innovation</span> & Impact
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Hello there! I'm <span className="text-white font-semibold">Akriti Mishra</span>, a Computer Science student and an aspiring software developer with a knack for building creative digital experiences. 
              My journey started with a fascination for how technology can solve real-world problems. Today, I'm focused on full-stack development and exploring the endless possibilities of software engineering.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I believe in the power of continuous learning and adaptability. My work is driven by the goal of building products that are not only functional but also visually compelling and highly efficient.
            </p>
            <div className="flex space-x-12 mt-12">
              <div>
                <span className="text-3xl font-black text-white block">2+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Years of Learning</span>
              </div>
              <div>
                <span className="text-3xl font-black text-white block">10+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Projects Built</span>
              </div>
              <div>
                <span className="text-3xl font-black text-white block">3+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Certifications</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-6 border-white/5 bg-white/[0.03] group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient} bg-opacity-20 flex items-center justify-center`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] z-0 rounded-full" />
    </section>
  );
};

export default About;
