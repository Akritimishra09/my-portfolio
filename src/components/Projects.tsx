import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "LMS System (Library Management)",
      description: "A robust learning management system built for scalability and performance. Features user authentication, book catalog management, and automated issuing systems.",
      tech: ["ASP.NET Core", "SQL Server", "C#", "EF Core", "Entity Framework", "Bootstrap"],
      github: "https://github.com/Akritimishra09/LMS-Web-App",
      live: "#",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200",
      type: "Full Stack"
    },
    {
      title: "GitHub Repository Deployer",
      description: "Automated tool for deploying React repositories directly from GitHub. Integrated with CI/CD pipelines to streamline deployment workflows.",
      tech: ["React JS", "TypeScript", "Node.js", "Express", "Vite", "TailwindCSS"],
      github: "https://github.com/Akritimishra09/my-vercel-clone",
      live: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
      type: "DevOps / Web Tool"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#050510] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Featured <span className="neon-text">Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg leading-relaxed">
            A small collection of projects where I've combined technical expertise with creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {projectList.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-3xl cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="px-8 py-3 bg-white text-black font-bold rounded-full scale-0 group-hover:scale-100 transition-transform duration-300">VIEW PROJECT</span>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[400px] object-cover rounded-3xl transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">{project.type}</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white leading-tight uppercase tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-bold text-gray-400 uppercase tracking-tighter hover:bg-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-6">
                  <a href={project.github} className="flex items-center space-x-2 text-white font-bold hover:text-primary transition-colors">
                    <Github size={20} />
                    <span>GITHUB REPO</span>
                  </a>
                  <a href={project.live} className="flex items-center space-x-2 text-white font-bold hover:text-accent transition-colors">
                    <ExternalLink size={20} />
                    <span>LIVE DEMO</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
