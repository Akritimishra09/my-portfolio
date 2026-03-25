import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfos = [
    { icon: <Mail className="text-primary" />, label: "Email", value: "mishraakriti097@gmail.com", href: "mailto:mishraakriti097@gmail.com" },
    { icon: <Linkedin className="text-secondary" />, label: "LinkedIn", value: "in/akriti-mishra097", href: "https://www.linkedin.com/in/akriti-mishra097/" },
    { icon: <Github className="text-accent" />, label: "GitHub", value: "@Akritimishra09", href: "https://github.com/Akritimishra09" },
    { icon: <Phone className="text-primary" />, label: "Phone", value: "+91 836 054 2592", href: "tel:+91 8360542592" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-10 md:p-20 relative z-10 max-w-4xl mx-auto bg-white/[0.03] border-white/5">
          <div className="text-center">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Let's <span className="neon-text">Connect</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas, opportunities, or just chatting about technology!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {contactInfos.map((info, i) => (
                <motion.a 
                  key={info.label} 
                  href={info.href}
                  target={info.href.startsWith('http') ? "_blank" : undefined}
                  rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/30 cursor-pointer block"
                >
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/20 transition-all border border-white/5 duration-300 mb-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.label}</h4>
                    <span className="text-sm md:text-md font-bold text-white uppercase tracking-tighter transition-colors group-hover:text-primary break-all">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
