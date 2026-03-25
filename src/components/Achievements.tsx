import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Event Leadership",
      category: "Leadership",
      description: "Led planning and execution of three large-scale college trips.",
      icon: <Trophy className="text-yellow-500" />,
      color: "bg-yellow-500/10"
    },
    {
      title: "Academic Excellence",
      category: "Recognition",
      description: "Recognized by District Magistrate for exceptional academic performance.",
      icon: <Star className="text-blue-500" />,
      color: "bg-blue-500/10"
    },
    {
      title: "Master in Kathak",
      category: "Dedication",
      description: "Earned Master's degree in Kathak, reflecting long-term commitment and excellence.",
      icon: <TrendingUp className="text-green-500" />,
      color: "bg-green-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-32 relative bg-grid overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Milestones</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">Key <span className="neon-text">Wins</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Highlighting some of the most memorable moments in my professional and academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 border-white/5 bg-white/[0.02] flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-3xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{item.category}</span>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-white">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
