import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { allTechnologies, projects } from '@/data/projects';

const TechStack = () => {
  // Get technology usage count
  const techUsage = allTechnologies.map(tech => ({
    name: tech,
    count: projects.filter(project => project.technologies.includes(tech)).length,
    projects: projects.filter(project => project.technologies.includes(tech))
  })).sort((a, b) => b.count - a.count);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Stack
            <span className="block text-accent">Tecnológico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas utilizadas en el desarrollo de proyectos profesionales.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {techUsage.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="relative p-6 rounded-lg glass border border-white/10 hover:border-accent/30 transition-all duration-smooth bg-gradient-card">
                {/* Technology Name */}
                <div className="text-center space-y-3">
                  <div className="font-semibold text-foreground group-hover:text-accent transition-colors duration-smooth">
                    {tech.name}
                  </div>
                  
                  {/* Usage Badge */}
                  <Badge 
                    variant={tech.count >= 3 ? "default" : "secondary"}
                    className="text-xs font-medium"
                  >
                    {tech.count} proyecto{tech.count !== 1 ? 's' : ''}
                  </Badge>
                </div>

                {/* Hover Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-0 top-full mt-2 p-3 bg-popover border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                >
                  <div className="text-sm space-y-2">
                    <p className="font-medium text-popover-foreground">Proyectos que lo usan:</p>
                    <div className="space-y-1">
                      {tech.projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="text-xs text-muted-foreground">
                          • {project.name}
                        </div>
                      ))}
                      {tech.projects.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          + {tech.projects.length - 3} más...
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-accent opacity-0 rounded-lg"
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">{allTechnologies.length}</div>
              <div className="text-muted-foreground">Tecnologías</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">{projects.length}</div>
              <div className="text-muted-foreground">Proyectos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">
                {Math.round(allTechnologies.length / projects.length * 10) / 10}
              </div>
              <div className="text-muted-foreground">Tech/Proyecto</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;