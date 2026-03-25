import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Code, ShieldCheck, Cpu, Box, Globe, CpuIcon } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-primary" />,
      skills: ["C#", "SQL", "JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      title: "Frameworks & Libs",
      icon: <Globe className="text-secondary" />,
      skills: ["ASP.NET Core", "React JS", "Node.js", "Express.js", "Entity Framework", "Bootstrap"]
    },
    {
      title: "Tools & Clouds",
      icon: <Box className="text-accent" />,
      skills: ["Git / GitHub", "AWS Cloud", "Docker", "Postman", "Visual Studio", "Azure"]
    },
    {
      title: "Databases",
      icon: <Database className="text-purple-400" />,
      skills: ["MS SQL Server", "MongoDB", "PostgreSQL", "Firebase Realtime DB"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            My Tech <span className="neon-text">Stack</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 border-white/5 bg-white/[0.03] group hover:border-primary/50"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 hover:bg-primary/20 text-xs font-semibold rounded-lg border border-white/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
