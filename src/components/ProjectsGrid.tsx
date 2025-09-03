import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  // Featured projects first, then others
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 animate-cyber-grid" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black tracking-tight"
            animate={{ 
              textShadow: ["0 0 20px hsl(210 100% 56% / 0.5)", "0 0 30px hsl(210 100% 56% / 0.8)", "0 0 20px hsl(210 100% 56% / 0.5)"] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-foreground glow-text">PROYECTOS</span>
            <motion.span 
              className="block bg-gradient-accent bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: "200% 200%" }}
            >
              [DESTACADOS]
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {'>> '}Ejecutando portafolio de desarrollos frontend avanzados...
            <br />
            Cada proyecto implementa arquitecturas reactivas y experiencias inmersivas.
          </motion.p>
          
          {/* Status indicator */}
          <motion.div
            className="flex items-center justify-center gap-3 text-sm text-accent font-mono"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>[CARGANDO_PROYECTOS]</span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-primary"
            >
              ◐
            </motion.span>
            <span>COMPLETADO</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative"
        >
          {/* Grid glow effects */}
          <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-primary/5 rounded-3xl blur-3xl" />
          
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <ProjectCard 
                project={project} 
                index={index} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;