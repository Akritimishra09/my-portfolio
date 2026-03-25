import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Summer Training Intern",
      company: "Software Development Hub",
      period: "June 2025 - August 2025",
      description: "Focused on UI/UX design and full-stack development. Gained hands-on experience in building user-centric interfaces and optimizing application workflows.",
      skills: ["UI/UX Design", "React", "Figma", "Problem Solving"]
    }
  ];

  const certifications = [
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "May 2025",
      icon: <Award className="text-[#00A4EF]" />,
      link: "/images/AWS.jpeg"
    },
    {
      title: "OCI 2025 Certified Architect Associate",
      issuer: "Oracle Corporation",
      date: "October 2025",
      icon: <Award className="text-[#F80000]" />,
      link: "/images/Oracle.jpeg"
    },
    {
      title: "Legacy Responsive Web Design V8",
      issuer: "FreeCodeCamp",
      date: "November 2023",
      icon: <Award className="text-[#0a0a23]" />,
      link: "/images/FreeCodeCamp.jpeg"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Experience Side */}
        <div>
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Experience</span>
          <h2 className="text-4xl md:text-5xl font-black mb-12">Professonal <span className="neon-text">Journey</span></h2>
          
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.role} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-white/10 group"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary neon-glow group-hover:scale-125 transition-transform" />
                <div className="flex items-center space-x-4 mb-4 text-gray-400">
                  <div className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-tight">{exp.role}</h3>
                <h4 className="text-primary font-bold mb-4">{exp.company}</h4>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(s => <span key={s} className="px-3 py-1 bg-white/5 text-[10px] font-bold text-gray-500 rounded uppercase tracking-widest">{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Side */}
        <div id="certs">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Achieved Skills</span>
          <h2 className="text-4xl md:text-5xl font-black mb-12">Key <span className="neon-text">Certs</span></h2>
          
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, i) => (
              <motion.div 
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 group hover:border-secondary/30 transition-all"
              >
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-secondary/10 transition-colors">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold uppercase tracking-tight leading-tight mb-1">{cert.title}</h3>
                  <p className="text-gray-500 font-medium mb-3">{cert.issuer} • {cert.date}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors group/link"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
