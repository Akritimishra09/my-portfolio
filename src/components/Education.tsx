import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationList = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "Since August 2023",
      score: "7.14 CGPA",
    },
    {
      degree: "Intermediate - PCM",
      institution: "St. Paul's High School",
      location: "Vaishali, Bihar",
      period: "April 2022 - March 2023",
      score: "88%",
    },
    {
      degree: "Matriculation",
      institution: "St. Paul's High School",
      location: "Vaishali, Bihar",
      period: "April 2020 - March 2021",
      score: "92%",
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Academic Background</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">Edu<span className="neon-text">cation</span></h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050510] bg-secondary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(var(--secondary),0.5)] z-10 transition-transform hover:scale-125">
                  <GraduationCap size={18} />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 hover:border-secondary/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">{edu.degree}</h3>
                    <div className="flex items-center space-x-2 text-secondary text-xs font-bold uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full w-fit">
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-300 mb-2">{edu.institution}</h4>
                  <div className="flex items-center text-gray-500 text-sm mb-4 space-x-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  {edu.score && (
                    <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-sm font-bold text-gray-400">Score: <span className="text-white">{edu.score}</span></span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
